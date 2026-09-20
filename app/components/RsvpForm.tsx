"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "declined">("attending");
  const [guestCount, setGuestCount] = useState("1");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C5A059", "#D4AF37", "#FFFFFF", "#F4E8D0"],
        });
      } catch {
        // Fallback gracefully
      }
    }, 600);
  };

  return (
    <section className="w-full px-6 py-8 bg-[#FAF8F5] flex flex-col items-center">
      <h3 className="font-wedding-serif text-2xl sm:text-3xl font-semibold text-[#2C2825] mb-2 text-center">
        Ирэх эсэхээ мэдэгдэх
      </h3>

      <p className="text-xs text-[#786F66] text-center max-w-xs mb-6">
        Хуримын ёслолд оролцох боломжтой эсэхээ доорх формоор дамжуулан мэдэгдэнэ үү.
      </p>

      {submitted ? (
        /* Success State */
        <div className="w-full max-w-sm bg-[#FFFFFF] border border-[#E8DFD5] rounded-2xl p-6 text-center flex flex-col items-center animate-fade-in shadow-sm">
          <h4 className="font-wedding-serif text-xl font-bold text-[#2C2825] mb-1">
            Баярлалаа, {name}!
          </h4>
          <p className="text-xs text-[#524B43] mb-4">
            Таны хариу амжилттай бүртгэгдлээ. Бид тантай хуримын өдөр уулзахдаа баяртай байх болно!
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-[#C5A059] underline hover:text-[#A37F38]"
          >
            Өөр дахин бөглөх
          </button>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          {/* Guest Name */}
          <div>
            <label className="block text-xs font-semibold text-[#3D352E] mb-1">
              Таны нэр <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Жишээ: А.Болд"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD5] bg-[#FFFFFF] text-xs font-medium text-[#2C2825] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-[#3D352E] mb-1">
              Утасны дугаар <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Жишээ: 99112233"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD5] bg-[#FFFFFF] text-xs font-medium text-[#2C2825] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition"
            />
          </div>

          {/* Attendance Choice */}
          <div>
            <label className="block text-xs font-semibold text-[#3D352E] mb-1.5">
              Ирэх эсэх <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAttendance("attending")}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                  attendance === "attending"
                    ? "bg-[#C5A059] text-white border-[#C5A059] shadow-sm"
                    : "bg-[#FFFFFF] text-[#786F66] border-[#E8DFD5]"
                }`}
              >
                Тийм ээ, очино
              </button>
              <button
                type="button"
                onClick={() => setAttendance("declined")}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                  attendance === "declined"
                    ? "bg-[#8C7A6B] text-white border-[#8C7A6B] shadow-sm"
                    : "bg-[#FFFFFF] text-[#786F66] border-[#E8DFD5]"
                }`}
              >
                Очих боломжгүй
              </button>
            </div>
          </div>

          {/* Guest Count */}
          {attendance === "attending" && (
            <div>
              <label className="block text-xs font-semibold text-[#3D352E] mb-1">
                Хэдэн хүний бүрэлдэхүүнтэй ирэх вэ?
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD5] bg-[#FFFFFF] text-xs font-medium text-[#2C2825] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition"
              >
                <option value="1">1 хүн (Гараараа)</option>
                <option value="2">2 хүн (Хосоороо)</option>
                <option value="3">3 хүн (Гэр бүлээрээ)</option>
                <option value="4">4+ хүн</option>
              </select>
            </div>
          )}

          {/* Wish Message */}
          <div>
            <label className="block text-xs font-semibold text-[#3D352E] mb-1">
              Ерөөлийн үг / Сэтгэгдэл
            </label>
            <textarea
              rows={3}
              placeholder="Хосууддаа зориулах ерөөлийн үгээ үлдээнэ үү..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD5] bg-[#FFFFFF] text-xs font-medium text-[#2C2825] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 transition resize-none"
            />
          </div>

          {/* Clean Submit Button without icon */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#C5A059] hover:bg-[#A37F38] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center transition-all shadow-sm active:scale-98"
          >
            {isSubmitting ? "Бүртгэж байна..." : "Илгээх"}
          </button>
        </form>
      )}
    </section>
  );
}
