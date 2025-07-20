// GUIAdapter.ts
// Stub for a GUI adapter implementation for the Copilot engine.

import type { Conversation, Turn, TurnMessage } from '../index';
import type { EngineAdapter } from './AdapterInterface';

export class GUIAdapter implements EngineAdapter {
	onConversationStart(conversation: Conversation): void {
		// TODO: Integrate with GUI event system
	}

	onTurnAdded(turn: Turn): void {
		// TODO: Update GUI with new turn
	}

	onMessage(message: TurnMessage): void {
		// TODO: Display message in GUI
	}

	onConversationUpdate(conversation: Conversation): void {
		// TODO: Refresh GUI conversation view
	}
}
