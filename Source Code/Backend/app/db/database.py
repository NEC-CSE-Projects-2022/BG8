# app/db/database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os

DB_PATH = os.path.join(os.getcwd(), "app", "db.sqlite")
SQLALCHEMY_DATABASE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
