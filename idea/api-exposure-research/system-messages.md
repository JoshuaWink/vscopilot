# System Messages & LLM Prompts API Exposure

## What is it?
Access to system messages, LLM prompts, and instructions sent to the model.

## Why expose it?
- Enables prompt engineering and debugging.
- Allows extensions to customize or audit system-level instructions.

## Example use cases
- Prompt engineering tools for advanced users.
- Auditing or compliance extensions.
- Custom system message injection for specialized workflows.

## Risks/considerations
- Security: system prompts may reveal internal logic.
- Mutability: should be controlled or read-only.

## Proposed exposure mechanism
- API export for current/last system message.
- VS Code command to fetch or set system prompt.
- Event emitter for prompt changes.
