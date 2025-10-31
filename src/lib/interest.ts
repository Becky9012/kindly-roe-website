// src/lib/interest.ts

export type InterestPayload = { name: string; email?: string; note?: string };

export async function addInterest(payload: InterestPayload) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000); // 15s safety timeout

  const res = await fetch("/api/submit-interest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: controller.signal,
  }).catch((err) => {
    // Turn aborts into a friendlier error
    if (err.name === "AbortError") {
      throw new Error("The server took too long to respond. Please try again.");
    }
    throw err;
  }) as Response;

  clearTimeout(timer);

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Submit failed: ${res.status} ${text}`);
  }

  return (await res.json()) as { ok: true; id: string };
}
