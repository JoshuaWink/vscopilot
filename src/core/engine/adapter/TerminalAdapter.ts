// TerminalAdapter.ts
// Minimal terminal adapter implementation for the Copilot engine.

import type { Conversation, Turn, TurnMessage } from '../index';
import type { EngineAdapter } from './AdapterInterface';

export class TerminalAdapter implements EngineAdapter {
	onConversationStart(conversation: Conversation): void {
		// Print conversation start to terminal
		// eslint-disable-next-line no-console
		console.log(`\n[Copilot] Conversation started: ${conversation.sessionId}`);
	}

	onTurnAdded(turn: Turn): void {
		// Print new turn to terminal
		// eslint-disable-next-line no-console
		console.log(`\n[Copilot] New turn:`, turn.request.message);
	}

	onMessage(message: TurnMessage): void {
		// Print message to terminal
		// eslint-disable-next-line no-console
		console.log(`[Copilot] Message:`, message.message);
	}

	onConversationUpdate(conversation: Conversation): void {
		// Print conversation update to terminal
		// eslint-disable-next-line no-console
		console.log(`[Copilot] Conversation updated. Turns: ${conversation.turns.length}`);
	}
}
