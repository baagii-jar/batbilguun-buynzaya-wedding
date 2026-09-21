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
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.45em] text-[#D8B97C] mb-4 drop-shadow">
            У Р И Л Г А
          </p>

          {/* Names */}
          <h1 className="font-wedding-serif italic text-4xl sm:text-5xl font-normal text-[#FAF7F2] leading-tight mb-0.5 drop-shadow-md tracking-wide">
            Ц.Батбилгүүн
          </h1>
          <p className="font-wedding-serif italic text-2xl sm:text-3xl text-[#D8B97C] font-normal my-0.5">
            &amp;
          </p>
          <h2 className="font-wedding-serif italic text-4xl sm:text-5xl font-normal text-[#FAF7F2] leading-tight mb-4 drop-shadow-md tracking-wide">
            Н.Буянзаяа
          </h2>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.4em] text-[#D0C4B4] mb-8 drop-shadow">
            Х У Р И М Ы Н &nbsp; Ё С Л О Л
          </p>

          {/* Clean Borderless Open Button with Soft Blend Effect */}
          <button
            type="button"
            onClick={handleOpenInvite}
            className="w-full max-w-[260px] btn-gold-blend py-3.5 px-6 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] cursor-pointer"
          >
            Урилгаа нээх
          </button>
        </div>
      </div>
    </div>
  );
}
