"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { InvitationSide } from "./SideSwitcher";

interface InvitationTextProps {
  activeSide?: InvitationSide;
}

export function InvitationText({ activeSide = "husband" }: InvitationTextProps) {
  const isHusbandSide = activeSide === "husband" || activeSide === "groom";

  return (
    <section className="w-full px-6 py-6 bg-[#FAF8F5] flex flex-col items-center text-center">
      {/* Golden Heart Icon */}
      <div className="w-10 h-10 rounded-full bg-[#F4E8D0]/60 flex items-center justify-center text-[#C5A059] mb-4 shadow-sm">
        <Heart className="w-5 h-5 fill-[#C5A059] animate-heart-pulse" />
      </div>

      {/* Title */}
      <h3 className="font-wedding-serif text-2xl sm:text-3xl font-semibold text-[#2C2825] mb-4">
        Эрхэм хүндэт зочид та бүхнээ
      </h3>

      {/* Side-Aware Main Invitation Text */}
      <p className="text-sm sm:text-base text-[#524B43] leading-relaxed font-normal max-w-sm mb-6">
        {isHusbandSide ? (
          <>
            Ц.Цогбадрах, Т.Тунгалаг бид манай гэр бүлд тохиож буй баярт мөч болох{" "}
            <strong className="text-[#2C2825] font-semibold">
              хүү Ц.Батбилгүүн
            </strong>
            ,{" "}
            <strong className="text-[#2C2825] font-semibold">
              охин Н.Буянзаяа
            </strong>{" "}
            нарын хуримын ёслолын хуримд аав ээж, ах дүү, амраг садан, найз нөхөд
            та бүхнийгээ хүрэлцэн ирэхийг хичэнгүйлэн урьж байна.
          </>
        ) : (
          <>
            Д.Ням-Очир, Б.Цэцэгсүрэн бид манай гэр бүлд тохиож буй баярт мөч болох{" "}
            <strong className="text-[#2C2825] font-semibold">
              охин Н.Буянзаяа
            </strong>
            ,{" "}
            <strong className="text-[#2C2825] font-semibold">
              хүү Ц.Батбилгүүн
            </strong>{" "}
            нарын хуримын ёслолын хуримд аав ээж, ах дүү, амраг садан, найз нөхөд
            та бүхнийгээ хүрэлцэн ирэхийг хичэнгүйлэн урьж байна.
          </>
        )}
      </p>

      {/* Uncropped Photo Display with Straight (Not Rounded) Border */}
      <div className="w-full relative border border-[#E8DFD5] mt-2 mb-4 bg-[#FAF8F5]">
        <Image
          src="/images/sA8p6QrA.jpg"
          alt="Ц.Батбилгүүн & Н.Буянзаяа дурсамжит зураг"
          width={800}
          height={600}
          sizes="(max-width: 480px) 100vw, 460px"
          className="w-full h-auto object-contain rounded-none"
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <p className="text-xs font-wedding-serif text-white italic tracking-wider">
            &ldquo;Хамтдаа туулах амьдралын минь шинэ эхлэл&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
