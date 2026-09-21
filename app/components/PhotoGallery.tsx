"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WreathCircle } from "./FloralDecor";

const galleryImages = [
  { src: "/images/GCWd_BDR.jpg", alt: "Дурсамж 1" },
  { src: "/images/qIw8uJu2.jpg", alt: "Дурсамж 2" },
  { src: "/images/Xob11a8w.jpg", alt: "Дурсамж 3" },
  { src: "/images/ydt-3nJc.jpg", alt: "Дурсамж 4" },
  { src: "/images/sA8p6QrA.jpg", alt: "Дурсамж 5" },
  { src: "/images/diETcvjb.jpg", alt: "Дурсамж 6" },
];

export function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Automatic Sliding Interval
  useEffect(() => {
    if (isPaused || selectedIndex !== null) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, selectedIndex]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNextModal = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const showPrevModal = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full px-6 py-6 bg-[#FAF8F5] flex flex-col items-center overflow-hidden">
      {/* Background Rotating Wreath Floral Accessory */}
      <WreathCircle className="absolute -top-6 -right-6 w-32 h-32 opacity-60" />

      {/* Single Clean Title without icon or duplicate eyebrow tag */}
      <div className="w-full flex items-center justify-between max-w-sm mb-4">
        <h3 className="font-wedding-serif text-2xl font-semibold text-[#2C2825]">
          Бидний дурсамж
        </h3>

        {/* Sliding Controls */}
        <div className="flex items-center gap-1.5 z-10">
          <button
            type="button"
            onClick={scrollLeftBtn}
            className="p-1.5 rounded-full bg-[#FFFFFF] border border-[#E8DFD5] text-[#2C2825] hover:bg-[#F4EFE9] transition-colors shadow-sm"
            aria-label="Өмнөх зураг"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={scrollRightBtn}
            className="p-1.5 rounded-full bg-[#FFFFFF] border border-[#E8DFD5] text-[#2C2825] hover:bg-[#F4EFE9] transition-colors shadow-sm"
            aria-label="Дараах зураг"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Auto-sliding Horizontal Container */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        className="w-full max-w-sm flex items-center gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth py-1 scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {galleryImages.map((img, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="flex-shrink-0 w-[calc(50%-6px)] aspect-[3/4] relative rounded-xl overflow-hidden bg-[#FAF8F5] cursor-pointer snap-start group hover:opacity-95 transition-all"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="220px"
              className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={showPrevModal}
            className="absolute left-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-lg aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={showNextModal}
            className="absolute right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
