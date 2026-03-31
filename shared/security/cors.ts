// shared/security/cors.ts
// Secure CORS Configuration for Node.js/Express

import cors from "cors";

// Load allowed origins from environment variables
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

/**
 * Middleware for secure CORS configuration.
 * 
 * Features:
 * - Restricts origins to allowed list.
 * - Allows credentials (cookies, authorization headers).
 * - Restricts methods to safe HTTP methods.
 * - Restricts headers to safe headers.
 */
export const corsMiddleware = cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
});

/**
 * Middleware to set secure CORS headers.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const setCorsHeaders = (
  req: any,
  res: any,
  next: () => void
) => {
  res.header("Access-Control-Allow-Origin", allowedOrigins.join(","));
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted.cdn.com;"
  );
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "DENY");
  res.header("X-XSS-Protection", "1; mode=block");
  next();
};