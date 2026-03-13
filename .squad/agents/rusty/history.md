# Project Context

- **Owner:** Jose Corral
- **Project:** GitHub Copilot session — a presentation telling the story of a dev team facing capacity problems, showing how GitHub Copilot agents solve them
- **Stack:** PowerPoint (corporate GitHub branding), GitHub repo, Markdown, demo application, GitHub Copilot (agents, custom agents, MCPs like Playwright), modernization scenarios
- **Deliverables:** PowerPoint slides, GitHub repo with user stories, demo environment, session script/guide
- **Created:** 2026-03-13

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

### 2026-03-13 — Session Architecture Established

- **Session title:** "GitHub Copilot: De la Sobrecarga al Superpoder" (Spanish-speaking audience)
- **Arc:** Problem → Discovery → Solution → Proof → Vision (~63 min total incl. Q&A)
- **Fictional team:** "Equipo Atlas" — 4 devs, inventory management app, overwhelmed backlog
- **App domain:** Inventory/product management (simple enough to demo, real enough to resonate)
- **Structure doc:** `docs/session-structure.md`
- **Issues repo:** `agenticsquad/copilot-session-demo` — 10 user stories created
- **Labels created:** `squad`, `demo:agents` (3 stories), `demo:custom-agents` (2 stories), `demo:mcp` (2 stories), `demo:modernization` (3 stories)
- **Key design decision:** Every demo starts by picking an issue from the backlog. This creates narrative coherence — the backlog IS the Equipo Atlas backlog.
- **Section 3 (Agents)** is the biggest demo section (10 min). If time is tight, cut Sections 1 and 7 first.
- **Section 5 (MCPs)** Playwright demo is the "wow moment" — protect its time.
- **Modernization stories** were designed with different complexity levels: syntax migration (async/await), architectural (repository pattern), standards compliance (a11y).
