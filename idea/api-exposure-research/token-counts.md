# Token Counts API Exposure

## What is it?
Token counts refer to the number of tokens used in each message, request, or session—critical for LLM cost, quota, and performance tracking.

## Why expose it?
- Enables extensions to monitor and optimize LLM usage/cost.
- Supports analytics, budgeting, and user feedback on token consumption.

## Example use cases
- Show live token usage in chat UI.
- Alert users when nearing token limits.
- Analyze cost per session or per provider.

## Risks/considerations
- May expose sensitive usage patterns if not properly secured.
- Needs to be accurate and updated in real time.

## Proposed exposure mechanism
- Event emitter for token count updates.
- VS Code command to query current/last token count.
- API export for programmatic access.
