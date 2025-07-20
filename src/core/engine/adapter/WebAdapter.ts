// WebAdapter.ts
// Stub for a Web adapter implementation for the Copilot engine.

import type { Conversation, Turn, TurnMessage } from '../index';
import type { EngineAdapter } from './AdapterInterface';

export class WebAdapter implements EngineAdapter {
	onConversationStart(conversation: Conversation): void {
		// TODO: Integrate with web event system
	}

	onTurnAdded(turn: Turn): void {
		// TODO: Update web UI with new turn
	}

	onMessage(message: TurnMessage): void {
		// TODO: Display message in web UI
	}

	onConversationUpdate(conversation: Conversation): void {
		// TODO: Refresh web conversation view
	}
}
