// shared/security/auth.ts
// JWT Authentication Middleware for Node.js/Express

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { RateLimiterMemory } from "rate-limiter-flexible";

// Load environment variables
const JWT_SECRET = process.env.JWT_SECRET || "default-secret";
const RATE_LIMIT_POINTS = parseInt(process.env.RATE_LIMIT_POINTS || "10", 10);
const RATE_LIMIT_DURATION = parseInt(process.env.RATE_LIMIT_DURATION || "60", 10); // 60 seconds

// Rate limiter for authentication endpoints
const rateLimiter = new RateLimiterMemory({
  points: RATE_LIMIT_POINTS,
  duration: RATE_LIMIT_DURATION,
});

/**
 * Middleware to authenticate JWT tokens.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Extract token from cookies or Authorization header
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Forbidden: Invalid token" });
  }
};

/**
 * Middleware to enforce role-based access control (RBAC).
 * @param roles - Array of allowed roles.
 * @returns Middleware function.
 */
export const authorizeRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user?.role || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    next();
  };
};

/**
 * Middleware to rate limit authentication attempts.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const rateLimiterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  rateLimiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).json({ error: "Too Many Requests" });
    });
};

/**
 * Generates a JWT token for a user.
 * @param user - User object containing id and role.
 * @param expiresIn - Token expiry time (e.g., "15m", "7d").
 * @returns JWT token.
 */
export const generateToken = (user: { id: string; role: string }, expiresIn: string = "15m") => {
  return jwt.sign(user, JWT_SECRET, { expiresIn });
};

/**
 * Verifies a JWT token.
 * @param token - JWT token to verify.
 * @returns Decoded token or null if invalid.
 */
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};