import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'

import { db } from '../firebaseConfig'

export default function InterestForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      // write straight to Firestore
      await addDoc(collection(db, 'interest'), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: serverTimestamp(), // required by your rules
      })

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: unknown) {
      console.error(err)
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-3">
      <div>
        <label htmlFor="name" className="mb-1 block text-center">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-center">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-center">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full border px-5 py-2 shadow-sm disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </div>

      {status === 'success' && (
        <p className="text-center text-green-700">
          Thank you for joining our early circle. We'll be in touch.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-700">Sorry, that didn't work. {errorMsg}</p>
      )}
    </form>
  )
}
