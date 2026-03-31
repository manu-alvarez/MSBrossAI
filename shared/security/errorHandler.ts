// shared/security/errorHandler.ts
// Secure Error Handling for Node.js/Express

import { Request, Response, NextFunction } from "express";

/**
 * Middleware to handle errors securely in development.
 * @param err - Error object.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({
    error: "An error occurred",
    details: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
};

/**
 * Middleware to handle errors securely in production.
 * @param err - Error object.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const productionErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    error: "An error occurred",
  });
};

/**
 * Middleware to handle 404 errors.
 * @param req - Express request object.
 * @param res - Express response object.
 */
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
};

/**
 * Middleware to log errors securely.
 * @param err - Error object.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const logErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[${new Date().toISOString()}] Error: ${err.message}`);
  next(err);
};