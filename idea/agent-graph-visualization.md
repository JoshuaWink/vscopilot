# Agent Graph Visualization & Live Workspace Map

## Concept
A live, interactive graph database that maps all files, relationships, and context in the workspace. As agents (AI or human) crawl, edit, or analyze, the graph is updated in real time. Each agent's actions, focus, and task are visualized as nodes/edges, with the ability to zoom out and see the entire system—like a StarCraft minimap for code and agent activity.

## Features
- **Live Graph:** Nodes for files, folders, symbols, tasks, agents; edges for relationships (import, call, edit, etc.)
- **Agent Tracking:** Visualize which agent is working on what, their current focus, and task history
- **Layered Views:** Filter by relationship type, agent, file type, or context
- **Change Reflection:** Graph updates in real time as files/relationships change
- **Teleport/Pathing:** Agents can "blink" (jump) to any node, or be restricted to pathfinding unless they have a cached address
- **History/Replay:** See how the workspace and agent activity evolved over time

## Use Cases
- Multi-agent orchestration and debugging
- Visualizing codebase structure and hotspots
- Tracking agent contributions and task flows
- Interactive navigation and context for AI/human users

## Implementation Ideas
- Use a graph database (e.g., Neo4j, Dgraph, or in-memory)
- Visualize with web-based (Cytoscape.js, D3.js) or terminal-based (tview, bubbletea) UI
- Integrate with agent lifecycle and context pipeline
- Expose APIs/events for real-time updates and queries

## Next Steps
- Prototype graph data model and agent tracking
- Design UI for live graph and agent minimap
- Integrate with modular copilot/agent core

---

_Last updated: July 18, 2025_
