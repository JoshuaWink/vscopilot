# User Feedback & Ratings API Exposure

## What is it?
APIs for accessing user feedback, ratings, or reactions to chat responses.

## Why expose it?
- Enables analytics, quality improvement, and adaptive agents.
- Supports extensions that visualize or act on feedback.

## Example use cases
- Extensions that collect or display feedback trends.
- Adaptive agents that learn from user ratings.
- Compliance or audit tools for feedback tracking.

## Risks/considerations
- Privacy: feedback may be sensitive or identifiable.
- Manipulation: feedback APIs must be secure.

## Proposed exposure mechanism
- Event emitter for feedback events.
- API export for feedback data.
- VS Code command to query or submit feedback.
