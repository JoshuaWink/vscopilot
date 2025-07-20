# Claude Code: Terminal Copilot (Go Edition)

## Overview
A fast, terminal-based Copilot agent written in Go, inspired by VS Code Chat but designed for CLI-first workflows, agent orchestration, and modular context management. Supports rich terminal UI, agent lifecycles via "agent cards" (Google's agent2agent protocol), and can optionally attach to VS Code for full IDE context.

## Key Features
- Terminal UI (not just plain text)
- Main agent + sub-agents (agent cards, agent2agent protocol)
- Task execution (shell, scripts, etc.)
- Modular context pipeline (filesystem, git, custom sources)
- Optional VS Code context integration (via IPC/WebSocket)
- Lightweight, fast, and portable (Go)
- Observability via *<action>* statements and agent logs

## Folder Structure
- `cmd/` — CLI entry point and main application logic
- `ui/` — Terminal UI components (panels, chat, logs, agent manager)
- `agent/` — Agent lifecycle, agent cards, agent2agent protocol
- `context/` — Context pipeline, providers, and context management
- `tasks/` — Task execution and management
- `integration/` — VS Code and other external integrations
- `proto/` — Protocol definitions (agent2agent, IPC, etc.)
- `internal/` — Utilities, config, and shared logic
- `docs/` — Design docs, usage, and developer guides

## Implementation Notes
- Use Go for speed, concurrency, and easy deployment
- Use a terminal UI library (e.g., tview, bubbletea, termui)
- Agent context and lifecycle managed via agent cards (agent2agent)
- Observability via in-terminal hints and logs
- CLI can run standalone or attach to VS Code for rich context

## Next Steps
- Scaffold Go project with above structure
- Prototype terminal UI and agent lifecycle
- Define agent card and context pipeline models
- Implement basic chat and task execution
- Add VS Code integration (optional)

---

_Last updated: July 18, 2025_
