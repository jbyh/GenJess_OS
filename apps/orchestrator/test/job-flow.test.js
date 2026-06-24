import test from 'node:test';
import assert from 'node:assert/strict';
import { createInMemoryJobLedger } from '../../../runtime/job-ledger/src/index.js';
import { createOrchestrator } from '../src/index.js';

test('job flow writes ledger events and returns reply text', async () => {
  const ledger = createInMemoryJobLedger();
  const orchestrator = createOrchestrator({ ledger });

  const result = await orchestrator.createJobFromSlackCommand({
    workflow: 'slack-to-outbound-batch',
    idempotency_key: 'C123:1710000000.000100',
    payload: {
      source: 'slack',
      channel_id: 'C123',
      thread_ts: '1710000000.000100',
      user_id: 'U123',
      command: 'run-outbound-batch',
      args: { vertical: 'coffee', city: 'Houston', count: 3, mode: 'research-only' },
    },
  });

  assert.match(result.job.id, /^job_/);
  assert.equal(ledger.listJobs().length, 1);
  assert.deepEqual(
    ledger.listEvents(result.job.id).map((event) => event.event_type),
    ['job.created', 'slack.reply.sent'],
  );
  assert.match(result.replyText, /GenJess-OS job created/);
  assert.match(result.replyText, /workflow: slack-to-outbound-batch/);
  assert.match(result.replyText, /status: queued/);
  assert.match(result.replyText, /next_gate: prospect_qualification/);
});
