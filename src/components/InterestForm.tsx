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
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3">
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

      <button
        type="submit"
        disabled={submitting || !name.trim() || !email.trim()}
        className={`w-full rounded-lg px-4 py-3 text-white font-medium transition
          ${submitting || !name.trim() || !email.trim()
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#6c856f] hover:bg-[#5b715e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6c856f]'}
        `}
      >
        {submitting ? 'Sending…' : 'Send'}
      </button>

      {ok && <p className="text-green-700 text-sm">Thank you for joining our early circle. We'll be in touch.</p>}
      {err && <p className="text-red-700 text-sm">Sorry, something went wrong. Please try again.</p>}
    </form>
  )
}
