import { NEXT_GATE } from '../../../runtime/job-ledger/src/index.js';
import { formatJobCreatedReply } from '../../../integrations/slack/src/index.js';

export function createOrchestrator({ ledger, slackClient }) {
  if (!ledger) throw new Error('ledger is required');

  return {
    async createJobFromSlackCommand({ workflow, payload, idempotency_key }) {
      const { job } = ledger.createJob({
        workflow,
        status: 'queued',
        source: payload.source,
        requester_id: payload.user_id,
        channel_id: payload.channel_id,
        thread_ts: payload.thread_ts,
        input: payload,
        idempotency_key,
      });

      const replyText = formatJobCreatedReply(job);

      if (slackClient?.chat?.postMessage) {
        await slackClient.chat.postMessage({
          channel: payload.channel_id,
          thread_ts: payload.thread_ts,
          text: replyText,
        });
      }

      ledger.writeEvent({
        job_id: job.id,
        event_type: 'slack.reply.sent',
        actor: 'slack-ingress',
        payload: {
          channel_id: payload.channel_id,
          thread_ts: payload.thread_ts,
          next_gate: NEXT_GATE,
        },
      });

      return { job, replyText };
    },
  };
}
