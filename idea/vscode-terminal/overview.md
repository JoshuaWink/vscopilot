# Claude Code Terminal Copilot: Implementation Overview

## Language Choice: Go
- Chosen for speed, concurrency, portability, and ecosystem maturity
- Easy to build, deploy, and cross-compile
- Rich ecosystem for terminal UI (tview, bubbletea, termui)

## Terminal UI
- Not just a plain terminal: supports panels, chat, logs, agent management
- UI library candidates: tview (mature, flexible), bubbletea (modern, composable)
- *<action>* statements and agent logs for observability

## Agent Context & Lifecycle
- Agents and sub-agents managed via agent cards (Google's agent2agent protocol)
- Main agent can spawn sub-agents for parallel/isolated tasks
- Agent cards store context, state, and history
- Agent orchestration: main agent delegates, sub-agents report back

## Context Management
- Modular context pipeline: filesystem, git, custom providers
- If VS Code is running, attach via IPC/WebSocket for full IDE context
- If not, run with minimal context (cwd, files, etc.)
- Agents can move between VS Code sessions/windows

## Task Execution
- Run shell commands, scripts, or custom tasks from chat
- Capture output, errors, and logs in the UI
- Pre/post task hooks for automation

## Protocols & Integration
- agent2agent protocol for agent cards and orchestration
- IPC/WebSocket for VS Code context handoff
- Security/authentication for context access

## Observability
- In-terminal hints (*<action>*) for user feedback
- Agent logs and task history
- Optional: export logs/metrics for external analysis

## Next Steps
- Scaffold Go project with proposed structure
- Prototype terminal UI and agent lifecycle
- Define agent card and context pipeline models
- Implement chat, task execution, and agent orchestration
- Add VS Code integration (optional)

---

_Last updated: July 18, 2025_
