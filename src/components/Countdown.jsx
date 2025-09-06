import { useEffect, useState } from "react";

export default function Countdown({ className = "" }) {
  const targetDate = new Date("2025-10-10T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const id = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(id);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(id);
  }, [targetDate]);

  const gold = "text-[#D4AF37]";

  return (
    <section
      className={`flex flex-col items-center justify-center text-center gap-6 sm:gap-8 py-12 sm:py-16 px-4 sm:px-6 ${className}`}
    >
      {/* Date & Location */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-xs sm:text-base tracking-widest text-gray-300">
        <span className="flex items-center gap-2">
          <svg width="16" height="16" className={`${gold} sm:w-[18px] sm:h-[18px]`} viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v3H3V5a1 1 0 0 1 1-1h3V2Zm14 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h18ZM7 12H5v2h2v-2Zm4 0H9v2h2v-2Zm4 0h-2v2h2v-2Z"
            />
          </svg>
          10th & 11th OCTOBER
        </span>
        <span className="hidden sm:block h-[1px] w-8 bg-[#6b5b2a]/50" />
        <span className="flex items-center gap-2">
          <svg width="16" height="16" className={`${gold} sm:w-[18px] sm:h-[18px]`} viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
            />
          </svg>
          GD GOENKA PUBLIC SCHOOL,LUCKNOW
        </span>
      </div>

      {/* Tagline - NORMAL FONT */}
      <p
  className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-transparent tracking-wide animate-pulse leading-snug px-2 bg-clip-text"
  style={{
    backgroundImage: "linear-gradient(90deg, #FFD700, #fff3b0, #FFD700)",
    backgroundSize: "200% auto",
    animation: "shine 3s linear infinite",
    textShadow: "0 0 15px rgba(212,175,55,0.8)",
  }}
>
  Countdown to Glory: {timeLeft.days} Days!
</p>


      {/* Timer */}
      <div className="flex justify-center gap-4 sm:gap-10 md:gap-14 mt-4 flex-wrap">
        {[
          { value: timeLeft.days, label: "DAYS" },
          { value: timeLeft.hours, label: "HOURS" },
          { value: timeLeft.minutes, label: "MINUTES" },
          { value: timeLeft.seconds, label: "SECONDS" },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p
              className={`${gold} font-extrabold text-3xl sm:text-5xl md:text-7xl leading-none animate-pulse`}
              style={{
                textShadow: "0 0 20px rgba(212,175,55,0.8), 0 0 40px rgba(212,175,55,0.4)",
              }}
            >
              {String(item.value).padStart(2, "0")}
            </p>
            <p
              className={`${gold} text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] mt-2 uppercase`}
              style={{ textShadow: "0 0 10px rgba(212,175,55,0.6)" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
        `}
      </style>
    </section>
  );
}
