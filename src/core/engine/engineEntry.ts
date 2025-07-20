// engineEntry.ts
// Example entry point: wiring up an adapter to the Copilot engine lifecycle (DRY, minimal)

import { TerminalAdapter } from './adapter';
import { Conversation, Turn, TurnMessage } from './index';

// Create an adapter instance (swap for GUIAdapter, etc. as needed)
const adapter = new TerminalAdapter();

// Create a conversation and wire up adapter events
const conversation = new Conversation('session-1', [
	new Turn('turn-1', { type: 'user', message: 'Hello, Copilot!' })
]);
adapter.onConversationStart(conversation);

// Add a turn and notify adapter
const turn = new Turn('turn-2', { type: 'user', message: 'Next turn' });
adapter.onTurnAdded(turn);

// Send a message and notify adapter
const message: TurnMessage = { type: 'model', message: 'Hi there!' };
adapter.onMessage(message);

// Update conversation and notify adapter
adapter.onConversationUpdate(conversation);

// DRY: All engine/adapter usage is unified and swappable here.
