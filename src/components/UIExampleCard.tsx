import { Check } from 'lucide-react'

import { Card } from './ui/card'

interface UIExampleCardProps {
  type: 'button' | 'confirmation' | 'prompt'
  text: string
  subtext?: string
}

export function UIExampleCard({ type, text, subtext }: UIExampleCardProps) {
  if (type === 'button') {
    return (
      <button className="rounded-lg border-2 border-[#2D2D2D] bg-[#C8B6E2] px-4 py-2 text-sm text-[#2D2D2D] shadow-[3px_3px_0px_0px_rgba(45,45,45,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(45,45,45,1)]">
        {text}
      </button>
    )
  }

  if (type === 'confirmation') {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg border-2 border-[#2D2D2D] bg-[#A8D5BA] px-3 py-2 text-sm text-[#2D2D2D]">
        <Check className="h-4 w-4" />
        <span>{text}</span>
      </div>
    )
  }

  return (
    <Card className="border-2 border-[#2D2D2D] bg-white p-4">
      <p className="mb-1 text-sm text-[#5D5D5D]">{text}</p>
      {subtext && <p className="text-xs text-[#5D5D5D]/60">{subtext}</p>}
    </Card>
  )
}
