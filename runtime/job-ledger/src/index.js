import { randomUUID } from 'node:crypto';

export const JOB_LEDGER_WORKFLOW = 'slack-to-outbound-batch';
export const INITIAL_STATUS = 'queued';
export const NEXT_GATE = 'prospect_qualification';

export function createJobId() {
  return `job_${randomUUID().replaceAll('-', '').slice(0, 16)}`;
}

export function createEventId() {
  return `evt_${randomUUID().replaceAll('-', '').slice(0, 16)}`;
}

export function createInMemoryJobLedger() {
  const jobsById = new Map();
  const jobIdByIdempotencyKey = new Map();
  const events = [];

  return {
    createJob(input) {
      if (!input?.idempotency_key) {
        throw new Error('idempotency_key is required');
      }

      const existingJobId = jobIdByIdempotencyKey.get(input.idempotency_key);
      if (existingJobId) {
        return { job: jobsById.get(existingJobId), created: false };
      }

      const now = new Date().toISOString();
      const job = {
        id: input.id ?? createJobId(),
        workflow: input.workflow ?? JOB_LEDGER_WORKFLOW,
        status: input.status ?? INITIAL_STATUS,
        source: input.source,
        requester_id: input.requester_id,
        channel_id: input.channel_id,
        thread_ts: input.thread_ts,
        input: input.input,
        idempotency_key: input.idempotency_key,
        created_at: now,
        updated_at: now,
      };

      jobsById.set(job.id, job);
      jobIdByIdempotencyKey.set(job.idempotency_key, job.id);
      this.writeEvent({
        job_id: job.id,
        event_type: 'job.created',
        actor: 'orchestrator-api',
        payload: { workflow: job.workflow, status: job.status },
      });

      return { job, created: true };
    },

    writeEvent(input) {
      if (!jobsById.has(input.job_id)) {
        throw new Error(`job not found: ${input.job_id}`);
      }

      const event = {
        id: input.id ?? createEventId(),
        job_id: input.job_id,
        event_type: input.event_type,
        actor: input.actor,
        payload: input.payload ?? {},
        created_at: new Date().toISOString(),
      };

      events.push(event);
      return event;
    },

    getJob(jobId) {
      return jobsById.get(jobId) ?? null;
    },

    listJobs() {
      return [...jobsById.values()];
    },

    listEvents(jobId) {
      return events.filter((event) => event.job_id === jobId);
    },
  };
}
