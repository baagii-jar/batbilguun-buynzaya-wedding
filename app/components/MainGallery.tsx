"use client";

import Image from "next/image";
import { WreathCircle } from "./FloralDecor";

const mainImages = [
  { src: "/images/QpUbVMfa.jpg", alt: "Үндсэн зураг 1" },
  { src: "/images/aAiJG4GJ.jpg", alt: "Үндсэн зураг 2" },
  { src: "/images/qIw8uJu2.jpg", alt: "Үндсэн зураг 3" },
  { src: "/images/u-5-GFJs.jpg", alt: "Үндсэн зураг 4" },
];

export function MainGallery() {
  return (
    <section className="relative w-full px-4 py-8 bg-[#FAF7F2] flex flex-col items-center overflow-hidden">
      {/* Delicate Top Decoration */}
      <div className="flex justify-center mb-6 opacity-80">
        <WreathCircle className="w-16 h-16" />
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4">
        {mainImages.map((img, index) => (
          <div key={index} className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-sm">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 480px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
