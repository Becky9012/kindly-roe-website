import { test, expect } from "@playwright/test";

test("images serve from Netlify", async ({ request }) => {
  for (const path of ["/images/family-hero.png", "/images/adult-hero.png"]) {
    const res = await request.get(`https://kindly-roe-website.netlify.app${path}`);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("image");
  }
});
