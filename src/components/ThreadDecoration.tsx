import { motion } from "motion/react";

export function ThreadDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gentle curved thread connecting points */}
      <motion.path
        d="M20,100 Q60,80 100,100 T180,100"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      {/* Small dots representing connection points */}
      <circle cx="20" cy="100" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="180" cy="100" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
