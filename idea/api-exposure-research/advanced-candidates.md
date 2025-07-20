# Advanced API Exposure Candidates

## Overview
Beyond the basics, exposing deeper or more granular APIs can unlock powerful automation, observability, and fine control for extensions and advanced users.

## Candidates & Rationale

### 1. Intent Detection Results
- **What:** Expose the detected intent for each user message (e.g., explain, refactor, generate, search).
- **Why:** Enables automation, routing, and analytics based on user intent.
- **Use cases:** Custom workflows, intent-based UI, analytics on user goals.

### 2. Execution Hooks (Pre/Post Message)
- **What:** Allow extensions to run code before or after a message is processed.
- **Why:** Enables automation, validation, or augmentation of chat flows.
- **Use cases:** Pre-processing, logging, custom validation, chaining actions.

### 3. Error Traces & Diagnostics
- **What:** Expose error traces, diagnostics, and failure reasons for chat operations.
- **Why:** Improves observability and debugging for extension authors.
- **Use cases:** Error dashboards, automated recovery, analytics on failure modes.

### 4. Plugin/Agent Chain State
- **What:** Access to the sequence of plugins/agents invoked for a message.
- **Why:** Enables fine control and observability of multi-agent workflows.
- **Use cases:** Visualize or modify agent chains, debug plugin orchestration.

### 5. User Action Logs
- **What:** Log of user actions (e.g., button clicks, command invocations) in chat context.
- **Why:** Supports analytics, automation, and compliance.
- **Use cases:** Usage heatmaps, workflow automation, audit trails.

### 6. Context Diffs
- **What:** Expose diffs in context (e.g., file changes, selection changes) between messages.
- **Why:** Enables context-aware automation and analytics.
- **Use cases:** Trigger actions on context change, analyze impact of edits.

### 7. Custom Metadata
- **What:** Allow extensions to attach/read custom metadata on messages or sessions.
- **Why:** Supports advanced workflows and integrations.
- **Use cases:** Tagging, workflow state, cross-extension communication.

---

## Next Steps
- For high-priority candidates, create detailed markdowns as with previous APIs.
- Solicit feedback from extension developers and users.
