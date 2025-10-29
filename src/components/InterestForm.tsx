// src/components/InterestForm.tsx

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'

import { db } from '../firebaseConfig'

export default function InterestForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [ok, setOk] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic guard rails
    if (!name.trim() || !email.trim()) {
      setErr('Please add your name and email.')
      return
    }

    setSubmitting(true)
    setOk(false)
    setErr(false)

    try {
      console.log('Starting Firebase submission...')
      console.log('Firebase db object:', db)
      console.log('Collection reference:', collection(db, 'interest'))

      // Test Firebase connection first
      console.log('Testing Firebase connection...')
      
      // Add timeout to prevent infinite hanging
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout after 10 seconds')), 10000)
      )

      const firebasePromise = addDoc(collection(db, 'interest'), {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        timestamp: serverTimestamp(),
      })

      console.log('Firebase promise created, waiting for response...')
      const docRef = await Promise.race([firebasePromise, timeoutPromise])

      console.log('Document written with ID: ', docRef.id)

      setOk(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Firebase error details:', error)
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      setErr(`Submission failed: ${error.message || 'Unknown error'}`)
    } finally {
      console.log('Finally block: setting submitting to false')
      setSubmitting(false) // prevents "stuck on Sending…"
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl px-4 pb-16">
      <div className="space-y-3">
        <label htmlFor="name" className="block text-center text-sm">
          Name
        </label>
        <input
          id="name"
          className="w-full rounded border px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email" className="block text-center text-sm">
          Email
        </label>
        <input
          id="email"
          className="w-full rounded border px-3 py-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message" className="block text-center text-sm">
          Message (optional)
        </label>
        <textarea
          id="message"
          className="w-full rounded border px-3 py-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
        />
      </div>

      <div style={{ marginTop: '16px', width: '100%' }}>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: submitting || !name.trim() || !email.trim() ? '#d1d5db' : '#6c856f',
            color: submitting || !name.trim() || !email.trim() ? '#374151' : 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: submitting || !name.trim() || !email.trim() ? 'not-allowed' : 'pointer',
            display: 'block',
            visibility: 'visible',
            opacity: 1,
            position: 'relative',
            zIndex: 10,
            transition: 'background-color 0.2s ease',
          }}
          disabled={submitting || !name.trim() || !email.trim()}
        >
          {submitting ? 'Sending…' : 'Send'}
        </button>
      </div>

      {ok && (
        <p className="text-sm text-green-700">
          Thank you for joining our early circle. We'll be in touch.
        </p>
      )}
      {err && (
        <p className="text-sm text-red-700">Sorry, something went wrong. Please try again.</p>
      )}
    </form>
  )
}
