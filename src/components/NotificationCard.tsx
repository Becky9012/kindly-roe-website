import { motion } from "motion/react";
import { Bell } from "lucide-react";

interface NotificationCardProps {
  message: string;
  delay?: number;
}

export function NotificationCard({ message, delay = 0 }: NotificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white border-2 border-[#2D2D2D] rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] flex items-start gap-3"
    >
      <div className="bg-[#C8B6E2] border-2 border-[#2D2D2D] rounded-full p-2 flex-shrink-0">
        <Bell className="w-4 h-4 text-[#2D2D2D]" />
      </div>
      <p className="text-sm text-[#5D5D5D] leading-relaxed">{message}</p>
    </motion.div>
  );
}
