import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'

import { db } from '../firebaseConfig'

export default function InterestForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  const submitting = status === 'sending'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await addDoc(collection(db, 'interest'), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      })
      setStatus('ok')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('err')
    }
  }

  return (
    <div className="kr-bg-eggshell max-w-xl rounded-2xl p-6 shadow">
      <h2 className="mb-3 text-xl">Register your interest</h2>
      {status === 'ok' ? (
        <p className="mt-4 text-center text-lg text-[color:var(--copper-500)]">
          Thank you for joining our early circle. Roe will reach out when it's time. 🌿
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          {/* Name */}
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
              placeholder="Your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm placeholder-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
              placeholder="Message (optional)"
            />
          </div>

          {/* Button block */}
          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2 text-sm font-medium tracking-wide text-neutral-900 hover:bg-neutral-900 hover:text-white disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {submitting ? "Sending…" : "Submit"}
            </button>
            {/* subtle status text for screen readers and UX */}
            <span
              aria-live="polite"
              className="text-sm text-neutral-600"
            >
              {status === 'err' ? 'Error occurred' : ''}
            </span>
          </div>
        </form>
      )}
    </div>
  )
}
