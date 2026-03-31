// shared/security/rateLimiter.ts
// Rate Limiting Middleware for Node.js/Express

import { RateLimiterMemory } from "rate-limiter-flexible";
import { Request, Response, NextFunction } from "express";

// Load rate limit configuration from environment variables
const RATE_LIMIT_POINTS = parseInt(process.env.RATE_LIMIT_POINTS || "10", 10);
const RATE_LIMIT_DURATION = parseInt(process.env.RATE_LIMIT_DURATION || "60", 10); // 60 seconds

// Initialize rate limiter
const rateLimiter = new RateLimiterMemory({
  points: RATE_LIMIT_POINTS,
  duration: RATE_LIMIT_DURATION,
});

/**
 * Middleware to apply rate limiting to API endpoints.
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
      res.status(429).json({
        error: "Too Many Requests",
        retryAfter: RATE_LIMIT_DURATION,
      });
    });
};

/**
 * Middleware to apply rate limiting to authentication endpoints.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const authRateLimiterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const strictRateLimiter = new RateLimiterMemory({
    points: 5, // Stricter limit for auth endpoints
    duration: 60,
  });

  strictRateLimiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).json({
        error: "Too Many Authentication Attempts",
        retryAfter: 60,
      });
    });
};