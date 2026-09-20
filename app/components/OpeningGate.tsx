"use client";

import { useState } from "react";
import Image from "next/image";

interface OpeningGateProps {
  onOpen: () => void;
}

export function OpeningGate({ onOpen }: OpeningGateProps) {
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleOpenInvite = () => {
    if (isFading || isHidden) return;
    setIsFading(true);
    onOpen();

    setTimeout(() => {
      setIsHidden(true);
    }, 850);
  };

  if (isHidden) return null;

  return (
    <div
      onClick={handleOpenInvite}
      className={`fixed inset-0 z-50 bg-[#0A0A0A] flex justify-center items-center cursor-pointer select-none overflow-hidden transition-opacity duration-700 ${
        isFading ? "animate-fade-out-zoom pointer-events-none" : ""
      }`}
    >
      {/* Centered Mobile Photo Frame on PC */}
      <div className="relative w-full max-w-[480px] h-full flex flex-col justify-end items-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image constrained within mobile frame */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cover.jpg"
            alt="Ц.Батбилгүүн & Н.Буянзаяа хуримын зураг"
            fill
            priority
            sizes="(max-width: 480px) 100vw, 480px"
            className="object-cover object-center"
          />
          {/* Dark Vignette and Bottom Gradient Overlay for typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
        </div>

        {/* Overlaid Typography & Open Trigger Content */}
        <div className="relative z-10 w-full px-6 pb-12 pt-20 text-center flex flex-col items-center">
          {/* Eyebrow Tag */}
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37] mb-3 drop-shadow">
            У Р И Л Г А
          </p>

          {/* Names */}
          <h1 className="font-wedding-serif text-4xl sm:text-5xl font-semibold text-white leading-tight mb-1 drop-shadow-md">
            Ц.Батбилгүүн
          </h1>
          <p className="font-wedding-serif text-2xl text-[#D4AF37] font-normal my-1 italic">
            &amp;
          </p>
          <h2 className="font-wedding-serif text-4xl sm:text-5xl font-semibold text-white leading-tight mb-4 drop-shadow-md">
            Н.Буянзаяа
          </h2>

          {/* Subtitle */}
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-300 mb-8 drop-shadow">
            Х У Р И М Ы Н &nbsp; Ё С Л О Л
          </p>

          {/* Clean Open Button (No icons) */}
          <button
            type="button"
            onClick={handleOpenInvite}
            className="w-full max-w-[260px] bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B8860B] hover:brightness-110 text-[#1C170E] py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-[0.2em] shadow-2xl gold-border-glow transition-all active:scale-95 border border-[#F4E8D0]/40"
          >
            Урилгаа нээх
          </button>
        </div>
      </div>
    </div>
  );
}
