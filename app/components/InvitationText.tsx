"use client";

import { InvitationSide } from "./SideSwitcher";
import {
  VictorianCrownScroll,
  CornerBotanicalBranch,
  MonogramWreathCircle,
} from "./FloralDecor";

interface InvitationTextProps {
  activeSide?: InvitationSide;
}

export function InvitationText({ activeSide = "husband" }: InvitationTextProps) {
  const isHusbandSide = activeSide === "husband" || activeSide === "groom";

  const husbandParents = "Ц.Цогбадрах & Т.Тунгалаг";
  const wifeParents = "Д.Ням-Очир & Б.Цэцэгсүрэн";

  const firstName = isHusbandSide ? "Ц.Батбилгүүн" : "Н.Буянзаяа";
  const secondName = isHusbandSide ? "Н.Буянзаяа" : "Ц.Батбилгүүн";

  return (
    <section className="w-full px-4 sm:px-6 py-8 bg-[#FAF7F2] flex flex-col items-center text-center">
      {/* Golden Double-Bordered Invitation Box with Corner Accessories (Image 2) */}
      <div className="relative w-full max-w-md bg-[#FDFBF8] border border-[#C5A059]/70 p-6 sm:p-8 rounded-sm shadow-md flex flex-col items-center overflow-hidden">
        {/* Inner Thin Border Line */}
        <div className="absolute inset-2 border border-[#C5A059]/40 pointer-events-none" />

        {/* Top-Right Corner Botanical Leaf Accessory */}
        <div className="absolute -top-2 -right-2 pointer-events-none opacity-90 z-10">
          <CornerBotanicalBranch className="w-24 h-24 sm:w-28 sm:h-28 transform scale-x-[-1]" />
        </div>

        {/* Bottom-Left Corner Botanical Leaf Accessory */}
        <div className="absolute -bottom-2 -left-2 pointer-events-none opacity-90 z-10">
          <CornerBotanicalBranch className="w-24 h-24 sm:w-28 sm:h-28 transform rotate-180" />
        </div>

        {/* Top Victorian Crown Scroll Emblem */}
        <VictorianCrownScroll className="w-36 h-10 mb-4 text-[#C5A059]" />

        {/* Salutation Header */}
        <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#2C261F] uppercase mb-2 leading-relaxed max-w-xs">
          ЭРХЭМ ХҮНДЭТ ТӨРӨЛ ТӨРӨГСӨД, ХАМААТАН САДАН, АНД НӨХӨД ӨӨ!
        </h3>

        {/* Golden Diamond Dot Separator */}
        <div className="text-[#C5A059] text-xs my-2">&bull;</div>

        {/* New Family Subheader */}
        <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.35em] text-[#8C8275] mb-2 flex items-center gap-2">
          <span className="text-[#859C84]">🌿</span> Ш и н э &nbsp; г э р &nbsp; б ү л <span className="text-[#859C84]">🌿</span>
        </p>

        {/* Couple Names in Italic Serif */}
        <div className="my-2">
          <h4 className="font-wedding-serif italic text-3xl sm:text-4xl text-[#8C6D37] font-normal tracking-wide">
            {firstName} <span className="text-[#C5A059] font-normal">&amp;</span> {secondName}
          </h4>
        </div>

        {/* Center Victorian Scroll Flourish */}
        <VictorianCrownScroll className="w-28 h-8 my-3 text-[#C5A059]/80 transform scale-y-[-1]" />

        {/* Heartfelt Mongolian Wedding Invitation Poem */}
        <div className="space-y-3 my-3 max-w-xs text-xs sm:text-sm text-[#4A4237] leading-relaxed font-normal">
          <p className="uppercase tracking-widest font-semibold text-[#8C6D37]">
            ААВ ЭЭЖИЙН БУЯН ШИГШСЭН
          </p>
          <p className="uppercase tracking-widest font-medium">
            ХАЙРЫН АМГАЛАН ТЭНГЭР ДОР
          </p>
          <p className="uppercase tracking-widest font-medium">
            ХОТОЛ ОЛНОО НЭГТГЭН
          </p>
          <p className="uppercase tracking-widest font-bold text-[#2C261F]">
            ШИНЭ ГЭР БҮЛ БОЛЖ БАЙНА.
          </p>
          <div className="w-12 h-[1px] bg-[#C5A059]/40 mx-auto my-3" />
          <p className="uppercase tracking-wider font-normal text-[#3D352E]">
            ЭНЭХҮҮ НАНДИН ЖАРГАЛТАЙ БАЯРТ МИНЬ ХҮРЭЛЦЭН ИРЖ, ЕРӨӨЛ ӨРГӨН, ГАЛ ГОЛОМТЫГ МААНЬ БАДРААХАД ОРОЛЦОХЫГ ХҮНДЭТГЭН УРЬЖ БАЙНА.
          </p>
        </div>

        {/* Family Parents Note */}
        <div className="mt-4 pt-3 border-t border-[#C5A059]/30 w-full max-w-xs text-[11px] text-[#786F66]">
          <p className="font-semibold text-[#8C6D37] uppercase tracking-wider mb-0.5">
            {isHusbandSide ? "Хүүгийн эцэг эх:" : "Охины эцэг эх:"}
          </p>
          <p className="font-wedding-serif text-sm text-[#2C261F]">
            {isHusbandSide ? husbandParents : wifeParents}
          </p>
        </div>

        {/* Bottom Monogram Circle Wreath Emblem */}
        <MonogramWreathCircle
          initials={isHusbandSide ? "Б / Б" : "Б / Н"}
          className="w-24 h-24 mt-6"
        />
      </div>
    </section>
  );
}
