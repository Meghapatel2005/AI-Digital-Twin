from fastapi import APIRouter
from app.services.sensor_service import generate_sensor_data

router = APIRouter()

@router.get("/sensor")
def get_sensor():
    return generate_sensor_data()