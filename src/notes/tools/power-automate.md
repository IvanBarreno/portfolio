# Power Automate

> Microsoft's workflow automation platform — automate repetitive tasks without writing code.

## What is it?

Power Automate (formerly Microsoft Flow) is a cloud-based workflow automation service from Microsoft, part of the Power Platform. It allows users and developers to create automated workflows between applications and services using a visual, low-code interface.

Power Automate connects to 400+ connectors — Microsoft services (SharePoint, Teams, Office 365, Dynamics), cloud platforms (AWS, GCP), databases, email providers, social media, and custom APIs via HTTP.

## Why it matters

Manual, repetitive tasks are a productivity drain in every organization. Power Automate eliminates these:

- An email arrives → extract attachment → save to SharePoint → notify a Teams channel → create a task in Planner — all automatically
- A form is submitted → validate data → create a record in SQL → send a confirmation email — zero human intervention
- A new GitHub PR is opened → notify the team in Teams → assign a reviewer automatically

Power Automate's value is that these workflows can be built by business users, not just developers — reducing the backlog of small automation requests that pile up in IT departments.

## Key Concepts

- **Flow** — an automated workflow; a trigger + one or more actions
- **Trigger** — the event that starts a flow: a new email, a scheduled time, a form submission, an HTTP request
- **Action** — a step in the flow that does something: send an email, write to SharePoint, call an API, update a database record
- **Conditions** — `if/else` branching logic within a flow
- **Apply to each** — loop over a list of items and execute actions for each
- **Expressions** — Power Automate has a function library (`formatDateTime()`, `concat()`, `triggerBody()`) for data manipulation
- **Cloud flows** — run in the cloud, triggered by events
- **Desktop flows (RPA)** — automate legacy desktop apps that have no API by recording mouse/keyboard interactions
- **Solutions** — exportable packages of flows, connections, and tables for deployment across environments

## Use Case Example

```
Trigger: When a new row is added to Excel (SharePoint)
  ↓
Condition: If Status column equals "Approved"
  ↓ Yes
  Action: Send email to manager with row details
  Action: Update SQL Server record (via HTTP connector)
  Action: Post message to Teams channel
  ↓ No
  Action: Send rejection notification email
```

## Related Technologies

Power BI · Power Apps · SharePoint · Microsoft Teams · Logic Apps (Azure) · Zapier · n8n
