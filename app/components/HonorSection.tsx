"use client";

import { InvitationSide } from "./SideSwitcher";
import { CornerBotanicalBranch, BotanicalMoonWreath } from "./FloralDecor";

interface HonorSectionProps {
  activeSide?: InvitationSide;
}

export function HonorSection({ activeSide = "husband" }: HonorSectionProps) {
  const isHusbandOnly = activeSide === "husband" || activeSide === "groom";

  const husbandSidePhones = ["9947 9674", "9947 3632"];
  const wifeSidePhones = ["9419 9009", "9943 9493"];

  const phoneNumbers = isHusbandOnly ? husbandSidePhones : wifeSidePhones;

  const familyMembers = [
    { role: "НӨХӨР", name: "Ц.Батбилгүүн" },
    { role: "ЭХНЭР", name: "Н.Буянзаяа" },
    { role: "ХҮҮ", name: "Б.Игүүн" },
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 py-10 bg-[#FAF7F2] flex flex-col items-center text-center overflow-hidden">
      {/* Top-Left Corner Botanical Accessory (Image 1 Style) */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-85">
        <CornerBotanicalBranch className="w-24 h-24" />
      </div>

      {/* Header Tag */}
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8C8275] mb-8 relative z-10">
        Х Ү Н Д Э Т Г Э Н &nbsp; У Р Ь С А Н
      </p>

      {/* Honor Family List */}
      <div className="w-full max-w-sm space-y-6 relative z-10">
        {familyMembers.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#8C8275] uppercase">
              {item.role}
            </span>
            <span className="font-wedding-serif italic text-3xl sm:text-4xl text-[#8C6D37] font-normal my-1">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Phone Numbers Section (Image 1 Bottom Style) */}
      <div className="mt-8 pt-6 border-t border-[#C5A059]/30 w-full max-w-xs flex flex-col items-center relative z-10">
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.35em] text-[#8C8275] uppercase mb-3">
          У Т А С Н Ы &nbsp; Д У Г А А Р
        </p>

        {/* Pill Buttons for Phone Numbers */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {phoneNumbers.map((phone, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="px-4 py-1.5 rounded-full border border-[#D9CEBE] bg-[#FDFBF8] text-xs font-medium text-[#2C261F] hover:border-[#8C6D37] hover:text-[#8C6D37] transition shadow-2xs"
              >
                {phone}
              </a>
              {idx < phoneNumbers.length - 1 && (
                <span className="text-[#8C6D37] font-bold text-xs">&bull;</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Moon Wreath Emblem */}
      <div className="mt-8 relative z-10">
        <BotanicalMoonWreath className="w-16 h-16 opacity-85" />
      </div>
    </section>
  );
}
