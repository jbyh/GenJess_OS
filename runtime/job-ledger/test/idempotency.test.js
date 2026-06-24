import test from 'node:test';
import assert from 'node:assert/strict';
import { createInMemoryJobLedger } from '../src/index.js';

test('replaying same idempotency key creates one job', () => {
  const ledger = createInMemoryJobLedger();
  const input = {
    workflow: 'slack-to-outbound-batch',
    status: 'queued',
    source: 'slack',
    requester_id: 'U123',
    channel_id: 'C123',
    thread_ts: '1710000000.000100',
    input: { args: { vertical: 'coffee', city: 'Houston', count: 3, mode: 'research-only' } },
    idempotency_key: 'C123:1710000000.000100',
  };

  const first = ledger.createJob(input);
  const second = ledger.createJob(input);

  assert.equal(first.created, true);
  assert.equal(second.created, false);
  assert.equal(first.job.id, second.job.id);
  assert.equal(ledger.listJobs().length, 1);
  assert.equal(ledger.listEvents(first.job.id).filter((event) => event.event_type === 'job.created').length, 1);
});
