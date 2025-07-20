
# Development Workflow

This document provides a step-by-step guide for developing, testing, and contributing to Copilot Chat, ensuring consistency and maintainability as the project evolves.

---

## Setup
1. **Install dependencies:**
   - Run `npm install` to install all required packages.
2. **Build and watch:**
   - Use `npm run compile` for a one-time build.
   - Use `npm run watch:*` to watch for changes during development.

---

## Testing
1. **Run unit tests:**
   - `npm run test:unit` (Vitest)
2. **Run integration tests:**
   - `npm run test:extension` (VS Code extension host)
3. **Run simulation tests:**
   - `npm run simulate` or `script/simulate.sh` for scenario-based agent loop testing.

---

## Contribution Guidelines
- Follow the architecture and coding standards outlined in the documentation.
- Write clear, modular code and update documentation as features evolve.
- Use the layout/ folder to keep system documentation up to date.
- Add new tests and simulation scenarios for new features or bug fixes.

---

## Best Practices


Next: [File/Folder Map](./file-folder-map.md)
## Best Practices
 Keep documentation and code in sync.
 Use simulation to validate agentic workflows before merging changes.
 Review the [File/Folder Map](./file-folder-map.md) for project structure.

---

## Extending VS Code Functionality

### Voice Chat and Microphone Icon Integration

Recent versions of VS Code include a built-in microphone icon in the chat UI. This icon enables voice chat and speech-to-text features by integrating with the official **VS Code Speech** extension (`ms-vscode.vscode-speech`).

- The microphone icon is visible in Copilot Chat and other chat interfaces when the VS Code Speech extension is present in the IDE.
- Clicking the icon prompts installation of the Speech extension if not already present.
- Voice recognition and dictation run locally; no audio is sent to external servers.
- You can hide the icon via the context menu or by uninstalling the Speech extension.
- All voice features are managed by Microsoft and are not part of this codebase.

This is the standard approach for adding additional voice or speech functionality in VS Code extensions.

---

Next: [File/Folder Map](./file-folder-map.md)
