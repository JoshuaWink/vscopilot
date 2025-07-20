# Intent Detection Results API Exposure

## What is it?
Expose the detected intent (e.g., explain, refactor, generate, search) for each user message.

## Why expose it?
- Enables automation and routing based on user goals.
- Supports analytics and custom workflows.

## Example use cases
- Extensions that trigger actions based on detected intent.
- Analytics on most common user intents.
- UI that adapts to intent (e.g., show refactor options).

## Risks/considerations
- Privacy: intent may reveal user goals or sensitive info.
- Accuracy: false positives/negatives may mislead extensions.

## Proposed exposure mechanism
- Event emitter for intent detection results.
- API export for last/current intent.
- VS Code command to query detected intent.
