# Adapter Integration Test Plan

## Purpose
- Ensure adapters correctly receive and handle engine events.
- Validate that adapters can be swapped without affecting engine logic.

## Test Cases
1. **TerminalAdapter**
   - Receives all conversation lifecycle events.
   - Logs correct output for each event.
2. **GUIAdapter (stub)**
   - Can be instantiated and called without error.
   - Methods are called as expected (to be expanded as GUI logic is added).
3. **Adapter Swapping**
   - Engine can switch between adapters at runtime.
   - All events are routed to the active adapter.

## Next Steps
- Implement integration tests for TerminalAdapter.
- Expand GUIAdapter tests as implementation grows.
- Document test results and update plan as needed.

---

*This plan will be updated as adapter integration progresses.*
