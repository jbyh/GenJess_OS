import test from 'node:test';
import assert from 'node:assert/strict';
import { createSlackIdempotencyKey, parseRunOutboundBatchCommand } from '../src/parse-command.js';

test('parses run outbound batch command', () => {
  const payload = parseRunOutboundBatchCommand({
    command: '/run-outbound-batch',
    text: 'vertical=coffee city=Houston count=3 mode=research-only',
    channel_id: 'C123',
    thread_ts: '1710000000.000100',
    user_id: 'U123',
  });

  assert.deepEqual(payload, {
    source: 'slack',
    channel_id: 'C123',
    thread_ts: '1710000000.000100',
    user_id: 'U123',
    command: 'run-outbound-batch',
    args: {
      vertical: 'coffee',
      city: 'Houston',
      count: 3,
      mode: 'research-only',
    },
  });
});

test('creates idempotency key from channel and thread timestamp', () => {
  const key = createSlackIdempotencyKey({ channel_id: 'C123', thread_ts: '1710000000.000100' });
  assert.equal(key, 'C123:1710000000.000100');
});
