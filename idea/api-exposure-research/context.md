# Context Objects API Exposure

## What is it?
Context objects include active file, selection, workspace info, and other environmental data relevant to chat.

## Why expose it?
- Enables context-aware extensions and agents.
- Supports advanced prompt engineering and workflow automation.

## Example use cases
- Extensions that adapt chat behavior based on file or selection.
- Contextual analytics and reporting.
- Custom context providers for specialized domains.

## Risks/considerations
- Security: may expose sensitive project or file info.
- Needs permission model for access.

## Proposed exposure mechanism
- API export for current context object.
- VS Code command to query context.
- Event emitter for context changes.
