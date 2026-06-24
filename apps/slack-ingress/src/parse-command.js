export const REQUIRED_COMMAND = '/run-outbound-batch';
export const WORKFLOW = 'slack-to-outbound-batch';

export function parseKeyValueArgs(text) {
  return Object.fromEntries(
    String(text ?? '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf('=');
        if (index === -1) return [part, ''];
        return [part.slice(0, index), part.slice(index + 1)];
      }),
  );
}

export function parseRunOutboundBatchCommand(slackBody) {
  const command = slackBody.command;
  if (command !== REQUIRED_COMMAND) {
    throw new Error(`unsupported command: ${command}`);
  }

  const rawArgs = parseKeyValueArgs(slackBody.text);
  const count = Number.parseInt(rawArgs.count, 10);

  if (!rawArgs.vertical) throw new Error('vertical is required');
  if (!rawArgs.city) throw new Error('city is required');
  if (!Number.isInteger(count) || count < 1) throw new Error('count must be a positive integer');
  if (!rawArgs.mode) throw new Error('mode is required');

  return {
    source: 'slack',
    channel_id: slackBody.channel_id,
    thread_ts: slackBody.thread_ts ?? slackBody.trigger_id ?? slackBody.response_url ?? slackBody.ts,
    user_id: slackBody.user_id,
    command: 'run-outbound-batch',
    args: {
      vertical: rawArgs.vertical,
      city: rawArgs.city,
      count,
      mode: rawArgs.mode,
    },
  };
}

export function createSlackIdempotencyKey(payload) {
  const timestamp = payload.thread_ts ?? payload.event_ts ?? payload.trigger_id;
  if (!payload.channel_id || !timestamp) {
    throw new Error('channel_id and Slack timestamp are required for idempotency');
  }

  return `${payload.channel_id}:${timestamp}`;
}
