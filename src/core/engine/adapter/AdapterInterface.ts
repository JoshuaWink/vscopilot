// AdapterInterface.ts
// Defines the interface for UI/host adapters to the Copilot engine.

import type { Conversation, Turn, TurnMessage } from '../index';

/**
 * Interface for adapters that connect the Copilot engine to a UI or host environment.
 */
export interface EngineAdapter {
	/**
	 * Called when a new conversation is started.
	 */
	onConversationStart(conversation: Conversation): void;

	/**
	 * Called when a new turn is added to the conversation.
	 */
	onTurnAdded(turn: Turn): void;

	/**
	 * Called when a message is sent by the user or agent.
	 */
	onMessage(message: TurnMessage): void;

	/**
	 * Called when the conversation is updated (e.g., after tool call, agent iteration).
	 */
	onConversationUpdate(conversation: Conversation): void;
}
