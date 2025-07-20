# Roadmap: Turning VS Code Chat into "Claude Code" (Terminal Copilot)

## Vision
A terminal-based Copilot agent ("Claude Code") that:
- Runs as a standalone CLI, not requiring the full VS Code IDE
- Can run tasks, manage sub-agents, and interact with the filesystem/processes
- Optionally attaches to a running VS Code instance for rich context
- Allows moving between VS Code windows/sessions, dynamically grabbing context
- Main agent can spin up sub-agents (with unique IDs) to perform tasks and report back, preserving the main agent's context window

## Key Differences from VS Code Chat
- CLI-first, not UI/IDE-first
- Modular context management (can run headless or attach to IDE for context)
- Agent orchestration: main agent + sub-agents for parallel/isolated tasks
- Lightweight, low RAM/CPU footprint

## Roadmap

### 1. CLI Chat Agent Core
- [ ] Build a CLI chat interface (Node.js, Python, or Go)
- [ ] Support for LLM chat, prompt history, and streaming output
- [ ] Task execution (shell commands, scripts, etc.)
- [ ] Pluggable context providers (filesystem, git, etc.)

### 2. Agent Orchestration
- [ ] Main agent can spawn sub-agents (new LLM chat instances with agent IDs)
- [ ] Sub-agents can run tasks, report results, and be terminated
- [ ] Main agent manages context window, delegates work to sub-agents as needed

### 3. Context Management
- [ ] Modular context pipeline (filesystem, git, custom sources)
- [ ] If VS Code is running, attach to IDE session for full context (API, workspace, open files, etc.)
- [ ] If not, run with minimal context (cwd, files, etc.)
- [ ] Move agent between VS Code windows/sessions, dynamically updating context

### 4. VS Code Integration (Optional)
- [ ] Extension to expose VS Code context to CLI agent via IPC/WebSocket
- [ ] Session/instance management for context handoff
- [ ] Security/authentication for context access

### 5. UX & Automation
- [ ] Terminal UI for chat, task logs, agent management
- [ ] Scripting/automation hooks (pre/post task, agent lifecycle)
- [ ] Configurable context and agent orchestration policies

### 6. Advanced Features
- [ ] Plugin system for custom context providers, tools, or agent types
- [ ] Observability: logs, metrics, and analytics for agent/task activity
- [ ] Fine-grained control over context assembly and prompt engineering

## Challenges
- Secure, efficient context handoff between VS Code and CLI
- Managing multiple agent contexts and lifecycles
- Keeping CLI lightweight but powerful
- Ensuring robust error handling and observability

## Next Steps
- Prototype CLI agent core
- Define IPC/API for VS Code context handoff
- Experiment with agent orchestration and context pipeline

---

_Last updated: July 18, 2025_
