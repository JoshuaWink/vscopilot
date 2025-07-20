# Adapter Layer Plan

## Purpose
- Decouple Copilot engine from UI/host logic.
- Allow easy integration with terminal, GUI, web, or other environments.

## Interface
- `EngineAdapter` defines lifecycle hooks: `onConversationStart`, `onTurnAdded`, `onMessage`, `onConversationUpdate`.

## Implementations
- `TerminalAdapter`: Logs events to terminal (reference/minimal implementation).
- Future: GUIAdapter, WebAdapter, etc.

## Next Steps
1. Integrate adapter usage into engine entry points.
2. Scaffold GUIAdapter (stub).
3. Add integration tests for adapters.
4. Document adapter extension points and usage patterns.

---

*This plan will be updated as adapter work progresses.*
