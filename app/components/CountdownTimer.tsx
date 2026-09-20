"use client";

import { useEffect, useState } from "react";

// Khovd Timezone (+07:00) October 4, 2026
const TARGET_DATE = new Date("2026-10-04T12:00:00+07:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full px-6 py-6 bg-[#FAF8F5]">
        <div className="h-16 bg-[#F4EFE9]/50 rounded-xl animate-pulse" />
      </div>
    );
  }

  const timerItems = [
    { label: "өдөр", value: timeLeft.days },
    { label: "цаг", value: timeLeft.hours },
    { label: "минут", value: timeLeft.minutes },
    { label: "секунд", value: timeLeft.seconds },
  ];

  return (
    <section className="w-full px-6 py-6 bg-[#FAF8F5] flex flex-col items-center">
      {/* Small Header Label */}
      <p className="font-wedding-serif text-[#C5A059] italic text-base sm:text-lg mb-3">
        Хурим хүртэл:
      </p>

      {/* Borderless Floating Countdown Grid */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
        {timerItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="font-wedding-serif text-3xl sm:text-4xl font-semibold text-[#2C2825] leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-normal text-[#786F66] mt-1 tracking-wider lowercase">
                {item.label}
              </span>
            </div>

            {/* Separator colon */}
            {index < timerItems.length - 1 && (
              <span className="font-wedding-serif text-xl text-[#C5A059]/70 ml-3 sm:ml-4 -mt-3">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
