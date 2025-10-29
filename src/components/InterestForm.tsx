// src/components/InterestForm.tsx

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'

import { db } from '../firebaseConfig'

export default function InterestForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [ok, setOk] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setOk(null)
    setErr(null)

    // Basic guard rails
    if (!name.trim() || !email.trim()) {
      setErr('Please add your name and email.')
      return
    }

    setSubmitting(true)

    try {
      await addDoc(collection(db, 'interest'), {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        timestamp: serverTimestamp(),
      })

      setOk('Thank you for joining our early circle. We\'ll be in touch.')
      setName('')
      setEmail('')
      setMessage('')
    } catch (e) {
      console.error(e)
      setErr('Sorry, that didn\'t go through. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3">
      <label htmlFor="name" className="block text-center text-sm">Name</label>
      <input
        id="name"
        className="w-full rounded border px-3 py-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email" className="block text-center text-sm">Email</label>
      <input
        id="email"
        className="w-full rounded border px-3 py-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message" className="block text-center text-sm">Message (optional)</label>
      <textarea
        id="message"
        className="w-full rounded border px-3 py-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-neutral-800 px-4 py-2 text-white disabled:opacity-50"
      >
        {submitting ? 'Sending…' : 'Send'}
      </button>

      {ok && <p className="text-center text-green-600">{ok}</p>}
      {err && <p className="text-center text-red-600">{err}</p>}
    </form>
  )
}