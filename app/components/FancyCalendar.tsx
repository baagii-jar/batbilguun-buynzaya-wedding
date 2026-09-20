"use client";

import { Heart } from "lucide-react";

export function FancyCalendar() {
  const daysOfWeek = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];
  
  // October 1, 2026 is Thursday => 3 empty slots (Monday, Tuesday, Wednesday)
  const emptySlots = [null, null, null];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const WEDDING_DAY = 4; // Sunday, Oct 4

  return (
    <section className="w-full px-6 py-8 bg-[#FAF8F5] flex flex-col items-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] mb-2">
        Т Э М Д Э Г Л Э Л Т &nbsp; Ө Д Ө Р
      </p>

      <h3 className="font-wedding-serif text-2xl font-semibold text-[#2C2825] mb-6">
        2026 оны 10-р сар
      </h3>

      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 w-full max-w-xs text-center text-xs font-semibold text-[#786F66] pb-2 border-b border-[#E8DFD5]/60 mb-2">
        {daysOfWeek.map((day, idx) => (
          <span key={idx} className={idx >= 5 ? "text-[#C5A059]" : ""}>
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
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white font-bold flex flex-col items-center justify-center shadow-md scale-110">
                  <span className="text-xs leading-none">{day}</span>
                  <Heart className="w-2.5 h-2.5 fill-white text-white mt-0.5" />
                </div>
              ) : (
                <span
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-[#3D352E] ${
                    [4, 11, 18, 25].includes(day)
                      ? "font-semibold text-[#8B6B2B]"
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
      <p className="text-xs font-medium text-[#786F66] mt-5">
        Хуримын товлосон өдөр:{" "}
        <strong className="text-[#C5A059] font-semibold">
          2026.10.04 Ням гараг (Ховд аймаг)
        </strong>
      </p>
    </section>
  );
}
