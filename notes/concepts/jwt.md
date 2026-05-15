# JWT (JSON Web Tokens)

> A compact, self-contained token for securely transmitting information between parties.

## What is it?

JWT (JSON Web Token, pronounced "jot") is an open standard (RFC 7519) that defines a compact and self-contained way to transmit information as a JSON object, digitally signed so the receiver can verify its authenticity and integrity.

JWTs are widely used for **authentication and authorization** in REST APIs — the server issues a token upon login, and the client sends it with every subsequent request to prove its identity.

## Why it matters

Traditional session-based authentication stores user state on the server — a session record in a database or memory. This creates scaling challenges: if you have multiple servers, they all need access to the same session store.

JWTs solve this by storing all the necessary information inside the token itself. The server doesn't need to look up a session — it just verifies the token's signature, which can be done with a secret key or a public/private key pair. This makes JWTs perfect for **stateless** and **microservices** architectures.

## JWT Structure

A JWT is three Base64URL-encoded parts separated by dots:

```
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEyM30.SomeSignature
    HEADER              PAYLOAD              SIGNATURE
```

- **Header** — algorithm and token type: `{ "alg": "HS256", "typ": "JWT" }`
- **Payload** — the claims (data): `{ "userId": 123, "role": "admin", "exp": 1700000000 }`
- **Signature** — `HMACSHA256(base64(header) + "." + base64(payload), secret)` — proves the token hasn't been tampered with

## Key Concepts

- **Claims** — the payload's key-value pairs; standard ones include `sub` (subject/user ID), `exp` (expiration), `iat` (issued at), `iss` (issuer)
- **Signature** — the server signs the token with a secret; anyone with the secret can verify it; no one without it can fake one
- **Expiration (`exp`)** — JWTs should expire; short-lived access tokens (15 min–1 hour) + long-lived refresh tokens is the standard pattern
- **Refresh tokens** — a second, longer-lived token used only to get a new access token when the old one expires
- **`Authorization: Bearer <token>`** — the standard HTTP header for sending JWTs to an API
- **Stateless verification** — the server doesn't need a database lookup; verify the signature + check expiration = done
- **Don't store sensitive data** — the payload is only encoded, not encrypted; anyone can decode it; never put passwords or secrets in a JWT

## Quick Example

```typescript
// Issuing a JWT (Node.js with jsonwebtoken)
import jwt from "jsonwebtoken";

const token = jwt.sign(
  { userId: user.id, role: user.role },  // payload
  process.env.JWT_SECRET,                // secret
  { expiresIn: "1h" }                    // options
);

// Verifying a JWT (middleware)
export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // attach decoded user to request
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
```

## Related Technologies

REST API · OAuth 2.0 · Express · NestJS · FastAPI · Laravel Sanctum · HTTPS
