/**
 * n8n webhook integration.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  HOW TO GO LIVE
 * ─────────────────────────────────────────────────────────────────────────
 *  1. In n8n, add a **Webhook** node.
 *       Method : POST
 *       Path   : aurelia-appointment
 *  2. Copy the production URL n8n gives you, e.g.
 *       https://<your-n8n-host>/webhook/aurelia-appointment
 *  3. Put it in a `.env.local` at the project root:
 *
 *       NEXT_PUBLIC_N8N_WEBHOOK_URL=https://<your-n8n-host>/webhook/aurelia-appointment
 *
 *  4. Restart the dev server.
 *
 *  There is deliberately no hard-coded endpoint in this file. With no
 *  environment variable set the form runs in DEMO MODE: it validates,
 *  renders the full success UI, but does not transmit anything and says so
 *  on screen. It never fakes a network call to a URL that does not exist.
 *
 *  See /n8n/README.md for the matching workflow (AI classify → Sheets → email).
 * ─────────────────────────────────────────────────────────────────────────
 */

export const WEBHOOK_ENV_VAR = 'NEXT_PUBLIC_N8N_WEBHOOK_URL';

/** The shape posted to the webhook. Keep in sync with the n8n workflow. */
export type AppointmentPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'demo' }
  | { status: 'error' };

const PLACEHOLDER_MARKERS = ['N8N_WEBHOOK_URL', 'your-n8n-host', 'example.com', '<your-'];

/** Resolved in the browser, so it must be inlined at build time. */
export function getWebhookUrl(): string {
  const raw = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ?? '';
  const value = raw.trim();
  if (!value) return '';
  // Guard against someone pasting the literal placeholder back in.
  if (PLACEHOLDER_MARKERS.some((m) => value.includes(m))) return '';
  return value;
}

export function isWebhookConfigured(): boolean {
  return getWebhookUrl() !== '';
}

const TIMEOUT_MS = 15000;

/**
 * POST the appointment to the n8n webhook.
 *
 * Uses an AbortController so a hung endpoint surfaces as a normal error state
 * for the visitor rather than an indefinite spinner.
 */
export async function submitAppointment(
  payload: AppointmentPayload,
): Promise<SubmitResult> {
  const url = getWebhookUrl();

  if (!url) {
    // Demo mode: simulate latency so the loading state is actually visible.
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { status: 'demo' };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) return { status: 'error' };
    return { status: 'sent' };
  } catch {
    return { status: 'error' };
  } finally {
    clearTimeout(timer);
  }
}
