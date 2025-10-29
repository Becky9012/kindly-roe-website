import { useState } from 'react'
import { db } from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function InterestForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await addDoc(collection(db, 'interest'), {
        ...formData,
        timestamp: serverTimestamp(),
      })
      setStatus('ok')
      setFormData({ name: '', email: '', message: '' })
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="mb-2 block">
            Name
            <input
              className="mt-1 w-full rounded-lg border p-2"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="mb-2 block">
            Email
            <input
              className="mt-1 w-full rounded-lg border p-2"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="mb-4 block">
            Message (optional)
            <textarea
              className="mt-1 w-full rounded-lg border p-2"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </label>
          <button
            className="rounded-xl px-4 py-2 bg-[#73896e] text-white disabled:opacity-50"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
          {status === 'err' && (
            <p className="mt-2 text-red-600">Oops! Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  )
}
