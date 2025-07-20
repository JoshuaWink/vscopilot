# Error Traces & Diagnostics API Exposure

## What is it?
Expose error traces, diagnostics, and failure reasons for chat operations.

## Why expose it?
- Improves observability and debugging for extension authors.
- Enables automated recovery and analytics on failure modes.

## Example use cases
- Error dashboards for chat providers.
- Extensions that auto-retry or escalate on failure.
- Analytics on error frequency and causes.

## Risks/considerations
- Privacy: error traces may contain sensitive data.
- Volume: high error rates could flood logs.

## Proposed exposure mechanism
- Event emitter for error/diagnostic events.
- API export for last error trace.
- VS Code command to query error state.
