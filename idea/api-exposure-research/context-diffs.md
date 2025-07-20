# Context Diffs API Exposure

## What is it?
Expose diffs in context (e.g., file changes, selection changes) between chat messages.

## Why expose it?
- Enables context-aware automation and analytics.
- Supports extensions that react to or analyze context changes.

## Example use cases
- Trigger actions on file or selection change.
- Analyze impact of edits on chat flow.
- Visualize context evolution during a session.

## Risks/considerations
- Security: diffs may reveal sensitive project info.
- Complexity: diffs can be large or noisy.

## Proposed exposure mechanism
- Event emitter for context diff events.
- API export for last/current diff.
- VS Code command to query diffs.
