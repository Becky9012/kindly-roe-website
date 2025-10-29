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

    if (!name.trim() || !email.trim()) return

    setSubmitting(true)
    setOk(false)
    setErr(false)

    try {
      await addDoc(collection(db, 'interest'), {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        timestamp: serverTimestamp(),
      })

      setOk(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (e) {
      console.error(e)
      setErr(true)
    } finally {
      setSubmitting(false) // prevents "stuck on Sending…"
    }
  }

  return (
    <div style={{ border: '2px solid red', padding: '20px', margin: '20px' }}>
      <h3 style={{ color: 'red', marginBottom: '10px' }}>DEBUG: InterestForm is rendering</h3>
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

      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-red-500 px-4 py-3 text-base font-medium text-white shadow-sm transition hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:bg-gray-300 disabled:text-gray-700 disabled:shadow-none"
        disabled={submitting || !name.trim() || !email.trim()}
        style={{ 
          display: 'block', 
          visibility: 'visible', 
          opacity: 1,
          position: 'relative',
          zIndex: 10
        }}
      >
        {submitting ? 'Sending…' : 'Send'}
      </button>

      {ok && (
        <p className="text-sm text-green-700">
          Thank you for joining our early circle. We'll be in touch.
        </p>
      )}
      {err && (
        <p className="text-sm text-red-700">Sorry, something went wrong. Please try again.</p>
      )}
    </form>
    </div>
  )
}
