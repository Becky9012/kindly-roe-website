import { Card } from "./ui/card";
import { Check } from "lucide-react";

interface UIExampleCardProps {
  type: "button" | "confirmation" | "prompt";
  text: string;
  subtext?: string;
}

export function UIExampleCard({ type, text, subtext }: UIExampleCardProps) {
  if (type === "button") {
    return (
      <button className="px-4 py-2 bg-[#C8B6E2] text-[#2D2D2D] border-2 border-[#2D2D2D] rounded-lg shadow-[3px_3px_0px_0px_rgba(45,45,45,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(45,45,45,1)] transition-all text-sm">
        {text}
      </button>
    );
  }

  if (type === "confirmation") {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#A8D5BA] border-2 border-[#2D2D2D] rounded-lg text-sm text-[#2D2D2D]">
        <Check className="w-4 h-4" />
        <span>{text}</span>
      </div>
    );
  }

  return (
    <Card className="p-4 border-2 border-[#2D2D2D] bg-white">
      <p className="text-sm text-[#5D5D5D] mb-1">{text}</p>
      {subtext && <p className="text-xs text-[#5D5D5D]/60">{subtext}</p>}
    </Card>
  );
}
