
# Tool Integration

This document explains how Copilot Chat integrates with a variety of tools to perform actions, gather context, and automate developer workflows. The agent's autonomy is powered by the tool calling loop, which enables multi-step, interleaved tool use.

---

## Tool Types
Copilot Chat supports a range of tool types, each exposed to the agent for autonomous invocation:
- **File and Code Search:** Locate files, symbols, or code snippets in the workspace.
- **File Read/Write:** Read file contents, apply code edits, or create new files.
- **Test Discovery and Execution:** Find and run tests, report results.
- **Terminal and Command Execution:** Run shell commands, scripts, or build tasks.
- **Notebook Operations:** Interact with Jupyter notebooks (read, run, edit cells).
- **Custom Tools:** The system is extensible; new tools can be registered and exposed to the agent.

---

## Tool Calling Loop
The tool calling loop is the core mechanism that enables agent autonomy and chaining:
- The agent (LLM) can request tool calls as part of its response.
- Each tool call is executed, and the results are fed back into the next prompt.
- The loop continues, allowing the agent to chain multiple tool calls (e.g., read a file, edit it, run tests, and report back) without user intervention.
- Tool call rounds are tracked and logged for transparency and debugging.
- The loop enforces limits and can prompt the user to "Continue to iterate?" if needed.

### Example: Multi-Step Tool Use
1. Agent requests to read a file.
2. System executes the read, returns contents.
3. Agent analyzes contents, requests an edit.
4. System applies the edit, returns confirmation.
5. Agent requests to run tests.
6. System runs tests, returns results.
7. Agent summarizes and streams the final result to the user.

---

## References
- [ToolCallingLoop](../src/extension/intents/node/toolCallingLoop.ts)
- [DefaultIntentRequestHandler](../src/extension/prompt/node/defaultIntentRequestHandler.ts)
- [Tool Schema](../src/extension/prompt/common/intents.ts)

---

Next: [Testing & Simulation](./testing-simulation.md)
