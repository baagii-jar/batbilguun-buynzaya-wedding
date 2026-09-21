"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { CornerBotanicalBranch } from "./FloralDecor";
import { supabase } from "../../lib/supabaseClient";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<string>("solo");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    try {
      // 1. Save to Supabase
      const supabasePromise = supabase.from("rsvps").insert([
        { name: name.trim(), attendance },
      ]);

      // 2. Save to Google Sheets if Webhook URL is set
      const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
      const googleSheetPromise = sheetUrl
        ? fetch(sheetUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name.trim(), attendance }),
        })
        : Promise.resolve();

      await Promise.allSettled([supabasePromise, googleSheetPromise]);
    } catch (err) {
      console.error("RSVP submit catch error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C5A059", "#D4AF37", "#859C84", "#FAF8F5"],
        });
      } catch {
        // Fallback gracefully
      }
    }
  };

  const options = [
    { id: "solo", label: "Оролцоно" },
    { id: "couple", label: "Хань ижилтэйгээ очно" },
    { id: "declined", label: "Харамсалтай нь очиж чадахгүй" },
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 py-10 bg-[#FAF7F2] flex flex-col items-center text-center">
      {/* Form Section Header */}
      <h3 className="font-wedding-serif tracking-[0.4em] text-sm sm:text-base font-normal text-[#8C6D37] uppercase mb-1 whitespace-nowrap">
        Б А Т А Л Г А А Ж У У Л А Х
      </h3>

      <p className="text-[11px] sm:text-xs tracking-[0.15em] text-[#595147] uppercase font-medium max-w-xs mb-8">
        ХУРИМД ОРОЛЦОХОО БАТАЛГААЖУУЛНА УУ.
      </p>

      {submitted ? (
        /* Success State */
        <div className="w-full max-w-sm bg-[#FDFBF8] border border-[#C5A059]/60 p-6 text-center flex flex-col items-center animate-fade-in shadow-sm">
          <h4 className="font-wedding-serif text-xl font-semibold text-[#8C6D37] mb-2">
            Баярлалаа, {name}!
          </h4>
          <p className="text-xs text-[#524B43] leading-relaxed mb-4">
            Таны хариу амжилттай бүртгэгдлээ. Бид тантай хуримын баярын өдөр уулзахдаа баяртай байх болно!
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-[#8C6D37] underline hover:text-[#2C261F] transition"
          >
            Өөр дахин бөглөх
          </button>
        </div>
      ) : (
        /* Form without phone number field */
        <form onSubmit={handleSubmit} className="w-full max-w-sm text-left space-y-6">
          {/* Guest Name Field */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-[#8C6D37] uppercase mb-2">
              ТАНЫ НЭР
            </label>
            <input
              type="text"
              required
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-[#FAF8F4] border border-[#D9CEBE] text-xs font-medium text-[#2C261F] focus:outline-none focus:border-[#8C6D37] rounded-none transition"
            />
            <p className="font-wedding-serif italic text-xs text-[#786F66] mt-1.5 leading-tight">
              (Хань ижилтэйгээ ирвэл хоёулангийнхаа нэрийг бичнэ үү)
            </p>
          </div>

          {/* Attendance Radio Options */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-[#8C6D37] uppercase mb-2.5">
              ТАНЫ ХАРИУ
            </label>
            <div className="space-y-2">
              {options.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAttendance(opt.id)}
                  className={`w-full px-4 py-3.5 bg-[#FAF8F4] border transition-all cursor-pointer flex items-center gap-3 ${attendance === opt.id
                      ? "border-[#8C6D37] bg-[#F7F2E8] shadow-2xs"
                      : "border-[#D9CEBE] hover:border-[#B5A693]"
                    }`}
                >
                  {/* Custom Radio Circle */}
                  <div className="w-4 h-4 rounded-full border border-[#8C6D37] flex items-center justify-center shrink-0">
                    {attendance === opt.id && (
                      <div className="w-2 h-2 rounded-full bg-[#8C6D37]" />
                    )}
                  </div>
                  <span className="font-wedding-serif text-sm text-[#2C261F]">
                    {opt.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Rectangular Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1F1C18] hover:bg-black text-white py-3.5 px-6 rounded-none text-xs font-bold uppercase tracking-[0.3em] transition-all shadow-md active:scale-98 cursor-pointer"
          >
            {isSubmitting ? "БҮРТГЭЖ БАЙНА..." : "И Л Г Э Э Х"}
          </button>
        </form>
      )}

      {/* Bottom Botanical Accessory Accent */}
      <div className="w-full max-w-sm flex justify-start mt-8 pointer-events-none opacity-80">
        <CornerBotanicalBranch className="w-24 h-24 transform -rotate-45" />
      </div>
    </section>
  );
}
