"use client";

import { InvitationSide } from "./SideSwitcher";
import { OliveBranchDivider } from "./FloralDecor";

interface VenueLocationProps {
  activeSide?: InvitationSide;
}

export function VenueLocation({ activeSide = "husband" }: VenueLocationProps) {
  const isHusbandSide = activeSide === "husband" || activeSide === "groom";

  const locationData = isHusbandSide
    ? {
        main: "Х О В Д &nbsp; А Й М А Г &nbsp; &bull; &nbsp; З Э Р Э Г &nbsp; С У М",
        sub: "Гүвээ баг, Гүвээ эхэн зоод болно",
        query: "Ховд аймаг Зэрэг сум Гүвээ баг",
      }
    : {
        main: "Х О В Д &nbsp; А Й М А Г &nbsp; &bull; &nbsp; Ж А Р Г А Л А Н Т &nbsp; С У М",
        sub: "Тахилт 16/8А тоотод",
        query: "Ховд аймаг Жаргалант сум Тахилт",
      };

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(locationData.query)}`;

  return (
    <section className="w-full px-4 sm:px-6 py-8 bg-[#FAF7F2] flex flex-col items-center text-center">
      {/* Header: "Хаяг" in Italic Serif (Image 1 Style) */}
      <h3 className="font-wedding-serif italic text-3xl sm:text-4xl text-[#8C6D37] font-normal mb-3">
        Хаяг
      </h3>

      {/* Main Location Header */}
      <p
        className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#2C261F] uppercase mb-1 max-w-sm"
        dangerouslySetInnerHTML={{ __html: locationData.main }}
      />

      {/* Sub Location Line */}
      <p className="font-wedding-serif italic text-sm text-[#786F66] mb-4">
        {locationData.sub}
      </p>

      {/* Botanical Branch Ornament above Map Button */}
      <OliveBranchDivider className="w-48 h-6 mb-5" />

      {/* Dark Map Button (Image 1 Style - No Get Number Button) */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1F1C18] hover:bg-black text-white py-3.5 px-8 rounded-none text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
      >
        <span>📍</span> ГАЗРЫН ЗУРАГ
      </a>
    </section>
  );
}
