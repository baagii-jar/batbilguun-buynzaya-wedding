"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="w-full bg-[#FAF8F5] pb-10 pt-4 px-0 flex flex-col items-center text-center overflow-hidden">
      {/* Generously Sized Blended Footer Photo */}
      <div className="relative w-full aspect-[4/5] max-h-[500px] mb-4 bg-[#FAF8F5]">
        <Image
          src="/images/fw5OYa9i.jpg"
          alt="Ц.Батбилгүүн & Н.Буянзаяа хуримын зураг"
          fill
          priority
          sizes="(max-width: 480px) 100vw, 460px"
          className="object-cover object-top mask-gradient-hero"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4 right-4 text-center z-10">
          <p className="font-wedding-serif text-xl font-bold text-[#2C2825]">
            Ц.Батбилгүүн &amp; Н.Буянзаяа
          </p>
          <p className="text-xs text-[#A37F38] font-semibold tracking-wider mt-0.5">
            2026.10.04 &bull; Ховд аймаг, Жаргалант сум
          </p>
        </div>
      </div>

      {/* Content Below Blended Photo */}
      <div className="px-6 flex flex-col items-center">
        {/* Heart Accent */}
        <div className="w-8 h-8 rounded-full bg-[#F4E8D0] flex items-center justify-center text-[#C5A059] mb-3">
          <Heart className="w-4 h-4 fill-[#C5A059]" />
        </div>

        {/* Closing Sentence */}
        <p className="font-wedding-serif text-xl sm:text-2xl font-semibold text-[#2C2825] mb-2">
          Хүрэлцэн ирсэн танд баярлалаа
        </p>
        <p className="text-xs text-[#786F66] max-w-xs leading-relaxed mb-4">
          Урьсан бидний ураг батжиж, уригдсан таны өлмий бат оршиг!
        </p>

        {/* Copyright Note */}
        <p className="text-[10px] text-[#A39A90] mt-4 tracking-widest uppercase">
          &copy; 2026 Buynzaya &amp; Batbilguun Wedding
        </p>
      </div>
    </footer>
  );
}
