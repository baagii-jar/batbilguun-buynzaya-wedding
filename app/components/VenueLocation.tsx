"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function VenueLocation() {
  const [copied, setCopied] = useState(false);

  const venueAddress = "Ховд аймаг, Жаргалант сум, Тахилт 16/8А тоотод";
  const googleMapsUrl =
    "https://maps.google.com/?q=" +
    encodeURIComponent("Ховд аймаг Жаргалант сум Тахилт 16/8А");

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("94199009, 99439493");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full px-6 py-8 bg-[#FAF8F5] flex flex-col items-center text-center">
      {/* Single Clean Main Title without duplicate eyebrow tag */}
      <h3 className="font-wedding-serif text-2xl sm:text-3xl font-semibold text-[#2C2825] mb-2">
        Хуримын баярын хаяг
      </h3>

      <p className="text-xs sm:text-sm text-[#786F66] max-w-xs mb-3 leading-relaxed">
        {venueAddress}
      </p>

      <p className="text-xs font-semibold text-[#C5A059] mb-6">
        Утас: 9419-9009 ; 9943-9493
      </p>

      {/* Clean Action Buttons without extra icons */}
      <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-xs">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#C5A059] hover:bg-[#A37F38] text-white py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center transition-all shadow-sm active:scale-98"
        >
          Газрын зураг дээр харах
        </a>

        <button
          type="button"
          onClick={handleCopyPhone}
          className="bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#2C2825] border border-[#E8DFD5] py-3 px-4 rounded-full text-xs font-semibold flex items-center justify-center transition-all"
        >
          {copied ? (
            <span className="text-emerald-700 font-bold">Дугаар хуулбарлагдлаа</span>
          ) : (
            <span>Утасны дугаар авах</span>
          )}
        </button>
      </div>
    </section>
  );
}
