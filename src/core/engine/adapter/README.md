# Engine Adapter Layer

This folder contains adapters that connect the Copilot engine to various UIs or host environments.

## AdapterInterface.ts
Defines the `EngineAdapter` interface for all adapters. Adapters must implement methods for conversation lifecycle events.


## TerminalAdapter.ts
A minimal implementation of `EngineAdapter` that logs conversation events to the terminal. Serves as a reference for building other adapters.


## GUIAdapter.ts
A stub for a GUI implementation of `EngineAdapter`. Extend this to integrate with your GUI environment.

## WebAdapter.ts
A stub for a Web implementation of `EngineAdapter`. Use this as a starting point for browser or plugin-based integrations.


## Usage Example
```ts
import { TerminalAdapter } from './adapter/TerminalAdapter';
import { Conversation, Turn, TurnMessage } from '../index';

// Create an adapter instance
const adapter = new TerminalAdapter();

// Create a conversation and wire up adapter events
const conversation = new Conversation('session-1', [/* initial turns */]);
adapter.onConversationStart(conversation);

// Add a turn and notify adapter
const turn = new Turn('turn-1', { type: 'user', message: 'Hello, Copilot!' });
adapter.onTurnAdded(turn);

// Send a message and notify adapter
const message: TurnMessage = { type: 'model', message: 'Hi there!' };
adapter.onMessage(message);

// Update conversation and notify adapter
adapter.onConversationUpdate(conversation);
```

Adapters can be swapped for GUI, web, or other environments by implementing the `EngineAdapter` interface.

Adapters allow the engine to remain UI-agnostic and easily extensible for new environments (terminal, GUI, web, etc).
