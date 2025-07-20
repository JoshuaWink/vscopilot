# Copilot Engine Onboarding

## Overview
This engine is a UI-agnostic, DRY, and modular core for chat, tool calls, and agent iteration. It is designed to be used by both terminal and GUI adapters, with no code duplication.

## Key Concepts
- **Engine Modules:** All core logic is in `src/core/engine/` as direct re-exports from extension modules.
- **Adapters:** The `adapter/` folder contains swappable adapters (e.g., TerminalAdapter, GUIAdapter) that connect the engine to different UIs or hosts.
- **Entry Point:** See `engineEntry.ts` for a minimal example of wiring up an adapter to the engine lifecycle.

## How to Add a New Adapter
1. Implement the `EngineAdapter` interface in `adapter/AdapterInterface.ts`.
2. Add your adapter to `adapter/index.ts` for unified imports.
3. Use the entry point pattern in `engineEntry.ts` to wire up your adapter.
4. Add tests for your adapter in the `adapter/` folder.

## How to Run Tests
- All adapter and engine tests are colocated in the `adapter/` folder.
- Use your preferred test runner (e.g., Vitest, Jest) to run `*.test.ts` files.

## Extending the Engine
- Keep all logic DRY: add new features as direct re-exports or adapters.
- Update documentation and onboarding as you extend the engine or adapters.

---

*For questions or contributions, see the refactor and adapter plans in this folder.*
