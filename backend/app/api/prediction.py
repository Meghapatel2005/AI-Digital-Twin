from fastapi import APIRouter
from app.services.sensor_service import generate_sensor_data
from app.services.prediction_service import predict_failure

router = APIRouter()

@router.get("/predict")
def prediction():
    sensor = generate_sensor_data()
    return predict_failure(sensor)