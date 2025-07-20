# Tool Calling in Modular Copilot Core

## What is Tool Calling?
Tool calling is the ability for the chat agent (main or sub-agent) to invoke external tools, scripts, or APIs as part of a chat session—enabling automation, code execution, and integration with external systems.

## Why is it Core?
- Enables Copilot to perform real-world actions, not just generate text
- Supports automation, code editing, shell commands, and custom workflows
- Allows agent orchestration (main agent delegates to sub-agents/tools)
- Essential for advanced prompt engineering and agent chaining

## Where is it in VS Code Chat?
- Tool calling logic is likely in prompt/common/toolCallRound.ts, intents/, and related orchestration modules
- Conversation, Turn, and ConversationStore should be extended to support tool invocation, results, and chaining

## How to Modularize
- Extract tool calling logic as a core service/module
- Ensure Conversation and Turn can record tool calls, results, and errors
- Provide APIs for registering, invoking, and chaining tools (for both CLI and VS Code adapters)
- Support tool call context, streaming, and error handling

## Migration Plan (addendum)
- [ ] Map and extract tool calling logic (toolCallRound.ts, intents/, etc.)
- [ ] Integrate tool calling into Conversation, Turn, and ConversationStore
- [ ] Expose tool calling APIs for CLI and VS Code adapters

---

_Last updated: July 18, 2025_
