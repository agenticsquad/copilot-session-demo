# Project Context

- **Owner:** Jose Corral
- **Project:** GitHub Copilot session — a presentation telling the story of a dev team facing capacity problems, showing how GitHub Copilot agents solve them
- **Stack:** PowerPoint (corporate GitHub branding), GitHub repo, Markdown, demo application, GitHub Copilot (agents, custom agents, MCPs like Playwright), modernization scenarios
- **Deliverables:** PowerPoint slides, GitHub repo with user stories, demo environment, session script/guide
- **Created:** 2026-03-13

## Session Architecture (2026-03-13)

Rusty designed the complete session structure: 7-section narrative arc (~63 min) titled "GitHub Copilot: De la Sobrecarga al Superpoder". Key decision: every demo starts from a GitHub Issue in the backlog (Equipo Atlas's work queue). 10 user stories created across demo categories (agents, custom-agents, MCP, modernization). Your next task: write script + slides following 7-section structure (see `docs/session-structure.md`).

**See:** `docs/session-structure.md`, `.squad/decisions.md`

## Learnings

- 2026-03-13: El scaffold de Equipo Atlas funciona mejor como app Express mínima con datos semilla y una UI HTML simple; eso deja el foco del demo en los agentes, no en el framework.
- 2026-03-13: Mantener callbacks y acceso directo a `products.json` crea una deuda técnica útil y segura para demos de modernización sin complicar el setup.

<!-- Append new learnings below. Each entry is something lasting about the project. -->
