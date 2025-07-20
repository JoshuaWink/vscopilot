# Core Refactor Plan: UI-Agnostic Chat/Tool Engine

## Goal
- Extract all chat, tool calling, and agent iteration logic into a true core engine, decoupled from any UI (terminal or GUI).
- Both the terminal "bubble UI" and GUI viewport will use this shared engine.

## Key Modules to Extract/Refactor
- `src/extension/intents/node/toolCallingLoop.ts` (Tool calling loop, agent iteration)
- `src/extension/intents/node/agentIntent.ts` (Agent orchestration, tool selection)
- `src/extension/tools/common/toolsService.ts` (Tool registry/service)
- `src/extension/prompt/node/codebaseToolCalling.ts` (Codebase-specific tool loop)
- Any model interaction logic (endpoint, prompt, etc.)


## Steps
1. **Map All Core Logic**
   - [x] List all functions/classes in the above modules that are not UI-specific.
   - [x] Identify VS Code API dependencies that must be abstracted or shimmed.
2. **Extract to Core**
   - [x] Move or wrap core logic into `src/core/engine/` as direct re-exports.
   - [x] Provide interfaces for UI adapters to interact with the engine (`EngineAdapter`).
   - [x] Abstract VS Code APIs behind interfaces or adapters where needed.
3. **Build UI Adapters**
   - [x] Terminal UI: `TerminalAdapter` logs events to terminal.
   - [x] GUI Viewport: `GUIAdapter` stub created for future integration.
4. **Test for Parity**
   - [x] Basic integration test for `TerminalAdapter`.
   - [ ] Expand tests for GUIAdapter and adapter swapping.
5. **Document and Maintain**
   - [x] Update docs and modularization plan (`ENGINE_REFACTOR.md`, `ADAPTER_PLAN.md`, `ADAPTER_TEST_PLAN.md`).
   - [x] Monitor for upstream changes and keep core engine in sync.
   - [ ] Refine onboarding and extension docs as adapters expand.


## Status
- [x] Engine modules re-exported and validated
- [x] Adapter layer scaffolded and documented
- [x] Integration test plan and basic test for TerminalAdapter
- [ ] Adapter usage integration in engine entry points
- [ ] Expanded tests and onboarding docs

## Next Steps
- Integrate adapter usage in engine entry points
- Expand adapter implementations and tests
- Refine documentation and onboarding

---

*This plan is kept up to date as the refactor progresses.*

## Mapping Table: Doc Module → Code File/Class

| Doc Module / Concept                | Code File(s) / Class(es)                                             |
|-------------------------------------|---------------------------------------------------------------------|
| Conversation & Turn                 | prompt/common/conversation.ts                                       |
| ConversationStore                   | conversationStore/node/conversationStore.ts                         |
| Tool Calling                        | prompt/common/toolCallRound.ts, intents/node/toolCallingLoop.ts     |
| Tool Registry/Service               | tools/common/toolsService.ts                                        |
| Agent Orchestration                 | intents/node/agentIntent.ts, prompt/node/codebaseToolCalling.ts     |
| Context Pipeline & Modes            | context/node/resolvers/, prompts/, instructions/                    |
| Terminal Integration                | platform/terminal/vscode/terminalServiceImpl.ts, BufferListener     |
| Task Execution                      | tasks/, prompt/common/toolCallRound.ts                              |
| Agent Cards/agent2agent protocol    | agent/, proto/agent2agent.proto                                     |
| UI Adapters (Terminal/GUI)          | ui/, extension/conversation/vscode-node/, extension/inlineChat/      |
| VS Code Integration (optional)      | integration/vscode.go, platform/endpoint/common/endpointProvider.ts  |

Use this table to guide extraction: for each doc module, extract or wrap the corresponding code into the new core engine, ensuring all logic is UI-agnostic and adapter-ready.
