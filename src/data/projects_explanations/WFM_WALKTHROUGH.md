# WFM Control Center: Enterprise Operations & Workforce Management Suite

An enterprise-grade, secure, full-stack **Workforce Management (WFM) and Operational Performance Suite**. This centralized web platform serves as a digital headquarters for large-scale service operations, allowing administrators, managers, and quality assurance (QA) auditors to coordinate employee performance, track service level agreements (SLAs), manage overtime lifecycles, register analytical business intelligence sources, and conduct team audits.

> **Project Integrity & Architectural Abstraction**: This repository represents a comprehensive workforce management suite engineered for private enterprise environments. To respect strict intellectual property agreements, all sensitive configurations, actual server IP addresses, credentials, and business-specific metrics have been abstracted. The walkthrough below highlights professional software engineering patterns, service-oriented routing, and database optimization techniques implemented in the suite.

---

## Technical Highlights & Architectural Strengths

- **Service-Oriented Asynchronous Architecture**: Implements decoupled, lightweight backend service endpoints exchanging serialized JSON payloads with event-driven jQuery and client-side modules, avoiding heavy page-load overhead.
- **Granular Role-Based Access Control (RBAC)**: Secure multi-tier session state filters segregation, verifying route access permissions between standard staff, specialized QA auditors, regional managers, and global administrators.
- **Complex Analytical Database Design**: Relational schema driven by highly optimized MySQL queries, leveraging Common Table Expressions (CTEs), transactional data-integrity constraints, database time-interval manipulations, and complex multi-table joins.

---

## Technical Stack & Engineering Patterns

| Layer | Technologies & Libraries | Key Engineering Concepts Demonstrated |
| :--- | :--- | :--- |
| **Backend & Services** | **PHP 7.x / 8.x**, Object-Oriented PDO | Service-oriented endpoint routing, session validation filters, secure database transaction contexts. |
| **Frontend Layout** | **HTML5, CSS3**, **Bootstrap 4** | Responsive UI grids, customized dark-aesthetic developer theme layouts, unified form structures. |
| **Interactive UI** | **jQuery**, **DataTables**, **SweetAlert2** | Dynamic DOM rendering, asynchronous state updates, advanced multi-column client filtering, modern warning workflows. |
| **Data Analytics** | **Chart.js** | Dynamic client-side graphical analytics, real-time trend line and KPI tracking. |
| **Database Engine** | **MySQL (MariaDB)**, Raw SQL | Database design normalization, performance indexing, Common Table Expressions (CTEs), time-difference calculations. |
| **Security & Privacy** | **CryptoJS**, CleanText Sanitizers | Defense against SQL Injection and Cross-Site Scripting (XSS), user password salting, client-to-server data integrity check routines. |

---

## Core Functional Modules

The platform is designed around highly specialized modules structured to manage core business workflows:

### 1. Overtime Audit & Payroll Lifecycle Portal
*   **The Challenge**: Managing thousands of overtime (OT) hour entries with varying payout parameters, preventing duplicate logs, and enforcing strict deadlines for fortnightly payroll cycles (quincenas).
*   **The Solution**: An advanced overtime tracking panel that queries historical operational schedules to validate daily caps and verify hourly inputs.
*   **Engineering Pattern (Payroll Gate)**: Implements stateful period locks. The system parses calendar periods to verify if a payroll cycle is finalized; if closed, it dynamically locks the records from updates or additions at both client and database levels.

### 2. Centralized Business Intelligence Dashboard Registry
*   **The Challenge**: Corporate environments often run dozens of disparate Power BI (`.pbix`) and external reports, leading to visibility fragmentation and outdated schedules.
*   **The Solution**: A metadata-driven data-source registry. Administrators and analysts track update frequencies (Daily, Weekly, Monthly), record owners, source database servers, target countries, and system uptime statuses.
*   **Engineering Pattern (Data Grids)**: Leverages highly configured jQuery DataTables to enable global search, column-level multi-filtering, dynamic excel extraction, and structural editing using modal forms.

### 3. Quality Assurance (QA) Polymorphic Evaluation Engine
*   **The Challenge**: Operational units require unique quality matrices, scoring logic, and review rubrics for distinct teams.
*   **The Solution**: A polymorphic quality evaluation system featuring team-specific scorecards. Analysts can fill out highly customized evaluation forms, which automatically compute composite score outputs, record historical averages, and flag underperforming KPIs.
*   **Polymorphic API Service Routing**: Leverages custom modular service routers that dynamically map scoring templates and verification criteria depending on operational team hierarchies, ensuring high horizontal scalability for new teams.

### 4. Performance Feedback & 1-on-1 Log Manager
Managers log structured performance audits and action plans. This interface ensures persistent documentation of periodic employee coaching, performance reviews, and metrics targets, supporting audit trails and employee development metrics.

### 5. SLA Tracking & Exception Management
Computes real-time Service Level Agreement (SLA) deadlines based on turnaround time parameters. The system automatically tracks delivery variances and provides a structured interface for submitting delivery justifications when exceptions or operational delays occur.

---

## Code Architecture & Process Flows

### Client-to-Server Communication & Validation Lifecycle
All client interactions are non-blocking and undergo three distinct layers of security and data-integrity verification:

```text
[ User Browser ]       [ Frontend Layer ]       [ Backend Controller ]      [ MySQL Database ]
       |                 (Bootstrap/jQuery)          (PHP Endpoint)                 |
       |                        |                          |                        |
  (1) Trigger Action            |                          |                        |
       |----------------------->|                          |                        |
       |                        |  (2) Regex Check &       |                        |
       |                        |      Client Sanitization |                        |
       |                        |------------------+       |                        |
       |                        |                  |       |                        |
       |                        |<-----------------+       |                        |
       |                        |                          |                        |
       |                        |  (3) HTTP AJAX Request   |                        |
       |                        |------------------------->|                        |
       |                        |                          |                        |
       |                        |                          | [ Server-Side checks:  |
       |                        |                          |   1. Active Session    |
       |                        |                          |   2. Secure Input Sanit|
       |                        |                          |   3. RBAC verification ]
       |                        |                          |                        |
       +============================================================================+
       |   ALT: Security Verification Fails                                         |
       |----------------------------------------------------------------------------|
       |                        |                          |                        |
       |                        |<-------------------------|                        |
       |                        |  (4a) Return Error JSON  |                        |
       |   (5a) Alert Dialog    |                          |                        |
       |<-----------------------|                          |                        |
       +============================================================================+
       |   ALT: Security Verification Passes                                        |
       |----------------------------------------------------------------------------|
       |                        |                          |                        |
       |                        |                          |  (4b) Execute Query    |
       |                        |                          |------------------------>|
       |                        |                          |                        |
       |                        |                          |  (5b) Return Rows      |
       |                        |                          |<-----------------------|
       |                        |                          |                        |
       |                        |<-------------------------|                        |
       |                        |  (6b) Return Success JSON|                        |
       |                        |                          |                        |
       |                        |  (7b) Redraw DataTables  |                        |
       |                        |      DOM Components      |                        |
       |                        |------------------+       |                        |
       |                        |                  |       |                        |
       |                        |<-----------------+       |                        |
       |   (8b) Success Alert   |                          |                        |
       |<-----------------------|                          |                        |
       +============================================================================+
```

---

### Database Query & Transaction Processing Flow
To maximize performance and offload computational processes from the application layer, complex calculations (e.g., calculating running totals, verifying period status, checking employee active rosters) are handled directly in the database engine through highly optimized queries.

```text
                [ Inbound Data Transaction Request ]
                                 |
                                 v
                     { 1. Verify Period Status }
                                 |
        +------------------------+------------------------+
        |                                                 |
  [ Closed / Locked ]                              [ Active / Open ]
        |                                                 |
        v                                                 v
  [ Reject Transaction ]                    { 2. Cross-reference Roster }
  (Payroll lock exception)                                |
                                     +--------------------+--------------------+
                                     |                                         |
                              [ Not Found / Inactive ]                  [ Match / Valid ]
                                     |                                         |
                                     v                                         v
                              [ Raise Privilege ]                    [ 3. Complex SQL Query ]
                              (Access violation)                     (Common Table Expressions)
                                                                               |
                                                                               v
                                                                     [ Filter Dates & CTE ]
                                                                               |
                                                                               v
                                                                     [ Multi-Table Joins ]
                                                                               |
                                                                               v
                                                                     ( Return Success JSON )
```

---

## Core Engineering Competencies Illustrated

1. **System Autonomy**: Proven execution of complete software development cycles—from robust database schema design to event-driven scripting and reliable backend application logic.
2. **Defensive Programming Standards**: Implements complete parameter sanitization, secure session validation gates, strict role-based access control, and cryptographically hashed passwords.
3. **Database Performance Indexing**: Leverages optimized multi-table relational queries utilizing Common Table Expressions (CTEs), transactions, and custom window functions to maintain excellent database processing speeds under heavy operational load.
4. **Professional Operational Design**: Integrates unified, clean grids (jQuery DataTables), robust responsive panels (Bootstrap), and dynamic analytics visuals (Chart.js) to deliver an optimized end-to-end operational suite.
