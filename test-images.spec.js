import { test, expect } from '@playwright/test'

test('images serve from Firebase Hosting', async ({ request }) => {
  for (const path of ['/images/family-hero.png', '/images/adult-hero.png']) {
    const res = await request.get(`https://kindlyroe-website.web.app${path}`)
    expect(res.status()).toBe(200)
    expect(res.headers()['content-type']).toContain('image')
  }
})
