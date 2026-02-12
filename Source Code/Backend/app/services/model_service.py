import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
import numpy as np
import cv2
from lime import lime_image
from skimage.segmentation import mark_boundaries

# ----------------------------
# Model definition
# ----------------------------
class EfficientNetBinary(nn.Module):
    def __init__(self, pretrained=False):
        super().__init__()
        base = models.efficientnet_b0(weights=models.EfficientNet_B0_Weights.IMAGENET1K_V1 if pretrained else None)
        try:
            in_features = base.classifier[1].in_features
        except Exception:
            in_features = 1280
        base.classifier = nn.Sequential(nn.Dropout(0.5), nn.Linear(in_features, 1))
        self.model = base
    def forward(self, x):
        return self.model(x)

# Preprocess
IMG_SIZE = 224
preprocess = transforms.Compose([
    transforms.Resize((IMG_SIZE,IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize([0.485,0.456,0.406],[0.229,0.224,0.225])
])

# Load model
def load_model_and_arch(path, arch="effnet", device=None):
    device = device or (torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu"))
    model = EfficientNetBinary(pretrained=False)
    state = torch.load(path, map_location=device)
    model.load_state_dict(state)
    model.to(device)
    model.eval()
    return model, arch

# LIME image
def make_lime_image(model, image_path, num_samples=50):
    pil = Image.open(image_path).convert("RGB")
    arr = np.array(pil)

    explainer = lime_image.LimeImageExplainer()

    def batch_predict(images):
        tensors = []
        for im in images:
            pil_im = Image.fromarray(im.astype(np.uint8))
            t = preprocess(pil_im)
            tensors.append(t)
        batch = torch.stack(tensors).to(next(model.parameters()).device)
        with torch.no_grad():
            out = model(batch)
            probs = torch.sigmoid(out).cpu().numpy()
        probs = probs.reshape(-1,1)
        return np.concatenate([1-probs, probs], axis=1)

    explanation = explainer.explain_instance(arr, batch_predict, top_labels=1, hide_color=0, num_samples=num_samples)
    top = explanation.top_labels[0]
    temp, mask = explanation.get_image_and_mask(top, positive_only=True, num_features=5, hide_rest=False)
    img_bound = mark_boundaries(temp, mask)
    img_bgr = cv2.cvtColor((img_bound*255).astype(np.uint8), cv2.COLOR_RGB2BGR)
    return img_bgr
