# API Exposure Research Plan

## Objective
Research and propose which internal chat APIs and data (token counts, events, messages, context, etc.) should be exposed for extension/plugin developers, why each is valuable, and how exposure could be implemented.

## Research Questions
- What internal APIs or data would be most useful to expose?
- What are the use cases for each (e.g., analytics, custom UI, advanced agents)?
- What are the risks or limitations of exposing each API?
- What mechanisms (commands, events, exports, etc.) are best for exposure?

## Candidate APIs/Data to Expose
- Token counts (per message, per session)
- Chat events (message sent, received, error, etc.)
- Message objects (raw and processed)
- Context objects (active file, selection, workspace info)
- Conversation/session state
- System messages and LLM prompts
- Provider registration and lifecycle hooks
- Streaming/partial message events
- User feedback and ratings

## Why Expose These?
- Enable advanced analytics and usage tracking
- Allow custom UI/UX and visualization extensions
- Support for external agent orchestration and chaining
- Facilitate debugging and prompt engineering
- Allow third-party integrations (e.g., logging, compliance)

## How Could We Expose Them?
- VS Code commands (for actions and queries)
- Event emitters (for real-time updates)
- API exports (via extension.exports)
- Configuration files or dynamic registration
- WebSocket or IPC for advanced integrations

## Next Steps
- For each candidate API/data, create a markdown file:
  - What is it?
  - Why expose it?
  - Example use cases
  - Risks/considerations
  - Proposed exposure mechanism
- Summarize findings and propose a staged implementation plan.

---

_Last updated: July 18, 2025_
