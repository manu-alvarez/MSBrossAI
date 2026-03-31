// shared/security/inputValidator.ts
// Input Validation Utilities for Node.js

import Joi from "joi";
import { Request, Response, NextFunction } from "express";

/**
 * Validates user input for registration.
 * @param data - User input data.
 * @returns Validation result.
 */
export const validateUserRegistration = (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

/**
 * Validates user input for login.
 * @param data - User input data.
 * @returns Validation result.
 */
export const validateUserLogin = (data: { email: string; password: string }) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

/**
 * Validates file uploads.
 * @param file - File object.
 * @param allowedTypes - Array of allowed MIME types.
 * @param maxSize - Maximum file size in bytes.
 * @returns Validation result.
 */
export const validateFileUpload = (
  file: {
    mimetype: string;
    size: number;
  },
  allowedTypes: string[],
  maxSize: number
) => {
  const schema = Joi.object({
    mimetype: Joi.string().valid(...allowedTypes).required(),
    size: Joi.number().max(maxSize).required(),
  });

  return schema.validate(file);
};

/**
 * Sanitizes input to prevent XSS and SQL injection.
 * @param input - User input string.
 * @returns Sanitized string.
 */
export const sanitizeInput = (input: string) => {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\'/g, "''")
    .replace(/\"/g, "\"");
};

/**
 * Middleware to validate request body against a schema.
 * @param schema - Joi schema for validation.
 * @returns Middleware function.
 */
export const validateRequestBody = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};

/**
 * Validates API key format.
 * @param apiKey - API key string.
 * @returns Validation result.
 */
export const validateApiKey = (apiKey: string) => {
  const schema = Joi.string().length(32).hex().required();
  return schema.validate(apiKey);
};