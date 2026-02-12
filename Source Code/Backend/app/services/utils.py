# app/services/utils.py
import os
from fastapi import UploadFile

ALLOWED = {".jpg", ".jpeg", ".png", ".zip"}

def allowed_file(filename: str):
    ext = os.path.splitext(filename)[1].lower()
    return ext in ALLOWED

async def save_upload_file(upload: UploadFile, folder: str):
    filename = upload.filename
    path = os.path.join(folder, filename)
    base, ext = os.path.splitext(filename)
    i = 0
    while os.path.exists(path):
        i += 1
        filename = f"{base}_{i}{ext}"
        path = os.path.join(folder, filename)
    with open(path, "wb") as f:
        f.write(await upload.read())
    return path
