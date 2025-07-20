# VS Code Chat API Exposure via get_vscode_api

This document describes which parts of the VS Code chat app are exposed through the `get_vscode_api` tool, focusing on APIs relevant to chat features and conversational AI integration.

## Exposed Chat-Related APIs

The following VS Code APIs are accessible via `get_vscode_api` and are relevant for chat app development:

### 1. `chatProvider`
- Registers a chat provider for conversational UI in VS Code.
- Enables custom chat experiences, message handling, and context-aware responses.

### 2. `chatParticipantPrivate`
- Allows registration and management of private chat participants (agents, bots, etc.).
- Supports advanced participant features and custom agent logic.

### 3. `languageModelSystem`
- Provides system message integration for language models in chat.
- Enables prompt engineering and system-level instructions for LLMs.

### 4. `mappedEditsProvider`
- Supports advanced editing capabilities from chat interactions.
- Enables streaming and mapping of code edits suggested by chat agents.

### 5. `inlineCompletionsAdditions`
- Enhances inline code completions within chat and editor contexts.
- Powers real-time suggestions and completions from chat agents.

### 6. `aiTextSearchProvider`
- AI-powered search capabilities accessible from chat.
- Allows chat agents to perform semantic and contextual searches in the workspace.


## Usage
- Use the `get_vscode_api` tool to retrieve documentation, usage examples, and best practices for these APIs.
- These APIs are essential for building, extending, or integrating with the VS Code chat app and conversational AI features.

---

## Example: Registering a chatProvider for a Local OpenAI-Compatible Endpoint

You can register a new chatProvider in your VS Code extension that connects to a self-hosted OpenAI-compatible endpoint (e.g., http://localhost:8080) serving gpt-4.1. Below is a minimal example:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.chat.registerChatProvider('local-gpt4', {
      async provideChatResponse(request, _context, _token) {
        const response = await fetch('http://localhost:8080/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // if required
          },
          body: JSON.stringify({
            model: 'gpt-4.1',
            messages: [{ role: 'user', content: request.message }]
          })
        });
        const data = await response.json();
        return { message: data.choices?.[0]?.message?.content || 'No response' };
      }
    })
  );
}
```

- Replace `'YOUR_API_KEY'` if your endpoint requires authentication.
- This example assumes your backend follows the OpenAI API standard for chat completions.
- The provider will send user messages to your local endpoint and return the model's reply in the chat UI.

---

---

_Last updated: July 18, 2025_
