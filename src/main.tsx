import './index.css'

import { createRoot } from 'react-dom/client'

import App from './App.tsx'

// Temporary cleanup helper: visit with ?clear=1 to purge caches/storage and unregister SWs
async function maybeClearBrowserData() {
  const params = new URLSearchParams(window.location.search)
  if (!params.has('clear')) return

  try {
    // Unregister any service workers
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations()
      await Promise.all(regs.map((r) => r.unregister()))
    }

    // Clear caches
    if (window.caches && caches.keys) {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
    }

    // Clear storage
    localStorage.clear()
    sessionStorage.clear()
    if ((indexedDB as any)?.databases) {
      // Not supported in all browsers, but helpful where available
      const dbs: Array<{ name?: string }> = await (indexedDB as any).databases()
      await Promise.all(
        dbs.map((db) =>
          db.name
            ? new Promise((res) => {
                const req = indexedDB.deleteDatabase(db.name as string)
                req.onsuccess = req.onerror = req.onblocked = () => res(undefined)
              })
            : Promise.resolve()
        )
      )
    }
  } catch {
    // Ignore errors during browser data clearing
  }

  // Remove the flag and reload
  params.delete('clear')
  const url = `${location.origin}${location.pathname}${params.toString() ? `?${params.toString()}` : ''}${location.hash}`
  window.location.replace(url)
}

void maybeClearBrowserData()

createRoot(document.getElementById('root')!).render(<App />)
