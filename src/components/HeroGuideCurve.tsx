import React from "react";

type Props = {
  className?: string;
  strokeWidth?: number;
  dash?: [number, number];
  copper?: string;
  cream?: string;
  pathD?: string;
  showShadow?: boolean;
  viewBox?: string; // NEW: allow custom viewBox
};

export default function HeroGuideCurve({
  className,
  strokeWidth = 3.8,
  dash = [14, 12],
  copper = "#B7784A",
  cream = "#EFE7E0",
  pathD = "M600.12,309.6c68.24,1.42,127.33,45.97,178.14,91.54,24.67,22.12,50.21,45.82,82.41,53.62",
  showShadow = true,
  viewBox = "560 300 340 170", // NEW: default (can be replaced with your bbox)
}: Props) {
  const [dashLen, gapLen] = dash;
  const offset = (dashLen + gapLen) * 0.5;

  return (
    <svg
      className={className}
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path id="roe-curve" d={pathD} />
      </defs>

      {showShadow && (
        <use
          href="#roe-curve"
          fill="none"
          stroke="black"
          strokeOpacity="0.05"
          strokeWidth={strokeWidth + 1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}

      <use
        href="#roe-curve"
        fill="none"
        stroke={copper}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={`${dashLen} ${gapLen}`}
      />
      <use
        href="#roe-curve"
        fill="none"
        stroke={cream}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={`${dashLen} ${gapLen}`}
        strokeDashoffset={offset}
      />
    </svg>
  );
}
