// AdapterSwap.test.ts
// Test swapping between TerminalAdapter and GUIAdapter

import { Conversation, Turn, TurnMessage } from '../index';
import { GUIAdapter } from './GUIAdapter';
import { TerminalAdapter } from './TerminalAdapter';

describe('Adapter Swapping', () => {
	let conversation: Conversation;
	let turn: Turn;
	let message: TurnMessage;

	beforeEach(() => {
		conversation = new Conversation('swap-session', [
			new Turn('turn-1', { type: 'user', message: 'Hello' })
		]);
		turn = new Turn('turn-2', { type: 'user', message: 'Next turn' });
		message = { type: 'model', message: 'Hi there!' };
	});

	it('should allow swapping from TerminalAdapter to GUIAdapter', () => {
		const terminalAdapter = new TerminalAdapter();
		terminalAdapter.onConversationStart(conversation);
		terminalAdapter.onTurnAdded(turn);
		terminalAdapter.onMessage(message);
		terminalAdapter.onConversationUpdate(conversation);

		const guiAdapter = new GUIAdapter();
		guiAdapter.onConversationStart(conversation);
		guiAdapter.onTurnAdded(turn);
		guiAdapter.onMessage(message);
		guiAdapter.onConversationUpdate(conversation);
		// No assertion: just ensure no error and both adapters can be swapped
	});
});
