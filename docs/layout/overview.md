# Copilot Chat System Layout: Overview

This document provides a high-level overview of the Copilot Chat extension for Visual Studio Code. It serves as the entry point for a series of markdown files that describe the architecture, major components, and flow of the project. Each section links to a more detailed breakdown in a dedicated file.

---


---

## Visual Layout (Mermaid Flowchart)

```mermaid
flowchart TD
    O[Overview]
    CA[Core Architecture]
    EF[Extension Features]
    PS[Platform Services]
    PI[Prompt & Intent System]
    TI[Tool Integration]
    TS[Testing & Simulation]
    DW[Development Workflow]
    FM[File/Folder Map]
    LT[Logging & Tracking]
    AI[Additional Ideas]

    O --> CA
    O --> EF
    O --> PS
    O --> PI
    O --> TI
    O --> TS
    O --> DW
    O --> FM
    O --> LT
    O --> AI
    CA -->|links to| EF
    CA -->|links to| PS
    CA -->|links to| PI
    CA -->|links to| TI
    EF -->|links to| PS
    PS -->|links to| PI
    PI -->|links to| TI
    TI -->|links to| TS
    TS -->|links to| DW
    DW -->|links to| FM
    FM -->|links to| O
    LT -->|links to| O
    AI -->|links to| O
```

---

## How to Use This Layout
- Start here for a bird's-eye view of the project.
- Follow links to drill down into specific areas.
- Each file is a living document and will be updated as the project evolves.
- See [Logging & Tracking](./logging-tracking.md) for a record of documentation progress and future update plans.

---

Next: [Core Architecture](./core-architecture.md)
