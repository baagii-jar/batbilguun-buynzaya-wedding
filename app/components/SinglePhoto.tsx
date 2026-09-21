"use client";

import Image from "next/image";

interface SinglePhotoProps {
  src: string;
  alt: string;
}

export function SinglePhoto({ src, alt }: SinglePhotoProps) {
  return (
    <section className="relative w-full px-4 py-4 bg-[#FAF7F2] flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-sm flex justify-center">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={1200}
          sizes="(max-width: 480px) 100vw, 480px"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
    </section>
  );
}
