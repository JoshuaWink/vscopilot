# Streaming & Partial Message Events API Exposure

## What is it?
Events and APIs for streaming or partial message delivery (e.g., as LLMs generate output).

## Why expose it?
- Enables real-time UI updates and advanced streaming integrations.
- Supports extensions that visualize or process partial results.

## Example use cases
- Live token-by-token or sentence-by-sentence display.
- Extensions that intercept or transform streaming output.
- Analytics on streaming latency or quality.

## Risks/considerations
- Complexity: streaming APIs are harder to use/test.
- Performance: must not block or slow down UI.

## Proposed exposure mechanism
- Event emitter for streaming/partial message events.
- API export for streaming hooks.
- VS Code command to subscribe to streaming updates.
