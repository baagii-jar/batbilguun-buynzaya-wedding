"use client";

import React from "react";

// Rotating Background Wreath Circle
export function WreathCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full text-[#C5A059]/40 animate-spin-slow"
      >
        <circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <g fill="currentColor">
          <path d="M100 10 C 95 18, 105 18, 100 25 C 95 18, 105 18, 100 10" />
          <path d="M190 100 C 182 95, 182 105, 175 100 C 182 95, 182 105, 190 100" />
          <path d="M100 190 C 95 182, 105 182, 100 175 C 95 182, 105 182, 100 190" />
          <path d="M10 100 C 18 95, 18 105, 25 100 C 18 95, 18 105, 10 100" />
        </g>
      </svg>
    </div>
  );
}

// Header Emblem: Sage Green Olive Wreath with Golden Crescent Moon
export function BotanicalMoonWreath({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
        {/* Outer Wreath Stem Circle */}
        <circle cx="60" cy="60" r="42" stroke="#859C84" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
        
        {/* Leaf Pair Motifs around Wreath */}
        <g fill="#7A9279">
          {/* Top Leaves */}
          <path d="M60 14 C56 8, 52 14, 60 20 C68 14, 64 8, 60 14 Z" />
          <path d="M72 18 C78 14, 82 20, 74 24 Z" />
          <path d="M48 18 C42 14, 38 20, 46 24 Z" />
          
          {/* Right Leaves */}
          <path d="M102 54 C108 50, 108 60, 98 60 Z" />
          <path d="M98 72 C104 74, 98 82, 94 76 Z" />
          <path d="M88 88 C94 92, 86 98, 84 90 Z" />
          
          {/* Bottom Leaves */}
          <path d="M60 106 C64 112, 56 112, 60 100 Z" />
          <path d="M44 98 C40 104, 48 106, 50 96 Z" />
          <path d="M76 98 C80 104, 72 106, 70 96 Z" />
          
          {/* Left Leaves */}
          <path d="M18 54 C12 50, 12 60, 22 60 Z" />
          <path d="M22 72 C16 74, 22 82, 26 76 Z" />
          <path d="M32 88 C26 92, 34 98, 36 90 Z" />
        </g>
        
        {/* Center Crescent Moon & Botanical Sprig in Gold */}
        <path
          d="M65 42 C54 42, 47 51, 47 62 C47 73, 55 81, 66 81 C60 78, 56 71, 56 62 C56 52, 61 45, 65 42 Z"
          fill="#D4AF37"
        />
        <path d="M60 52 Q64 56 68 53 C66 58 62 62 60 67" stroke="#C5A059" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <circle cx="68" cy="53" r="1.5" fill="#D4AF37" />
        <circle cx="64" cy="48" r="1" fill="#C5A059" />
      </svg>
    </div>
  );
}

// Horizontal Olive Leaves Divider Row
export function OliveBranchDivider({ className = "w-48 h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-2 text-[#C5A059] opacity-80 ${className}`}>
      <svg viewBox="0 0 200 24" className="w-full h-full" fill="currentColor">
        {/* Left Sprig */}
        <g transform="translate(10, 0)">
          <path d="M10 12 L80 12" stroke="currentColor" strokeWidth="0.8" />
          <path d="M25 12 Q20 6 30 7 Q35 12 25 12 Z" />
          <path d="M40 12 Q35 18 45 17 Q50 12 40 12 Z" />
          <path d="M55 12 Q50 6 60 7 Q65 12 55 12 Z" />
          <path d="M70 12 Q65 18 75 17 Q80 12 70 12 Z" />
        </g>
        {/* Center Moon / Floral Accent */}
        <path d="M100 6 C94 6, 90 11, 90 17 C96 15, 98 10, 100 6 Z" fill="#D4AF37" />
        <circle cx="100" cy="12" r="2.5" fill="currentColor" />
        {/* Right Sprig */}
        <g transform="translate(110, 0)">
          <path d="M10 12 L80 12" stroke="currentColor" strokeWidth="0.8" />
          <path d="M25 12 Q20 18 30 17 Q35 12 25 12 Z" />
          <path d="M40 12 Q35 6 45 7 Q50 12 40 12 Z" />
          <path d="M55 12 Q50 18 60 17 Q65 12 55 12 Z" />
          <path d="M70 12 Q65 6 75 7 Q80 12 70 12 Z" />
        </g>
      </svg>
    </div>
  );
}

// Side Curved Botanical Branch for Countdown Timer
export function SideBotanicalBranch({ className = "w-28 h-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 180" className={`pointer-events-none ${className}`} fill="none">
      <path
        d="M20 10 Q 75 80 30 170"
        stroke="#859C84"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <g fill="#859C84">
        <path d="M22 18 C32 10 40 22 26 24 Z" opacity="0.9" />
        <path d="M38 40 C52 30 58 46 44 48 Z" />
        <path d="M54 68 C70 58 74 76 60 76 Z" fill="#7A9279" />
        <path d="M58 98 C74 92 74 110 58 108 Z" fill="#7A9279" />
        <path d="M48 128 C64 126 60 144 46 138 Z" fill="#859C84" />
        <path d="M34 154 C46 156 38 172 28 162 Z" opacity="0.8" />
      </g>
      <circle cx="44" cy="46" r="3" fill="#D4AF37" opacity="0.7" />
      <circle cx="62" cy="74" r="3.5" fill="#C5A059" opacity="0.8" />
      <circle cx="60" cy="106" r="3" fill="#D4AF37" opacity="0.7" />
    </svg>
  );
}

// Victorian Crown Scroll Flourish Ornament
export function VictorianCrownScroll({ className = "w-32 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 50" className={`text-[#C5A059] opacity-85 ${className}`} fill="none" stroke="currentColor">
      <path d="M80 6 L80 18 M74 8 L77 18 M86 8 L83 18 M68 11 L74 19 M92 11 L86 19 M63 16 L71 21 M97 16 L89 21" strokeWidth="1.2" />
      <path d="M60 22 Q80 14 100 22" strokeWidth="1.2" />
      <path d="M80 24 Q65 38 40 28 Q25 20 15 30 Q8 36 15 42 Q25 44 32 36 Q38 30 50 36 L80 40" strokeWidth="1" />
      <path d="M80 24 Q95 38 120 28 Q135 20 145 30 Q152 36 145 42 Q135 44 128 36 Q122 30 110 36 L80 40" strokeWidth="1" />
      <circle cx="80" cy="28" r="2" fill="currentColor" />
      <circle cx="40" cy="30" r="1.5" fill="currentColor" />
      <circle cx="120" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Corner Botanical Branch Sprig (Top-Right or Bottom-Left of Box)
export function CornerBotanicalBranch({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none ${className}`} fill="none">
      <path d="M90 10 Q 50 20 10 90" stroke="#7A9279" strokeWidth="1.2" strokeLinecap="round" />
      <g fill="#859C84">
        <path d="M80 14 C 70 8 62 20 74 22 Z" />
        <path d="M64 22 C 54 14 46 28 58 30 Z" fill="#7A9279" />
        <path d="M48 36 C 36 28 30 42 42 44 Z" fill="#7A9279" />
        <path d="M32 54 C 22 46 16 60 28 62 Z" />
        <path d="M20 72 C 10 66 6 80 16 80 Z" />
      </g>
      <g fill="#D4AF37" opacity="0.6">
        <path d="M72 18 C 66 12 58 22 68 24 Z" />
        <path d="M40 42 C 32 36 28 48 38 48 Z" />
      </g>
    </svg>
  );
}

// Monogram Circle Wreath (Bottom of Invitation Box)
export function MonogramWreathCircle({
  initials = "Б / Б",
  className = "w-24 h-24",
}: {
  initials?: string;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="50" r="40" stroke="#859C84" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        <g fill="#7A9279">
          <path d="M50 8 C46 2 42 8 50 14 C58 8 54 2 50 8 Z" />
          <path d="M88 50 C94 46 94 56 86 54 Z" />
          <path d="M50 92 C54 98 46 98 50 86 Z" />
          <path d="M12 50 C6 46 6 56 14 54 Z" />
        </g>
        <circle cx="50" cy="50" r="30" stroke="#C5A059" strokeWidth="1" fill="#FAF8F5" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#8C6D37] font-wedding-serif text-xs font-semibold tracking-widest leading-none">
        {initials.includes("/") ? (
          <>
            <span>{initials.split("/")[0].trim()}</span>
            <span className="w-4 h-[1px] bg-[#C5A059] my-0.5" />
            <span>{initials.split("/")[1].trim()}</span>
          </>
        ) : (
          <span>{initials}</span>
        )}
      </div>
    </div>
  );
}
