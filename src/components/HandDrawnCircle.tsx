export function HandDrawnCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M100 10C120 8 140 12 155 25C170 38 180 58 185 80C190 102 188 125 178 145C168 165 150 180 128 188C106 196 82 196 60 188C38 180 20 165 10 145C0 125 -2 102 3 80C8 58 18 38 33 25C48 12 68 12 88 10C92 9.5 96 9.5 100 10Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
