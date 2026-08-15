# Final Practical Assignment: Git Workflow & DevOps Submission

## Student & Repository Details
* **Student Name:** Rombosia Kevin Mandela
* **Admission Number:** 150461
* **Course:** IS PROJECT 2026
* **Class Section Team:** GROUP 4E
* **Repository Name:** cloud-dashboard-150461
* **Organization Namespace:** IS-PROJECT-2026
* **Live GitHub Pages URL:** https://IS-PROJECT-2026.github.io/cloud-dashboard-150461/

---

## Technical Architectural Overview
This system serves as a static web dashboard interface for the **Kenya Airways Centralized AI Assistant**. Built using HTML5, modern CSS flexbox layouts, and modular vanilla JavaScript, the application acts as an automated query resolution hub for customer and operational inquiries.

Key architecture components:
1. `index.html`: Absolute root entry point serving as the static layout container for GitHub Pages compilation.
2. `style.css`: Modern dark-theme aesthetic styled around Kenya Airways branding palettes using custom CSS variables.
3. `app.js`: Client-side query parser and keyword matching engine providing real-time response dispatch for baggage, flight status, and HR support queries.

---

## DevOps & Workflow Implementation Summary

### 1. Agile Project Management
* **Milestones:** Defined 3 distinct milestones (`v1.0-Core-Architecture`, `v1.1-Metrics-Engine`, `v1.2-DevOps-CI/CD`).
* **Issues:** Granular tasks were created, assigned, and explicitly linked to milestones before code development.
* **Kanban Tracking:** Tasks were systematically progressed through `To Do`, `In Progress`, and `Done` columns on the repository project board.

### 2. Git Branching & Protection Rules
* Committing directly to `main` was completely restricted. All development occurred on isolated feature branches (`feat/*`, `style/*`, `docs/*`, `fix/*`).
* Main branch protection rules were enforced requiring Pull Requests prior to code integration while keeping explicit approval enforcing disabled to allow solo developer PR merges.

### 3. Conventional Commit History
Semantic commit voice was enforced across all merges, utilizing key imperative commit types:
* `feat`: Introduced structural UI elements and client-side message parsing logic.
* `style`: Enhanced layout spacing, border radii, and visual dark theme tokens.
* `docs`: Built system documentation in `README.md` and finalized theoretical assessment in `submission.md`.
* `fix`: Resolved local line collisions and integrated visual merge conflict evidence.

### 4. Merge Conflict Engineering & Resolution
A local merge conflict was engineered on line 15 of `index.html` across two isolated feature branches (`feat/3-header-variant-a` and `feat/3-header-variant-b`).
* Collision was captured via native VS Code conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`).
* Visual evidence was captured and stored strictly at `/evidence/conflict_evidence.png`.
* Resolution was completed manually, staged, committed, and safely merged into production.

### 5. Automated CI/CD
Automated static compilation and continuous deployment were configured via GitHub Pages pointing directly to the root folder on `main`. Every merged PR automatically triggers deployment pipelines.