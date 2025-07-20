// TerminalAdapter.test.ts
// Basic integration test for TerminalAdapter

import { Conversation, Turn, TurnMessage } from '../index';
import { TerminalAdapter } from './TerminalAdapter';

describe('TerminalAdapter', () => {
	let adapter: TerminalAdapter;
	let conversation: Conversation;
	let turn: Turn;
	let message: TurnMessage;

	beforeEach(() => {
		adapter = new TerminalAdapter();
		conversation = new Conversation('test-session', [
			new Turn('turn-1', { type: 'user', message: 'Hello' })
		]);
		turn = new Turn('turn-2', { type: 'user', message: 'Next turn' });
		message = { type: 'model', message: 'Hi there!' };
	});

	it('should handle conversation start', () => {
		adapter.onConversationStart(conversation);
		// No assertion: just ensure no error and output is logged
	});

	it('should handle turn added', () => {
		adapter.onTurnAdded(turn);
	});

	it('should handle message', () => {
		adapter.onMessage(message);
	});

	it('should handle conversation update', () => {
		adapter.onConversationUpdate(conversation);
	});
});
