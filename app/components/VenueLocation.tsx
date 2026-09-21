"use client";

import { InvitationSide } from "./SideSwitcher";
import { OliveBranchDivider } from "./FloralDecor";

interface VenueLocationProps {
  activeSide?: InvitationSide;
}

export function VenueLocation({ activeSide = "husband" }: VenueLocationProps) {
  const isHusbandSide = activeSide === "husband";

  const locationData = isHusbandSide
    ? {
      main: "Х О В Д &nbsp; А Й М А Г &nbsp; &bull; &nbsp; З Э Р Э Г &nbsp; С У М",
      sub: "Гүвээ баг, Гүвээ эхэн зоод болно",
      url: "https://www.google.com/maps/place/%D0%97%D1%8D%D1%80%D1%8D%D0%B3+%D1%81%D1%83%D0%BC,+%D0%A5%D0%BE%D0%B2%D0%B4+%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3/@47.1002177,92.8280229,14.83z/data=!4m15!1m8!3m7!1s0x5d5abd67087c423b:0x8f0a25f8dcaa311f!2sAltanteel,+Khovd!3b1!8m2!3d47.1082553!4d92.8463437!16s%2Fg%2F1ywqft_pc!3m5!1s0x5d5abd0075ddb709:0x6bc3de88185b2f3b!8m2!3d47.1089358!4d92.8384574!16s%2Fg%2F11wbfmwhp5?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
    }
    : {
      main: "Х О В Д &nbsp; А Й М А Г &nbsp; &bull; &nbsp; Ж А Р Г А Л А Н Т &nbsp; С У М",
      sub: "Тахилт 16/8А тоотод",
      url: "https://www.google.com/maps/place/Khovd/@47.9787819,91.5993684,13z/data=!3m1!4b1!4m6!3m5!1s0x5d4e61187aed7fa7:0x977200d2dd6b5e50!8m2!3d48.003783!4d91.6413683!16zL20vMDV4X3Bw?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
    };

  return (
    <section className="w-full px-4 sm:px-6 py-8 bg-[#FAF7F2] flex flex-col items-center text-center">
      {/* Header: "Хаяг" in Italic Serif (Image 1 Style) */}
      <h3 className="font-wedding-serif italic text-3xl sm:text-4xl text-[#8C6D37] font-normal mb-3">
        Хаяг
      </h3>

      {/* Main Location Header */}
      <p
        className="text-[8px] sm:text-[10px] font-semibold tracking-[0.3em] text-[#2C261F] uppercase mb-1 max-w-sm whitespace-nowrap"
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
        href={locationData.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1F1C18] hover:bg-black text-white py-3.5 px-8 rounded-none text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
      >
        ГАЗРЫН ЗУРАГ
      </a>
    </section>
  );
}
