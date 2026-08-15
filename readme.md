# Kenya Airways Centralized AI Assistant (KQ Support AI)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen)](https://IS-PROJECT-2026.github.io/cloud-dashboard-150461/)
[![Organization](https://img.shields.io/badge/Organization-IS--PROJECT--2026-blue)](https://github.com/IS-PROJECT-2026)

An automated, static web-based AI assistant interface engineered for **Kenya Airways (KQ)** customer and staff support operations. Built as part of the IS PROJECT 2026 Git Workflow Challenge to demonstrate production-grade GitHub mechanics, Agile project management, conventional commit history, and automated CI/CD pipeline deployments.

---

## **Project Overview**

The **KQ Centralized AI Assistant** provides an interface designed to resolve high-frequency customer and operational inquiries. Featuring dark-mode aesthetics inspired by Kenya Airways branding, quick-assist prompts, and a client-side decision engine, this project acts as the frontend proof-of-concept for enterprise support automation.

### **Key Features**
* **Instant Keyword Matching Engine:** Client-side natural language processor for instant response dispatch regarding baggage rules, booking changes, and flight status updates.
* **Staff Support Integration:** Dedicated queries for internal flight crew and operational staff self-service processes.
* **Quick-Assist Prompts:** Interactive sidebar buttons for one-click access to common flight queries.
* **Responsive Dark-Theme UI:** Styled with CSS variables using Kenya Airways' iconic brand palette.

---

## **Repository Architecture**

```text
cloud-dashboard-150461/
│
├── index.html                  # Root landing page (GitHub Pages entry file)
├── style.css                   # Global layout styling, dark theme, and variables
├── app.js                      # Application logic, event listeners, and KB match engine
├── README.md                   # System documentation and setup guide
├── submission.md               # Written assessment answers
│
└── evidence/
    └── conflict_evidence.png   # Screenshot evidence of local merge conflict resolution