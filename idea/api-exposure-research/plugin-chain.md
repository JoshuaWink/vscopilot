# Plugin/Agent Chain State API Exposure

## What is it?
Access to the sequence of plugins/agents invoked for a message or session.

## Why expose it?
- Enables fine control and observability of multi-agent workflows.
- Supports debugging and visualization of plugin orchestration.

## Example use cases
- Extensions that visualize or modify agent chains.
- Debugging tools for plugin orchestration.
- Analytics on agent usage and order.

## Risks/considerations
- Complexity: chains may be long or dynamic.
- Security: exposing internal chains may reveal sensitive logic.

## Proposed exposure mechanism
- API export for current/last plugin chain.
- Event emitter for chain updates.
- VS Code command to query or modify chain.
