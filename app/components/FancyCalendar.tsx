"use client";

import { Heart } from "lucide-react";
import { VictorianCrownScroll } from "./FloralDecor";

export function FancyCalendar() {
  const daysOfWeek = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];
  
  // October 1, 2026 is Thursday => 3 empty slots (Monday, Tuesday, Wednesday)
  const emptySlots = [null, null, null];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const WEDDING_DAY = 4; // Sunday, Oct 4

  return (
    <section className="w-full px-4 sm:px-6 py-8 bg-[#FAF7F2] flex flex-col items-center text-center">
      <div className="w-full max-w-md bg-[#FDFBF8] border border-[#C5A059]/60 p-6 sm:p-8 rounded-sm shadow-sm flex flex-col items-center relative">
        <div className="absolute inset-2 border border-[#C5A059]/30 pointer-events-none" />

        <VictorianCrownScroll className="w-28 h-7 mb-2 text-[#C5A059]" />

        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#8C6D37] mb-1">
          Т Э М Д Э Г Л Э Л Т &nbsp; Ө Д Ө Р
        </p>

        <h3 className="font-wedding-serif text-2xl font-semibold text-[#2C261F] mb-6">
          2026 оны 10-р сар
        </h3>

        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 w-full max-w-xs text-center text-xs font-semibold text-[#8C8275] pb-2 border-b border-[#C5A059]/30 mb-2">
          {daysOfWeek.map((day, idx) => (
            <span key={idx} className={idx >= 5 ? "text-[#8C6D37]" : ""}>
              {day}
            </span>
          ))}
        </div>

        {/* Month grid */}
        <div className="grid grid-cols-7 gap-1 w-full max-w-xs text-center text-xs">
          {emptySlots.map((_, idx) => (
            <div key={`empty-${idx}`} className="h-9" />
          ))}

          {daysInMonth.map((day) => {
            const isWeddingDay = day === WEDDING_DAY;
            return (
              <div
                key={day}
                className="h-9 flex items-center justify-center relative"
              >
                {isWeddingDay ? (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6D37] text-white font-bold flex flex-col items-center justify-center shadow-md scale-110">
                    <span className="text-xs leading-none">{day}</span>
                    <Heart className="w-2.5 h-2.5 fill-white text-white mt-0.5" />
                  </div>
                ) : (
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-[#3D352E] ${
                      [4, 11, 18, 25].includes(day)
                        ? "font-semibold text-[#8C6D37]"
                        : ""
                    }`}
                  >
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlight Text */}
        <p className="text-xs font-medium text-[#786F66] mt-6 pt-4 border-t border-[#C5A059]/30 w-full max-w-xs">
          Хуримын товлосон өдөр:{" "}
          <strong className="text-[#8C6D37] font-semibold">
            2026.10.04 Ням гараг (Ховд аймаг)
          </strong>
        </p>
      </div>
    </section>
  );
}
