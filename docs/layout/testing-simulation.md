
# Testing & Simulation

This document describes the comprehensive testing and simulation infrastructure that ensures Copilot Chat's reliability, correctness, and agentic behavior.

---

## Testing Infrastructure
- **Unit Tests:** Written with Vitest, covering isolated functions and modules.
- **Integration Tests:** Run in the VS Code extension host, validating end-to-end extension behavior.
- **Scenario-based Simulation Tests:** Use simulation scripts to test complex agent workflows, tool chaining, and edge cases.
- **Fixtures and Utilities:** Provide mock data, workspace setups, and helper functions for repeatable tests.

---

## Simulation Capabilities
- **Agent Workflow Simulation:** Simulate multi-step agentic loops, including tool calls, user prompts, and autonomous decision-making.
- **Performance Analysis:** Measure latency, throughput, and resource usage under various scenarios.
- **Regression Testing:** Ensure new changes do not break existing workflows or agent autonomy.

### Example: Simulated Agent Loop
1. Simulate a user query (e.g., "Refactor and test this file").
2. Agent iterates: reads file, edits, runs tests, summarizes results.
3. Simulation logs each tool call, agent decision, and final output.

---

## References
- [test/](../test/) — Test suites and simulation scripts
- [script/simulate.sh](../script/simulate.sh) — Scenario runner
- [ToolCallingLoop](../src/extension/intents/node/toolCallingLoop.ts)

---

Next: [Development Workflow](./development-workflow.md)
