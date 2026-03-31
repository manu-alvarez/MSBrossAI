# shared/security/auth.py
# JWT Authentication Middleware for Python/FastAPI

import os
from fastapi import Request, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

# Load environment variables
JWT_SECRET = os.getenv("JWT_SECRET", "default-secret")
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "").split(",")

# Initialize rate limiter
limiter = Limiter(key_func=get_remote_address)

# Security scheme for JWT
security = HTTPBearer()

async def authenticate_jwt(
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> dict:
    """
    Middleware to authenticate JWT tokens.
    
    Args:
        credentials: HTTPAuthorizationCredentials containing the JWT token.
        
    Returns:
        Decoded token if valid.
        
    Raises:
        HTTPException: If token is invalid or expired.
    """
    try:
        token = credentials.credentials
        decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        return decoded
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=403, detail="Forbidden")


def authorize_role(roles: list):
    """
    Middleware to enforce role-based access control (RBAC).
    
    Args:
        roles: List of allowed roles.
        
    Returns:
        Middleware function.
    """
    def role_checker(decoded: dict = Depends(authenticate_jwt)):
        if decoded.get("role") not in roles:
            raise HTTPException(status_code=403, detail="Forbidden")
        return decoded
    return role_checker


def configure_cors(app):
    """
    Configures CORS middleware for FastAPI.
    
    Args:
        app: FastAPI application instance.
    """
    app.add_middleware(
        CORSMiddleware,
        allow_origins=ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.add_middleware(SlowAPIMiddleware)


@limiter.limit("10/minute")
async def rate_limiter(request: Request):
    """
    Rate limiter for authentication endpoints.
    
    Args:
        request: FastAPI request object.
        
    Raises:
        RateLimitExceeded: If rate limit is exceeded.
    """
    pass


def generate_token(user: dict, expires_in: str = "15m") -> str:
    """
    Generates a JWT token for a user.
    
    Args:
        user: User dictionary containing id and role.
        expires_in: Token expiry time (e.g., "15m", "7d").
        
    Returns:
        JWT token.
    """
    return jwt.encode(user, JWT_SECRET, algorithm="HS256")


def verify_token(token: str) -> dict:
    """
    Verifies a JWT token.
    
    Args:
        token: JWT token to verify.
        
    Returns:
        Decoded token or None if invalid.
    """
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    except jwt.PyJWTError:
        return None