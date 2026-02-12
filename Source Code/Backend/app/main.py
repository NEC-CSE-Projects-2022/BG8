
import os, uuid
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.services.model_service import load_model_and_arch, make_lime_image
from app.services.utils import allowed_file, save_upload_file


# ----------------------------
# App and directories
# ----------------------------
app = FastAPI(title="DR Detection API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

BASE = os.path.dirname(os.path.dirname(__file__))
UPLOAD_DIR = os.path.join(BASE, "static/uploads")
HEATMAP_DIR = os.path.join(BASE, "static/heatmaps")
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(HEATMAP_DIR, exist_ok=True)

# Serve static files
app.mount("/static", StaticFiles(directory=os.path.join(BASE, "static")), name="static")

# ----------------------------
# Load model on startup
# ----------------------------
MODEL_PATH = os.path.join(BASE, "models", "EffNet_fold1_best.pth")
MODEL_ARCH = "effnet"
MODEL = None

@app.on_event("startup")
def load_model():
    global MODEL
    print("Loading model...")
    MODEL, _ = load_model_and_arch(MODEL_PATH, arch=MODEL_ARCH)
    print("✅ Model loaded!")

# ----------------------------
# Predict endpoint
# ----------------------------
@app.post("/predict/")
async def predict_endpoint(file: UploadFile = File(...)):
    if not allowed_file(file.filename):
        raise HTTPException(400, "Unsupported file type")

    # Save uploaded file
    path = await save_upload_file(file, UPLOAD_DIR)

    # Predict
    from PIL import Image
    import torch
    from torchvision import transforms

    device = next(MODEL.parameters()).device
    img = Image.open(path).convert("RGB")
    preprocess = transforms.Compose([
        transforms.Resize((224,224)),
        transforms.ToTensor(),
        transforms.Normalize([0.485,0.456,0.406],[0.229,0.224,0.225])
    ])
    inp = preprocess(img).unsqueeze(0).to(device)

    with torch.no_grad():
        logits = MODEL(inp)
        prob = torch.sigmoid(logits).cpu().item()
    label = "DR" if prob > 0.5 else "No_DR"

    # Generate fast LIME heatmap
    heatmap_bgr = make_lime_image(MODEL, path, num_samples=50)

    import cv2
    heat_fname = f"hm_{uuid.uuid4().hex}.jpg"
    heat_path = os.path.join(HEATMAP_DIR, heat_fname)
    cv2.imwrite(heat_path, heatmap_bgr)

    # Response for frontend
    return JSONResponse({
        "prediction": label,
        "confidence": f"{prob*100:.2f}%",
        "heatmap_url": f"/static/heatmaps/{heat_fname}"
    })

# ----------------------------
# Optional: fetch heatmap directly
# ----------------------------
@app.get("/heatmap/{filename}")
def get_heatmap(filename: str):
    path = os.path.join(HEATMAP_DIR, filename)
    if not os.path.exists(path):
        raise HTTPException(404, "Not found")
    return FileResponse(path, media_type="image/jpeg")   







