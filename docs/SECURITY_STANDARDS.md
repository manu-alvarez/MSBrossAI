# MSBrossAI Security Standards

This document outlines the **security standards** that **all applications** in the MSBrossAI ecosystem must adhere to. These standards are designed to ensure compliance with **OWASP Top 10 2021** and industry best practices.

---

## 1. API Key Management Policy

### **1.1 Storage and Access**
- **Never hardcode API keys** in source code or configuration files.
- **Use environment variables** for all sensitive keys and secrets.
- **Encrypt environment variables** using **dotenv-vault** or a similar tool.
- **Restrict access** to environment files to authorized personnel only.

### **1.2 Rotation and Revocation**
- **Rotate API keys** every **90 days** or immediately after a suspected compromise.
- **Revoke unused or compromised keys** immediately.
- **Use short-lived tokens** for sensitive operations (e.g., JWT with expiry).

### **1.3 Example: Secure API Key Management

#### **Before (Insecure)**
```python
# config.py
OPENAI_API_KEY = "sk-1234567890abcdef"
```

#### **After (Secure)**
```bash
# .env.vault
DOTENV_VAULT_KEY="dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production"
```

```python
# config.py
import os
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
```

---

## 2. CORS Configuration Standards

### **2.1 Restrict Origins**
- **Never use `allow_origins=["*"]` in production.**
- **Restrict CORS** to trusted domains only.
- **Use environment variables** to configure allowed origins.

### **2.2 Secure Headers**
- **Enable secure headers** (e.g., `Content-Security-Policy`, `X-Content-Type-Options`).
- **Disable credentials** for wildcard origins.

### **2.3 Example: Secure CORS Configuration

#### **Node.js (Express)**
```typescript
// shared/security/cors.ts
import cors from "cors";

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

export const corsMiddleware = cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});
```

#### **Python (FastAPI)**
```python
# shared/security/cors.py
from fastapi.middleware.cors import CORSMiddleware

allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 3. Authentication Requirements

### **3.1 JWT-Based Authentication**
- **Use JWT (JSON Web Tokens)** for authentication.
- **Store tokens securely** (e.g., HTTP-only cookies).
- **Implement token expiry** (e.g., 15 minutes for access tokens, 7 days for refresh tokens).
- **Use strong signing algorithms** (e.g., `HS256` or `RS256`).

### **3.2 Role-Based Access Control (RBAC)**
- **Implement RBAC** to restrict access to sensitive functionalities.
- **Define roles** (e.g., `admin`, `user`, `guest`).
- **Enforce least privilege** (e.g., users should only access what they need).

### **3.3 Example: JWT Authentication Middleware

#### **Node.js (Express)**
```typescript
// shared/security/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Forbidden" });
  }
};

// Role-based access control
export const authorizeRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user?.role || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
};
```

#### **Python (FastAPI)**
```python
# shared/security/auth.py
from fastapi import Request, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt

JWT_SECRET = os.getenv("JWT_SECRET", "default-secret")
security = HTTPBearer()

def authenticate_jwt(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        token = credentials.credentials
        decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        return decoded
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=403, detail="Forbidden")

def authorize_role(roles: list):
    def role_checker(decoded: dict = Depends(authenticate_jwt)):
        if decoded.get("role") not in roles:
            raise HTTPException(status_code=403, detail="Forbidden")
        return decoded
    return role_checker
```

---

## 4. Input Validation Standards

### **4.1 Sanitize All Inputs**
- **Never trust user input**. Sanitize and validate all inputs.
- **Use libraries** for input validation (e.g., `joi` for Node.js, `pydantic` for Python).
- **Reject malicious input** (e.g., SQL injection, XSS).

### **4.2 File Upload Restrictions**
- **Validate file types** (e.g., allow only `.pdf`, `.png`, `.jpg`).
- **Scan files for malware** before processing.
- **Restrict file size** (e.g., max 10MB).

### **4.3 Example: Input Validation

#### **Node.js (Express + Joi)**
```typescript
// shared/security/inputValidator.ts
import Joi from "joi";

export const validateUserInput = (data: any) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};
```

#### **Python (FastAPI + Pydantic)**
```python
# shared/security/input_validator.py
from pydantic import BaseModel, EmailStr, constr

class UserInput(BaseModel):
    username: constr(min_length=3, max_length=30)
    email: EmailStr
    password: constr(min_length=8)
```

---

## 5. Error Handling Standards

### **5.1 Secure Error Messages**
- **Never expose stack traces** in production.
- **Use generic error messages** (e.g., "An error occurred").
- **Log errors securely** for debugging.

### **5.2 Example: Secure Error Handling

#### **Node.js (Express)**
```typescript
// shared/security/errorHandler.ts
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ error: "An error occurred" });
};

// Production-specific error handler
export const productionErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ error: "An error occurred" });
};
```

#### **Python (FastAPI)**
```python
# shared/security/error_handler.py
from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse

async def error_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"error": "An error occurred"},
    )
```

---

## 6. Dependency Management Policy

### **6.1 Regular Audits**
- **Audit dependencies** quarterly for vulnerabilities.
- **Remove unused dependencies** to reduce the attack surface.
- **Update dependencies** to their latest secure versions.

### **6.2 Tools**
- **Node.js**: Use `npm audit` or `yarn audit`.
- **Python**: Use `safety check` or `pip-audit`.
- **Automated Tools**: Use **Dependabot** or **Snyk** for continuous monitoring.

### **6.3 Example: Dependency Audit

#### **Node.js**
```bash
npm audit --fix
```

#### **Python**
```bash
pip install safety
safety check
```

---

## 7. Secure Logging and Monitoring

### **7.1 Logging Standards**
- **Log authentication events** (e.g., successful/failed logins).
- **Log critical operations** (e.g., data modifications).
- **Avoid logging sensitive data** (e.g., passwords, API keys).

### **7.2 Monitoring Standards**
- **Set up alerts** for unusual activities (e.g., brute force attacks).
- **Monitor dependency vulnerabilities** using **Dependabot** or **Snyk**.
- **Conduct regular security audits** (quarterly).

### **7.3 Example: Secure Logging

#### **Node.js (Winston)**
```typescript
// shared/security/logger.ts
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "logs/auth.log" }),
  ],
});

logger.info("User logged in", { userId: "123", status: "success" });
```

#### **Python (Logging)**
```python
# shared/security/logger.py
import logging

logging.basicConfig(filename="logs/auth.log", level=logging.INFO)
logger = logging.getLogger(__name__)

logger.info("User logged in", extra={"userId": "123", "status": "success"})
```

---

## 8. Compliance Checklist

| Standard                          | Requirement                                                                                     | Status       |
|-----------------------------------|-------------------------------------------------------------------------------------------------|--------------|
| **OWASP A01: Broken Access Control** | Implement JWT-based authentication with RBAC.                                                  | ❌ Pending   |
| **OWASP A02: Cryptographic Failures** | Use encrypted environment variables (dotenv-vault).                                            | ❌ Pending   |
| **OWASP A03: Injection**            | Replace dynamic code execution and implement input validation.                                 | ❌ Pending   |
| **OWASP A04: Insecure Design**       | Implement secure CORS, authentication, and error handling standards.                           | ❌ Pending   |
| **OWASP A05: Security Misconfiguration** | Restrict CORS, sanitize error messages, and remove unused dependencies.                        | ❌ Pending   |
| **OWASP A06: Vulnerable Components**  | Update all dependencies to their latest secure versions.                                        | ❌ Pending   |
| **OWASP A07: Identification Failures** | Implement JWT-based authentication with secure session management.                             | ❌ Pending   |
| **OWASP A08: Integrity Failures**     | Implement input validation and file upload restrictions.                                        | ❌ Pending   |
| **OWASP A09: Logging Failures**       | Implement secure logging and monitoring for authentication and critical operations.             | ❌ Pending   |

---

## 9. Next Steps
1. **Rotate all exposed API keys** immediately.
2. **Implement JWT-based authentication** and **CORS restrictions** within **1 week**.
3. **Replace dynamic code execution** and **implement input validation** within **2 weeks**.
4. **Audit and update dependencies** within **3 weeks**.
5. **Implement secure error handling** within **4 weeks**.