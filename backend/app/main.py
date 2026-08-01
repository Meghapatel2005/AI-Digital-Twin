from fastapi import WebSocket
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.prediction import router as prediction_router

from app.api.sensor import router as sensor_router
from app.api.health import router as health_router

app = FastAPI(
    title="AI Digital Twin API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sensor_router, prefix="/api")
app.include_router(health_router, prefix="/api")
app.include_router(prediction_router, prefix="/api")

@app.get("/")
def home():
    return {
        "message": "AI Digital Twin Backend Running 🚀"
    }

import asyncio
from app.services.sensor_service import generate_sensor_data

@app.websocket("/ws/sensor")
async def sensor_websocket(websocket: WebSocket):
    await websocket.accept()

    while True:
        data = generate_sensor_data()
        await websocket.send_json(data)
        await asyncio.sleep(1)