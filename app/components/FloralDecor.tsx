"use client";

import React from "react";

export function WreathCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full text-[#C5A059]/30 animate-spin-slow"
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
        {/* Decorative Leaf Motifs along the circle */}
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

export function CornerSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 text-[#C5A059]/40 pointer-events-none ${className}`}
      fill="currentColor"
    >
      <path d="M10 90 Q 50 80 80 20 C 70 35 50 45 35 40 Q 20 60 10 90 Z" />
      <path d="M30 65 Q 45 55 55 35 C 45 45 35 50 30 65 Z" opacity="0.6" />
    </svg>
  );
}
