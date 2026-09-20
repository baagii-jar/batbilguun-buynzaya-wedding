"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const particleColors = [
      "#C5A059", // Gold
      "#D4AF37", // Metallic Gold
      "#A37F38", // Dark Gold
      "#8A9A86", // Eucalyptus Green
      "#D8CBB5", // Warm Ivory
    ];

    const generatedPetals: Petal[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 95, // 0-95%
      size: 8 + Math.random() * 12, // 8-20px
      duration: 8 + Math.random() * 10, // 8-18s
      delay: Math.random() * 8, // 0-8s
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    }));

    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {petals.map((petal) => (
        <svg
          key={petal.id}
          viewBox="0 0 24 24"
          className="petal-particle"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            fill: petal.color,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          {/* Leaf / Petal SVG Shape */}
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8.5 7.5 9.5 0-3.5 1.5-7 4.5-9.5 3-2.5 6.5-4 8-4-0.5-3.5-4-6-10-6z" />
        </svg>
      ))}
    </div>
  );
}
