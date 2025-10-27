import { motion } from "motion/react";

export function LightGlow({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64"
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${sizeMap[size]} ${className}`}
      animate={{
        opacity: [0.1, 0.15, 0.1],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        background: "radial-gradient(circle, currentColor 0%, transparent 70%)",
      }}
    />
  );
}
