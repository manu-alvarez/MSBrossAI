"""
Restaurante Atenea — FastAPI Backend
Serves menu, reservations, and restaurant info for the Atenea web experience.
"""

import os
import sys
import logging
from datetime import datetime
from typing import Optional

import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from database import db

load_dotenv()

logger = logging.getLogger("atenea-server")
logging.basicConfig(level=logging.INFO)

app = FastAPI(title="Restaurante Atenea API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://msbross.me", "https://www.msbross.me", "http://localhost:8080", "http://localhost:8009", "http://localhost:5173"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ReservationCreate(BaseModel):
    customer_name: str
    customer_phone: str = ""
    date: str
    time: str
    num_guests: int = 2
    notes: str = ""


@app.get("/health")
def health_check():
    return {"status": "ok", "service": "atenea-backend", "timestamp": datetime.now().isoformat()}


@app.get("/api/restaurant")
def get_restaurant():
    return db.get_restaurant_info()


@app.get("/api/menu")
def get_menu(category: Optional[str] = None, available_only: bool = True):
    return db.get_menu(category=category, available_only=available_only)


@app.get("/api/reservations")
def get_reservations(date: Optional[str] = None):
    return db.get_reservations(date=date)


@app.post("/api/reservations")
def create_reservation(res: ReservationCreate):
    try:
        return db.create_reservation(
            customer_name=res.customer_name,
            date=res.date,
            time=res.time,
            num_guests=res.num_guests,
            customer_phone=res.customer_phone,
            notes=res.notes,
            source="web",
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/api/public/reservations")
def create_reservation_public(res: ReservationCreate):
    return create_reservation(res)


@app.post("/api/public/token")
def get_public_token(request: Request):
    """Returns a LiveKit token with protocol-negotiated WebSocket URL."""
    api_key = os.getenv("LIVEKIT_API_KEY")
    api_secret = os.getenv("LIVEKIT_API_SECRET")

    if not api_key or not api_secret:
        raise HTTPException(status_code=500, detail="LiveKit not configured")

    # Negotiate correct LiveKit URL based on request protocol
    # For HTTPS via msbross.me: Nginx on port 443 proxies /rtc -> ws://localhost:7880
    is_secure = request.url.scheme == "https"
    host = request.url.hostname

    if is_secure and host not in ("localhost", "127.0.0.1"):
        livekit_url = f"wss://{host}/rtc"
    else:
        livekit_url = os.getenv("LIVEKIT_URL", "ws://localhost:7880")

    from livekit.api import AccessToken, VideoGrants

    identity = f"atenea-web-{datetime.now().timestamp():.0f}"
    token = AccessToken(api_key, api_secret)
    token.with_identity(identity)
    token.with_name(f"Atenea {identity}")
    token.with_grants(VideoGrants(
        room="atenea-room",
        room_join=True,
        can_publish=True,
        can_publish_data=True,
        can_subscribe=True,
    ))

    return {
        "accessToken": token.to_jwt(),
        "livekitUrl": livekit_url,
    }


@app.get("/api/stats")
def get_stats():
    return db.get_stats()


if __name__ == "__main__":
    port = int(os.getenv("PORT", "8009"))
    uvicorn.run(app, host="0.0.0.0", port=port)
