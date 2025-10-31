import { onRequest, setGlobalOptions } from 'firebase-functions/v2/https'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'
import cors from 'cors'

// Set global options for all functions
setGlobalOptions({ region: 'europe-west2' })

// Initialise Admin SDK
initializeApp()

const db = getFirestore()

// Allow your dev & future live origins
const corsMiddleware = cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    'http://localhost:5000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:4173',
    'https://kindlyroe-website.web.app',
    'https://kindlyroe-website.firebaseapp.com',
    'https://kindlyroe.com',
    'https://www.kindlyroe.com',
  ],
  methods: ['POST', 'OPTIONS'],
})

export const submitInterest = onRequest(
  {
    cors: true,
  },
  (req, res) => {
    corsMiddleware(req, res, async () => {
      try {
        if (req.method === 'OPTIONS') {
          res.status(204).send('')
          return
        }

        if (req.method !== 'POST') {
          res.status(405).json({ ok: false, error: 'Method not allowed' })
          return
        }

        const { name, email, note, source } = req.body ?? {}

        if (!name || typeof name !== 'string') {
          res.status(400).json({ ok: false, error: 'Missing name' })
          return
        }

        const doc = {
          name: name.trim(),
          email: typeof email === 'string' ? email.trim() : '',
          note: typeof note === 'string' ? note.trim() : '',
          source: source || 'website',
          createdAt: Timestamp.now(),
          userAgent: req.get('user-agent') || '',
          ipHint: req.ip || '',
        }

        const ref = await db.collection('interest').add(doc)

        res.status(200).json({ ok: true, id: ref.id })
      } catch (err) {
        console.error('submitInterest error:', err)
        res.status(500).json({ ok: false, error: 'Server error' })
      }
    })
  }
)
