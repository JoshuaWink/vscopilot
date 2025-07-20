# Claude Code Terminal Copilot: Folder Structure

## Proposed Project Layout

- `cmd/` — CLI entry point and main application logic
- `ui/` — Terminal UI components (panels, chat, logs, agent manager)
- `agent/` — Agent lifecycle, agent cards, agent2agent protocol
- `context/` — Context pipeline, providers, and context management
- `tasks/` — Task execution and management
- `integration/` — VS Code and other external integrations
- `proto/` — Protocol definitions (agent2agent, IPC, etc.)
- `internal/` — Utilities, config, and shared logic
- `docs/` — Design docs, usage, and developer guides

## Example

```
claude-code/
  cmd/
    main.go
  ui/
    chat.go
    logs.go
    agent_manager.go
  agent/
    agent.go
    agent_card.go
    agent2agent.go
  context/
    pipeline.go
    provider.go
  tasks/
    exec.go
    hooks.go
  integration/
    vscode.go
    ipc.go
  proto/
    agent2agent.proto
    ipc.proto
  internal/
    config.go
    utils.go
  docs/
    overview.md
    usage.md
    design.md
```

---

_Last updated: July 18, 2025_
