"use client";

import Image from "next/image";
import { InvitationSide } from "./SideSwitcher";
import {
  BotanicalMoonWreath,
  OliveBranchDivider,
  SideBotanicalBranch,
} from "./FloralDecor";
import { CountdownTimer } from "./CountdownTimer";

interface WeddingCoverProps {
  activeSide?: InvitationSide;
}

export function WeddingCover({ activeSide = "husband" }: WeddingCoverProps) {
  const isHusbandSide = activeSide === "husband" || activeSide === "groom";

  const firstName = isHusbandSide ? "Ц.Батбилгүүн" : "Н.Буянзаяа";
  const secondName = isHusbandSide ? "Н.Буянзаяа" : "Ц.Батбилгүүн";

  return (
    <section className="relative w-full bg-[#FAF7F2] flex flex-col items-center overflow-hidden pb-8 text-center">
      {/* Upper Photo Section with Soft Gradient Mask & Grayscale Filter (Image 1 Style) */}
      <div className="relative w-full max-w-[380px] mx-auto aspect-[4/5] max-h-[420px]">
        <Image
          src="/images/chtXKuen.jpg"
          alt="Ц.Батбилгүүн & Н.Буянзаяа хуримын зураг"
          fill
          priority
          quality={100}
          sizes="(max-width: 480px) 100vw, 480px"
          className="object-cover object-top mask-gradient-hero"
        />
        {/* Soft Fade Mask into background */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent pointer-events-none" />
      </div>

      {/* Typography & Hero Content */}
      <div className="relative z-10 -mt-12 px-6 flex flex-col items-center w-full max-w-md">
        {/* Wreath Emblem with Crescent Moon */}
        <BotanicalMoonWreath className="w-20 h-20 mb-2 drop-shadow-sm" />

        {/* Groom & Bride Names in Golden Serif Italic */}
        <h1 className="font-wedding-serif italic text-4xl sm:text-5xl font-normal text-[#8C6D37] leading-tight mb-0.5 tracking-wide">
          {firstName}
        </h1>
        <p className="font-wedding-serif italic text-2xl text-[#C5A059] font-normal my-0.5">
          &amp;
        </p>
        <h2 className="font-wedding-serif italic text-4xl sm:text-5xl font-normal text-[#8C6D37] leading-tight mb-3 tracking-wide">
          {secondName}
        </h2>

        {/* Subtitle */}
        <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.45em] text-[#7A7167] mb-2">
          Х У Р И М Ы Н &nbsp; Ё С Л О Л
        </p>

        {/* Olive Branch Divider */}
        <OliveBranchDivider className="w-56 h-6 mb-4" />

        {/* Countdown Timer with Side Botanical Accent (Image 1) */}
        <div className="relative w-full flex items-center justify-center pt-2">
          {/* Main Countdown Timer Component */}
          <CountdownTimer />

          {/* Right Curved Side Botanical Leaf Accessory */}
          <div className="absolute -right-4 top-0 bottom-0 flex items-center pointer-events-none opacity-85">
            <SideBotanicalBranch className="w-24 h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
