import { useState } from 'react'

export default function InterestForm() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    // Netlify requires a "form-name" field
    data.append('form-name', 'interest')

    try {
      await fetch('/', { method: 'POST', body: data })
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('err')
    }
  }

  return (
    <div className="max-w-xl rounded-2xl p-6 kr-bg-eggshell shadow">
      <h2 className="text-xl mb-3">Register your interest</h2>
      {status === 'ok' ? (
        <p>Thank you. We will be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} name="interest" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="interest" />
          <p className="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <label className="block mb-2">Name
            <input className="mt-1 w-full border rounded-lg p-2" type="text" name="name" required />
          </label>
          <label className="block mb-2">Email
            <input className="mt-1 w-full border rounded-lg p-2" type="email" name="email" required />
          </label>
          <label className="block mb-4">Message (optional)
            <textarea className="mt-1 w-full border rounded-lg p-2" name="message" rows={4}></textarea>
          </label>
          <button className="kr-bg-eggshell rounded-xl px-4 py-2" type="submit">Send</button>
          {status === 'err' && <p className="mt-2">Sorry, something went wrong. Please try again.</p>}
        </form>
      )}
    </div>
  )
}
