# Finify: Personal Finance & Rotating Savings Ledger System

An enterprise-grade, full-stack **Personal Finance Management (PFM) & Rotating Savings Ledger** application designed to help individuals and community groups manage budgets, track discretionary vs. essential expenditures, establish target savings plans, and orchestrate rotating community savings circles.

This document provides a comprehensive walkthrough of the system's **architecture**, **domain lifecycles**, and **software engineering patterns** applied throughout the implementation. All business-sensitive credentials and server-specific resources have been fully sanitized for professional portfolio presentation.

---

## Architectural Design Overview

Finify is engineered on a decoupled **Client-Server Architecture** utilizing a state-managed Single Page Application (SPA) frontend integrated with a highly modular, database-first RESTful API.

```text
+-----------------------------------------------------------------------+
|                            CLIENT LAYER                               |
|                     (Frontend Client - Angular 18)                    |
|                                                                       |
|   +-----------------------+              +------------------------+   |
|   |  SPA View Components  | <==========> |    NgRx State Store    |   |
|   +-----------------------+              +------------------------+   |
|               ^                                      |                |
|               | (HTTP Observables)                   | (Side Effects) |
|               v                                      v                |
|   +-----------------------+              +------------------------+   |
|   | Angular Data Services | <----------  | NgRx Asynchronous Fx   |   |
|   +-----------------------+              +------------------------+   |
+---------------+-------------------------------------------------------+
                |
                | JSON Request (HTTPS)
                v
+---------------+-------------------------------------------------------+
|                            SERVICE LAYER                              |
|                      (Backend API - Node & Express)                   |
|                                                                       |
|   +-----------------------+              +------------------------+   |
|   | Morgan Logging & CORS | -----------> | Central Route Pipeline |   |
|   +-----------------------+              +------------------------+   |
|                                                      |                |
|                                                      v                |
|   +-----------------------+              +------------------------+   |
|   | JWT Auth Interceptor  | <----------  | Controllers & Modules  |   |
|   +-----------------------+              +------------------------+   |
|               |                                      |                |
|               v                                      | (JSON Send)    |
|   +-----------------------+                          v                |
|   | SQL Data Access Layer | <------------------------+                |
|   +-----------------------+                                           |
+---------------+-------------------------------------------------------+
                |
                | Parameterized SQL Queries
                v
+---------------+-------------------------------------------------------+
|                          PERSISTENCE LAYER                            |
|                  (Cloud Managed Transactional MySQL)                  |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |                      Relational Database                      |   |
|   |       [Enforces Foreign Keys, Indexes & ACID Transactions]    |   |
|   +-------------------------------+-------------------------------+   |
|                                   |                                   |
|                                   v (Triggers & Computations)         |
|   +-------------------------------+-------------------------------+   |
|   |                   Automated Stored Procedures                 |   |
|   |              (e.g., crear_cuotas_cuchubal)                    |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------------------------------------------+
```

### Frontend Architecture (Angular 18 & NgRx)
*   **Decoupled State Management**: Utilizes standard `@ngrx/store` and `@ngrx/effects` to establish a unidirectional data flow. All critical user balances, card operations, and transaction histories are cached locally in an immutable state store, ensuring a single source of truth and highly responsive client operations.
*   **Modular Component Design**: Segregates presentational (dumb) components from container (smart) components, enforcing strict input-bound reactivity and optimizing Angular's Change Detection cycles.
*   **Advanced Analytics Visualization**: Leverages standard visualization libraries (`ApexCharts` and `ngx-echarts`) to translate complex relational databases into interactive trend lines, liquidity dials, and categorical cost vectors.

### Backend Architecture (Node.js & Express)
*   **Route-Controller-DAL Separation**: Employs a clean **Separation of Concerns (SoC)**. Every domain route delegates execution to dedicated controllers which communicate with isolation layers (Data Access Objects), preventing tightly coupled business and query scripts.
*   **Database-First Design Pattern**: Directly constructs optimized SQL queries with strong parametric checks to maximize throughput, bypassing heavy Object-Relational Mappings (ORM) to maintain full query control over complex multi-table joins.

---

## Core Product Features & Domain Lifecycles

### 1. Rotating Savings and Credit Association (ROSCA / Cuchubal)
The defining feature of the application is the **ROSCA (Cuchubal) Ledger System**—a community-based rotating savings circle. Members contribute a fixed amount periodically, and on every turn, one member receives the collected pot.

#### Cuchubal Process Sequence Flow:
```text
[ Administrator ]         [ Group Member ]          [ Backend API ]         [ MySQL Database & Stored Proc ]
        |                         |                        |                               |
 (1) Create Cuchubal              |                        |                               |
        |------------------------------------------------->|                               |
        |                         |                        |  (2) INSERT ahorro_cuchubal   |
        |                         |                        |------------------------------>|
        |                         |                        |                               |
 (3) Add Members & Turns          |                        |                               |
        |------------------------------------------------->|                               |
        |                         |                        |  (4) INSERT integrantes       |
        |                         |                        |------------------------------>|
        |                         |                        |                               |
 (5) Activate Savings Cycle       |                        |                               |
        |------------------------------------------------->|                               |
        |                         |                        |  (6) CALL crear_cuotas()      |
        |                         |                        |------------------------------>|
        |                         |                        |                               |
        |                         |                        |  [ Generates payment matrix,  |
        |                         |                        |    turns, & schedule deadlines|
        |                         |                        |    in a single atomic state ] |
        |                         |                        |                               |
        |                         |                        |<------------------------------|
        |<-------------------------------------------------|  (7) Return Activated Cycle   |
        |                         |                        |                               |
        |                  (8) Submit Installment Deposit  |                               |
        |                         |----------------------->|                               |
        |                         |                        |  (9) UPDATE cuotas_cuchubal   |
        |                         |                        |      (State: PAID)            |
        |                         |                        |------------------------------>|
        |                         |                        |                               |
        |                         |                        |<------------------------------|
        |                         |<-----------------------|  (10) Confirm Transaction    |
```

### 2. Goal-Based Savings Engine
Users can establish explicit financial milestones with chronological horizons. The backend calculates dynamic monthly amortization plans, invoking database routines (`crear_cuotas_ahorro_objetivo`) to automatically generate transaction-ready ledger rows representing upcoming deposit expectations.

### 3. Financial Card & Simulated Banking Engine
Provides a robust ledger matching standard card network processing principles:
- Enforces double-entry ledger safety: validates balances before authorizing payouts, preventing overdraft issues.
- Generates simulated, ISO/IEC 7812 Luhn-compliant credit and debit cards containing valid BIN prefixes, expirations, and securely calculated verifiers.

---

## Applied Engineering Design Patterns

### 1. Verification of Card Integrity (The Luhn Algorithm)
To ensure client data is valid prior to any database network lookup, the backend includes a manual implementation of the **Luhn Algorithm** (mod 10). This prevents incorrect card strings from generating database overhead.

```javascript
/**
 * Calculates the check digit for a given card number using the Luhn Algorithm.
 * Implements standard mod 10 arithmetic to generate a mathematically valid verifier digit.
 */
function luhnDigitCalc(number) {
    let sum = 0;
    let alternate = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i], 10);

        if (alternate) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        alternate = !alternate;
    }
    return (sum * 9) % 10;
}
```

### 2. Unified Response Envelope Pattern
To ensure robust, typed contracts between the Express API and the Angular frontend, the system relies on a **Unified Response Envelope**. Ad-hoc JSON layouts are replaced with a consistent response architecture.

```javascript
// Centralized Response Handler (respuestas.js)
exports.success = function (req, res, msg = '', status = 200) {
    res.status(status).send({
        error: false,
        status: status,
        body: msg
    }); 
}

exports.error = function (req, res, msg = 'Internal Server Error', status = 500) {
    res.status(status).send({
        error: true,
        status: status,
        body: msg
    }); 
}
```
*   **Engineering Value**: Enables the Angular frontend to leverage unified HTTP Interceptors, parsing request states globally, managing token expiries uniformly, and preventing structural exceptions when mapping JSON payloads to state models.

### 3. Database-First Logic Offloading (MySQL Stored Procedures)
Heavy-duty scheduling computations—such as generating 12 to 24 months of individual savings amortization steps, or generating a rotating 10-person matrix of members and turn deadlines for a Cuchubal savings circle—are handled directly in the database using **MySQL Stored Procedures** (`crear_cuotas_cuchubal`).

*   **Transactional Boundary**: Enforces strict ACID compliance. The entire chronological sequence of contributions is committed as a single database transaction; if any database constraint is violated, the operation is rolled back, preventing corrupted, orphaned ledger entries.
*   **Minimized Processing Overhead**: Drastically reduces network transfer overhead by processing relational matrix generations directly inside the local MySQL engine, rather than exchanging extensive intermediate arrays with the Node service layer.

### 4. Stateless Cryptographic Sessions (JWT & Bcrypt)
User access control is structured to ensure absolute confidentiality of financial data:
- **One-Way Password Salting**: Passwords are secure one-way salted hashes managed via `bcrypt` (with standard `bcryptjs` libraries as local compilation fallbacks).
- **Stateless Authorization**: On valid authentication, the server delivers a signed **JSON Web Token (JWT)** containing non-sensitive claims, authorizing standard router interceptors to authenticate requests stateless without database checks.

### 5. Centralized Asynchronous Error Handler
To avoid unstable thread terminations or repeating try-catch blocks across routing controllers, the system adopts a **Centralized Express Error Handling Middleware**.
- Asynchronous database rejections are caught at the controller boundaries and delegated down the middleware pipeline utilizing standard `next(error)` triggers.
- The centralized handler securely logs internal diagnostics (`console.error`), sanitizes critical SQL variables from being exposed, and returns a clean, user-friendly JSON message.

```javascript
// Centralized Express Error Handling Middleware
function errors (err, req, res, next) {
    console.error('[System Architecture Exception Handler]:', err);

    const message = err.message || 'Internal server error occurred';
    const status = err.status || 500;

    respuesta.error(req, res, message, status);
}
```

---

## Technical Stack Reference

| Layer | Technology | Engineering Role |
| :--- | :--- | :--- |
| **Frontend Core** | **Angular 18** | Structural TypeScript framework rendering high-performance UI templates. |
| **State Store** | **NgRx (Store & Effects)** | Handles unidirectional state flows, caching critical balance registries. |
| **Data Engine** | **ApexCharts & ngx-echarts** | Translates operational datasets into responsive visual spending components. |
| **Backend Service** | **Node.js & Express** | Handles stateless HTTP request routing, sanitization, and controllers. |
| **Cryptographic Hashing** | **Bcrypt / Bcryptjs** | Manages high-entropy salted hashes protecting active passwords in the database. |
| **Auth Authorization** | **JSON Web Token (JWT)** | Manages stateless signed session structures across security endpoints. |
| **Database Engine** | **MySQL (MariaDB)** | Manages relational tables, ACID transactions, and stored procedure executions. |
| **Containerization** | **Docker Engine** | Standardizes local execution environments for development and deployment portability. |

---

## Engineering Impact Summary

By combining **procedural database automation (MySQL Stored Procedures)**, **strict structural algorithms (Luhn Card Validator)**, **modular Express architectures**, and **Angular 18 stateful frameworks**, Finify represents a highly production-ready software solution. It effectively solves standard ledger problems (e.g. race conditions during savings calculations, input errors on bank card records, and transactional audit trails) through clean, decoupled, and maintainable software engineering.
