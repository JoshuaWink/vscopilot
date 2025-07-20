// WebAdapter.test.ts
// Basic test for WebAdapter stub

import { Conversation, Turn, TurnMessage } from '../index';
import { WebAdapter } from './WebAdapter';

describe('WebAdapter', () => {
	let adapter: WebAdapter;
	let conversation: Conversation;
	let turn: Turn;
	let message: TurnMessage;

	beforeEach(() => {
		adapter = new WebAdapter();
		conversation = new Conversation('web-session', [
			new Turn('turn-1', { type: 'user', message: 'Hello' })
		]);
		turn = new Turn('turn-2', { type: 'user', message: 'Next turn' });
		message = { type: 'model', message: 'Hi there!' };
	});

	it('should handle conversation start', () => {
		adapter.onConversationStart(conversation);
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
