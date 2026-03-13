# Squad Decisions

## Active Decisions

### Session Architecture and Story Design

**Date:** 2026-03-13  
**Author:** Rusty (Lead / Session Architect)  
**Status:** Active

#### Decision

The session follows a 7-section narrative arc (~63 min) titled "GitHub Copilot: De la Sobrecarga al Superpoder". A fictional team (Equipo Atlas) with an inventory management app serves as the through-line.

#### Key Choices

1. **Inventory management app** as the demo domain — simple enough to build quickly, complex enough to showcase all agent capabilities (CRUD, notifications, testing, refactoring).
2. **Every demo starts from a GitHub Issue** in the backlog — this IS the Equipo Atlas backlog. No disconnected demos.
3. **10 user stories** organized by demo category: 3× agents, 2× custom-agents, 2× MCP, 3× modernization.
4. **Playwright MCP demo** is the centerpiece "wow moment" — protect its time if cuts are needed.
5. **Spanish-language** session title and structure — audience is Spanish-speaking.

#### Impact

- Basher needs to build the demo app (inventory management, Node/TS recommended)
- Saul writes script/slides following this structure
- Livingston designs slides following the 7-section breakdown
- All team members should reference `docs/session-structure.md` as source of truth

#### Rationale

The narrative arc (Problem → Discovery → Solution → Proof → Vision) is the most effective structure for a technical demo session. Starting with pain, escalating through capability, and ending with vision gives the audience both understanding and motivation to act.

---

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
