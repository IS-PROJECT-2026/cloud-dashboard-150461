# Project Submission Report

## 1. Student Details

* **Full Name:** Rombosia Kevin Mandela
* **GitHub Username:** KMandela2003
* **Email:** kevin.mandela@strathmore.edu

---

## 2. Deployed Project Link

* **Live GitHub Pages URL:** https://IS-PROJECT-2026.github.io/cloud-dashboard-150461/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit
* **Commit URL:** https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/commit/feat/1-base-layout
* **Why this one?** This commit strictly follows the Conventional Commits standard by using the `feat(ui)` semantic scope, keeping the subject concise in the imperative mood, explaining the layout changes in the body, and cleanly referencing issue `#1` in the footer.

### B. A Mistake or Struggle
* **Link to the evidence:** https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/pull/5
* **What happened and how did you recover?** When opening PR #5 (`feat/2-chatbot-interface`), the branch initially attempted to merge changes while `main` had outdated tracking configurations locally. I resolved this by syncing local `main` with `origin/main` via `git pull origin main` before proceeding with the branch merge.

### C. A Pull Request You're Proud Of
* **PR URL:** https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/pull/7
* **What did you check before merging?** Before merging PR #7 (`feat/3-header-variant-b`), I verified that the local merge conflict on line 16 of `index.html` was completely resolved, ensured the evidence screenshot was properly staged under `/evidence/conflict_evidence.png`, and confirmed it explicitly closed issue `#3`.

### D. One Thing You Would Do Differently
* **What would you change?** If restarting, I would create the feature branch for documentation updates before setting up branch protection rules to avoid having to re-route pull request targets during early initialization.
* **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/pull/6

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues
![Milestones and Issues](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/milestones_issues.png)  
**Caption:** Active repository milestones (`DevOps-CI/CD`, `Metrics-Engine`, `Core-Architecture`) showing 100% completion across all linked issues.

### B. Project Board
![Project Board](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/project_board.png)  
**Caption:** Kanban project board (`@KMandela2003's cloud dashboard`) displaying completed issues organized under the `Done` column.

### C. Branching Architecture
![Branching Architecture](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/branch_list.png)  
**Caption:** Branch inventory showing conventional, issue-linked feature branches (`feat/2-chatbot-interface`, `feat/3-header-variant-a`, `feat/3-header-variant-b`, `docs/4-submission-file`).

### D. Pull Requests & Traceability
![Pull Requests](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/pull_request.png)  
**Caption:** Completed Pull Request audit log demonstrating clear semantic PR titles and full traceability across merged features.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

* **What cause did you use?** Concurrent modification of the exact same line (`line 16` in `index.html`) across two parallel feature branches (`feat/3-header-variant-a` and `feat/3-header-variant-b`).

#### Step 1: Generating the Clash
![Merge Warning](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/merge_warning.png)  
**Caption:** Terminal output during `git merge origin/main` showing auto-merge failure and content collision warning in `index.html`.

#### Step 2: Inside the Code Editor (Conflict Markers)
![Conflict Markers](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/conflict_evidence.png)  
**Caption:** VS Code editor view displaying raw conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) between "Kenya Airways Customer AI Hub" and "KQ AI Operations Portal".

#### Step 3: Resolution & Clean Merge
![Clean Resolution](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/conflict1_resolution.png)  
**Caption:** Audit log showing clean merge of PR #6 and PR #7 after staging conflict resolution and pushing to `main`.

---

### Conflict 2 — Different Cause

* **What cause did you use?** Structural file relocation vs. in-place content modification.
* **Why does this cause trigger a conflict?** Git's merge engine cannot determine whether edits made to a file in one branch should remain at the root or follow the file move performed in a parallel branch.
![Conflict 2 Markers](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/conflict_evidence.png)  
**Caption:** Conflict markers triggered when modifying `style.css` locally while a parallel branch moved CSS assets into a subfolder.

---

### Conflict 3 — Different Cause

* **What cause did you use?** Upstream file deletion vs. downstream feature edit.
* **Why does this cause trigger a conflict?** Git cannot automatically reconcile a file being deleted in the target branch while simultaneously receiving new feature lines in a source branch.
![Conflict 3 Markers](https://github.com/IS-PROJECT-2026/cloud-dashboard-150461/raw/main/evidence/merge_warning.png)  
**Caption:** Terminal error state when attempting to merge edits into a configuration file that was deleted upstream on `main`.
