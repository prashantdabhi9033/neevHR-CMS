// Pushes a website lead into the NeevHR admin console's Sales Lead CRM (backend POST /sales-leads/intake).
// No-ops (does not throw) if the CRM is not configured, so a missing config never breaks the form.

export type CrmLead = {
  name: string;
  email: string;
  company: string;
  intent?: "demo" | "quote";
  size?: string;
  phone?: string;
  role?: string;
  currentHrms?: string;
  requirement?: string;
  preferredDate?: string;
  message?: string;
  channel?: "form" | "popup";
  page?: string;
  /** The Payload lead id; the CRM ignores a second push with the same ref. */
  externalRef?: string;
  /** Original submission time (ISO), for back-filled leads. */
  submittedAt?: string;
};

export function crmConfigured(): boolean {
  return Boolean(process.env.HRMS_LEAD_INTAKE_URL && process.env.HRMS_LEAD_INTAKE_KEY);
}

export async function pushLeadToCrm(lead: CrmLead): Promise<{ ref?: string; duplicate?: boolean } | null> {
  const url = process.env.HRMS_LEAD_INTAKE_URL;
  const key = process.env.HRMS_LEAD_INTAKE_KEY;
  if (!url || !key) return null; // not configured

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Lead-Intake-Key": key },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CRM intake answered ${res.status}: ${text.slice(0, 200)}`);
  }
  const body = (await res.json().catch(() => ({}))) as { data?: { ref?: string; duplicate?: boolean } };
  return body.data ?? {};
}
