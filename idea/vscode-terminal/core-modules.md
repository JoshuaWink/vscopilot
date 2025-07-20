# Claude Code Modular Copilot: Core VS Code Chat Modules

## Key Modules for Modularization

### 1. Conversation & Turn (prompt/common/conversation.ts)
- **What:** Manages chat session state, turns, messages, status, and metadata.
- **Why:** Central to orchestrating chat, context, and agent workflows.
- **How to Modularize:** Extract as a standalone session/context engine for CLI and VS Code integration.

### 2. ConversationStore (conversationStore/node/conversationStore.ts)
- **What:** Stores and retrieves Conversation objects, manages session history.
- **Why:** Enables session persistence, lookup, and multi-session workflows.
- **How to Modularize:** Use as a session/context registry for both CLI and VS Code chat.


### 3. Tool Calling (prompt/common/toolCallRound.ts, intents/, etc.)
- **What:** Enables chat agents to invoke external tools, scripts, or APIs as part of a session.
- **Why:** Core for automation, agent chaining, and real-world actions.
- **How to Modularize:** Extract tool calling logic as a core service; ensure Conversation and Turn support tool calls/results; provide APIs for registering, invoking, and chaining tools.


### 4. Context Pipeline & Modes (context/node/resolvers/, prompts/, instructions/)
- **What:** Modular context assembly (e.g., `vscodeContext.ts`, `selectionContextHelpers.ts`), context providers, and support for different chat modes (intent/mode invocation, instructions, prompts, etc.).
- **Why:** Enables fine-grained control over context, prompt engineering, and dynamic chat/agent behavior.
- **How to Modularize:** Extract context pipeline logic, provider and mode/instruction management (e.g., `genericPanelIntentInvocation.ts`), and prompt handling as modular components for CLI/IDE integration.


## Migration Plan
1. Extract Conversation, Turn, and ConversationStore as reusable core modules.
2. Map and extract tool calling logic (toolCallRound.ts, intents/, etc.).
3. Map and extract context pipeline, mode/instruction management, and agent orchestration logic.
4. Build CLI and VS Code adapters on top of the modular core.
5. Enable session/context handoff between CLI and VS Code.

---

_Last updated: July 18, 2025_
