export function formatJobCreatedReply(job) {
  if (!job?.id) throw new Error('job.id is required');

  return [
    'GenJess-OS job created',
    `job_id: ${job.id}`,
    `workflow: ${job.workflow}`,
    `status: ${job.status}`,
    'next_gate: prospect_qualification',
  ].join('\n');
}

export async function sendSlackThreadReply({ slackClient, channel_id, thread_ts, text }) {
  if (!slackClient?.chat?.postMessage) {
    throw new Error('slackClient.chat.postMessage is required');
  }

  return slackClient.chat.postMessage({
    channel: channel_id,
    thread_ts,
    text,
  });
}
