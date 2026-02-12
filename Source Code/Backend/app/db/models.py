# app/db/models.py
from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
import datetime

Base = declarative_base()

class ImageRecord(Base):
    __tablename__ = "image_records"
    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, nullable=False)
    uploaded_at = Column(DateTime, default=datetime.datetime.utcnow)
    prediction = Column(String)
    confidence = Column(Float)
    heatmap_path = Column(String)
    notes = Column(String, nullable=True)
