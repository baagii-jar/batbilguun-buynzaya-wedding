"use client";

import Image from "next/image";
import { InvitationSide } from "./SideSwitcher";

interface WeddingCoverProps {
  activeSide?: InvitationSide;
}

export function WeddingCover({ activeSide = "husband" }: WeddingCoverProps) {
  const isHusbandSide = activeSide === "husband" || activeSide === "groom";

  const firstName = isHusbandSide ? "Ц.Батбилгүүн" : "Н.Буянзаяа";
  const secondName = isHusbandSide ? "Н.Буянзаяа" : "Ц.Батбилгүүн";

  return (
    <section className="relative w-full bg-[#FAF8F5] flex flex-col items-center overflow-hidden pb-6">
      {/* Upper Photo Section with Soft Gradient Mask */}
      <div className="relative w-full aspect-[4/5] max-h-[520px]">
        <Image
          src="/images/cover.jpg"
          alt="Ц.Батбилгүүн & Н.Буянзаяа хуримын зураг"
          fill
          priority
          sizes="(max-width: 480px) 100vw, 460px"
          className="object-cover object-top mask-gradient-hero"
        />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent pointer-events-none" />
      </div>

      {/* Invitation Title & Typography Content */}
      <div className="relative z-10 -mt-10 px-6 text-center flex flex-col items-center w-full">
        {/* Header Tag */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#C5A059] uppercase mb-3">
          Х У Р И М Ы Н &nbsp; У Р И Л Г А
        </p>

        {/* Groom & Bride Names */}
        <h1 className="font-wedding-serif text-3xl sm:text-4xl font-semibold text-[#2C2825] leading-tight tracking-tight mb-1">
          {firstName} <span className="text-[#C5A059] font-normal">&amp;</span>
        </h1>
        <h2 className="font-wedding-serif text-3xl sm:text-4xl font-semibold text-[#2C2825] leading-tight tracking-tight mb-3">
          {secondName}
        </h2>

        {/* Child Subtitle */}
        <p className="text-xs sm:text-sm text-[#786F66] font-medium tracking-wide mb-4">
          хүү Б.Игүүн
        </p>

        {/* Decorative Divider */}
        <div className="w-12 h-[1px] bg-[#C5A059]/50 mb-5" />

        {/* Venue, Date & Time Line */}
        <div className="text-xs sm:text-sm font-medium tracking-wider text-[#3D352E] uppercase space-y-1">
          <p className="font-semibold text-[#2C2825]">
            Ховд аймаг &bull; Жаргалант сум
          </p>
          <p className="text-[#C5A059] font-bold">
            2026.10.04 &bull; 12:00 ЦАГТ
          </p>
        </div>
      </div>
    </section>
  );
}
