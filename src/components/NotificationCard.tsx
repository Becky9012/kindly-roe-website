import { Bell } from 'lucide-react'
import { motion } from 'motion/react'

interface NotificationCardProps {
  message: string
  delay?: number
}

export function NotificationCard({ message, delay = 0 }: NotificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start gap-3 rounded-xl border-2 border-[#2D2D2D] bg-white p-4 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)]"
    >
      <div className="flex-shrink-0 rounded-full border-2 border-[#2D2D2D] bg-[#C8B6E2] p-2">
        <Bell className="h-4 w-4 text-[#2D2D2D]" />
      </div>
      <p className="text-sm leading-relaxed text-[#5D5D5D]">{message}</p>
    </motion.div>
  )
}
