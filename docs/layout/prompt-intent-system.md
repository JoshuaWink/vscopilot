
# Prompt & Intent System

This document details the core of Copilot Chat's intelligence: how user input is transformed into actionable agent behavior through prompt engineering, intent detection, and the autonomous tool calling loop.

---

## System Overview
The prompt & intent system is responsible for:
- Interpreting user input and conversation history
- Detecting the user's intent (e.g., ask, edit, search, run tests)
- Constructing a context-rich prompt for the LLM
- Orchestrating the tool calling loop for autonomous, multi-step actions
- Managing conversation state, tool call rounds, and agent mode

---

## Key Components

### 1. Prompt Construction & Context Gathering
- Gathers relevant code, file, and workspace context
- Uses `IBuildPromptContext` (see `src/extension/prompt/common/intents.ts`)
- Builds a prompt that includes user query, history, variables, and available tools

### 2. Intent Detection & Routing
- Uses the `IIntent` interface to determine user goal
- Routes to the correct handler (e.g., code edit, search, test)
- See `DefaultIntentRequestHandler` in `src/extension/prompt/node/defaultIntentRequestHandler.ts`

### 3. Tool Calling Loop & Agent Mode
- Core agentic loop: `ToolCallingLoop` (see `src/extension/intents/node/toolCallingLoop.ts`)
- Iteratively builds prompts, invokes the LLM, and handles tool calls
- Supports autonomous chaining: the agent can call tools, process results, and decide next steps without user intervention
- Handles confirmations ("Continue to iterate?") and tool call limits

### 4. Conversation State & History
- Maintains a `Conversation` object with all turns and tool call rounds
- Each round records tool calls, responses, and retry state

### 5. Model Selection & Temperature Control
- Selects LLM endpoint and adjusts temperature for creativity vs. determinism
- Controlled via handler options and user settings

---

## Example Flow
1. User submits a query (e.g., "Refactor this function for readability.")
2. The system gathers context (open files, code, history) and available tools
3. Intent detection routes to the code edit handler
4. The prompt is constructed and sent to the LLM
5. The tool calling loop runs: the LLM may request tool calls (e.g., read file, run tests)
6. Tool results are processed, and the loop continues until the agent completes the task or hits a limit
7. The final result is streamed back to the user, with all steps logged

---

## References
- [ToolCallingLoop](../src/extension/intents/node/toolCallingLoop.ts)
- [DefaultIntentRequestHandler](../src/extension/prompt/node/defaultIntentRequestHandler.ts)
- [IBuildPromptContext](../src/extension/prompt/common/intents.ts)
- [Conversation](../src/extension/prompt/common/conversation.ts)

---

Next: [Tool Integration](./tool-integration.md)
