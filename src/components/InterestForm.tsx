import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

import { addInterest } from '../lib/interest'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export default function InterestForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [status, setStatus] = useState<'idle' | 'saving' | 'ok' | 'err'>('idle')

  // Spam protection: honeypot + timestamp
  const [honeypot, setHoneypot] = useState('')
  const formLoadTime = useRef(Date.now())

  // Reset form load time when component mounts
  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!name.trim() || !email.trim()) {
      toast.error('Please enter your name and email')
      return
    }

    // Spam check 1: Honeypot field
    if (honeypot) {
      console.warn('[InterestForm] Honeypot triggered - ignoring submission')
      toast.success("Thanks! We'll be in touch soon.")
      setName('')
      setEmail('')
      setNote('')
      return
    }

    // Spam check 2: Too fast (< 1 second)
    const timeSinceLoad = Date.now() - formLoadTime.current
    if (timeSinceLoad < 1000) {
      console.warn('[InterestForm] Submission too fast - ignoring')
      toast.success("Thanks! We'll be in touch soon.")
      setName('')
      setEmail('')
      setNote('')
      return
    }

    setStatus('saving')

    try {
      await addInterest({ name, email, note })
      // Success - document saved

      setStatus('ok')
      setName('')
      setEmail('')
      setNote('')

      toast.success("Thanks! We'll be in touch soon.", {
        description: 'Your interest has been recorded.',
      })

      // Reset status after animation
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err))
      console.error('[InterestForm] ❌ ERROR:', error.message)
      setStatus('err')

      toast.error('Something went wrong', {
        description: error.message || 'Please try again or contact support.',
      })

      // Reset error status
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto my-8 grid max-w-[420px] gap-3">
      {/* Honeypot field - hidden from real users, visible to bots */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-px w-px"
        aria-hidden="true"
      />

      <div className="grid gap-2">
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === 'saving'}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'saving'}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="note">Note</Label>
        <textarea
          id="note"
          name="note"
          autoComplete="off"
          aria-label="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          disabled={status === 'saving'}
          className="border-input bg-input-background focus-visible:border-ring focus-visible:ring-ring/50 min-h-[80px] w-full rounded-md border px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          rows={3}
        />
      </div>

      <Button type="submit" disabled={status === 'saving'} className="mt-2">
        {status === 'saving' ? 'Sending…' : 'Send'}
      </Button>
    </form>
  )
}
