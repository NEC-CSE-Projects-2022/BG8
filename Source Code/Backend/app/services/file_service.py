import os, uuid
from fastapi import UploadFile
from app.config import UPLOAD_DIR, ALLOWED_EXTENSIONS

def validate_file(filename: str):
    ext = filename.split(".")[-1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise ValueError(f"File type {ext} not allowed.")
    return ext

def save_upload(file: UploadFile):
    validate_file(file.filename)
    unique_name = f"{uuid.uuid4().hex}_{file.filename}"
    file_path = os.path.join(UPLOAD_DIR, unique_name)
    with open(file_path, "wb") as f:
        f.write(file.file.read())
    return file_path
