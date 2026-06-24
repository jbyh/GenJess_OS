import { createHmac, timingSafeEqual } from 'node:crypto';

const FIVE_MINUTES_IN_SECONDS = 60 * 5;

export function verifySlackRequest({ signingSecret, timestamp, rawBody, signature, nowSeconds }) {
  if (!signingSecret) throw new Error('SLACK_SIGNING_SECRET is required');
  if (!timestamp || !signature) return false;

  const now = nowSeconds ?? Math.floor(Date.now() / 1000);
  const requestAge = Math.abs(now - Number(timestamp));
  if (!Number.isFinite(requestAge) || requestAge > FIVE_MINUTES_IN_SECONDS) {
    return false;
  }

  const base = `v0:${timestamp}:${rawBody}`;
  const expected = `v0=${createHmac('sha256', signingSecret).update(base).digest('hex')}`;

  const expectedBuffer = Buffer.from(expected, 'utf8');
  const actualBuffer = Buffer.from(signature, 'utf8');
  if (expectedBuffer.length !== actualBuffer.length) return false;

  return timingSafeEqual(expectedBuffer, actualBuffer);
}
