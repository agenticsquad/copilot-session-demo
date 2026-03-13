# Project Context

- **Owner:** Jose Corral
- **Project:** GitHub Copilot session — a presentation telling the story of a dev team facing capacity problems, showing how GitHub Copilot agents solve them
- **Stack:** PowerPoint (corporate GitHub branding), GitHub repo, Markdown, demo application, GitHub Copilot (agents, custom agents, MCPs like Playwright), modernization scenarios
- **Deliverables:** PowerPoint slides, GitHub repo with user stories, demo environment, session script/guide
- **Created:** 2026-03-13

## Session Architecture (2026-03-13)

Rusty designed the complete session structure: 7-section narrative arc (~63 min) titled "GitHub Copilot: De la Sobrecarga al Superpoder". Key decision: every demo starts from a GitHub Issue in the backlog (Equipo Atlas's work queue). 10 user stories created across demo categories (agents, custom-agents, MCP, modernization). Structure: Problem → Discovery → Solution → Proof → Vision.

**See:** `docs/session-structure.md`, `.squad/decisions.md`

## Learnings

### Session Script Completion (2026-03-15)

**What worked:**
- **Narrative tension is everything.** The script opens with pain ("47 issues, 4 devs") and escalates through discovery → solution → proof → vision. Audience feels the journey emotionally, not just intellectually.
- **Equipo Atlas as proxy.** Fictional team allows audience to see themselves. "That's my team" moment drives engagement. Reference the backlog constantly to anchor it in reality.
- **Demo cues > full scripts.** Presenters need guardrails, not word-for-word scripts. Each demo section has [DEMO: descripción] markers. Presenters can improv while staying on track.
- **Transitions are critical.** Every section ends with a question or revelation that naturally leads to the next. "But what if...?" "That's where MCPs come in..." These aren't filler—they're narrative glue.
- **Playwright MCP is the wow moment.** Protect its time. Audiences are amazed when they see a browser open in real-time and the agent navigate it. Don't cut this demo.
- **Pre-session checklist saves panic.** Including fallback plans (pre-recorded clips, slide pivots) removes the terror of live demos failing. Presenters can recover gracefully.
- **Q&A anticipation is prep work.** Pre-writing 10 likely questions means the presenter isn't caught off-guard. "That's a great question" + prepared answer = authority.

### Style Notes for Saul

- **"Conversational but precise"** means avoiding jargon while being technical. Replace "leverage distributed model inference" with "the agente can handle multiple files at once."
- **Spanish fluency matters.** Not translations—native Spanish phrasing. "El backlog que no paraba de crecer" is better than "el backlog que no dejaba de crecer" (more natural accent).
- **Tone: excited engineer, not salesperson.** Excitement about *the technology working* vs. excitement about *selling Copilot*. There's a difference. Saul cares that teams solve real problems.
- **Never let demo be a black box.** Always explain what's happening while the agente works. "While Copilot is reading the codebase..." keeps audience engaged during processing delays.

### Decisions Made During Script

1. **Spanish language throughout** — respects audience and Jose's vision. No mixing of languages.
2. **7-section structure is sacred** — all content mapped to Rusty's architecture. No rearranging.
3. **Issues = source of truth for demos** — every single demo starts by pulling an issue from the GitHub backlog. This coherence is THE narrative device.
4. **Fallback plans are not failure** — they're professionalism. Presenter with plan B is calm. Calm presenter wins Q&A.
5. **Q&A as content, not afterthought** — those 10 minutes can seal the deal. Pre-prepared answers mean we're ready.

