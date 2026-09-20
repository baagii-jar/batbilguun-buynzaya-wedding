"use client";

import { InvitationSide } from "./SideSwitcher";

interface HonorSectionProps {
  activeSide?: InvitationSide;
}

export function HonorSection({ activeSide = "husband" }: HonorSectionProps) {
  const isHusbandOnly = activeSide === "husband" || activeSide === "groom";
  const isWifeOnly = activeSide === "wife" || activeSide === "bride";

  const husbandSideData = [
    {
      role: "Эцэг эх",
      name: "Ц.Цогбадрах & Т.Тунгалаг",
    },
    {
      role: "Нөхөр",
      name: "Ц.Батбилгүүн",
    },
    {
      role: "Хүү",
      name: "Б.Игүүн",
    },
  ];

  const wifeSideData = [
    {
      role: "Эцэг эх",
      name: "Д.Ням-Очир & Б.Цэцэгсүрэн",
    },
    {
      role: "Эхнэр",
      name: "Н.Буянзаяа",
    },
    {
      role: "Хүү",
      name: "Б.Игүүн",
    },
  ];

  const allFamilyData = [
    {
      role: "Хүүгийн эцэг эх",
      name: "Ц.Цогбадрах & Т.Тунгалаг",
    },
    {
      role: "Охины эцэг эх",
      name: "Д.Ням-Очир & Б.Цэцэгсүрэн",
    },
    {
      role: "Нөхөр",
      name: "Ц.Батбилгүүн",
    },
    {
      role: "Эхнэр",
      name: "Н.Буянзаяа",
    },
    {
      role: "Хүү",
      name: "Б.Игүүн",
    },
  ];

  const familyData = isHusbandOnly
    ? husbandSideData
    : isWifeOnly
    ? wifeSideData
    : allFamilyData;

  return (
    <section className="w-full px-6 py-8 bg-[#FAF8F5] flex flex-col items-center text-center">
      {/* Small Header Tag */}
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] mb-3">
        Х Ү Н Д Э Т Г Э С Э Н
      </p>

      {/* Decorative hairline */}
      <div className="w-10 h-[1px] bg-[#C5A059]/40 mb-6" />

      {/* Borderless Clean Family Lines */}
      <div className="w-full max-w-sm space-y-5">
        {familyData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-0.5"
          >
            <span className="text-xs font-semibold text-[#A37F38] uppercase tracking-wider">
              {item.role}
            </span>
            <span className="font-wedding-serif text-lg font-bold text-[#2C2825]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
