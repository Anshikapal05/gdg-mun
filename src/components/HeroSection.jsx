import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  const titleCtrls = useAnimation();
  const statueCtrls = useAnimation();
  const subtitleCtrls = useAnimation();

  useEffect(() => {
    titleCtrls.start({ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } });

    const t = setTimeout(() => {
      statueCtrls.start({ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } });
      titleCtrls.start({ opacity: 1, transition: { duration: 0.6 } });
      subtitleCtrls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut", delay: 0.4 },
      });
    }, 1000);

    return () => clearTimeout(t);
  }, [titleCtrls, statueCtrls, subtitleCtrls]);

  return (
    <section className="relative h-full w-full flex flex-col items-center pt-8">
      {/* TITLE (GDGPS / MUN) */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={titleCtrls}
        className="z-20 flex flex-col items-center text-center select-none pointer-events-none"
      >
        <h1 className="h-serif text-gold text-4xl md:text-5xl">GDGPS</h1>
        <h2 className="h-serif text-gold text-[3.5rem] md:text-[7rem] leading-[0.85]">MUN</h2>
      </motion.div>

      {/* Statue Image */}
      <motion.img
        src="/statue.png"
        alt="Statue"
        initial={{ opacity: 0, y: 40 }}
        animate={statueCtrls}
        className="-mt-24 md:-mt-32 h-[26rem] md:h-[38rem] object-contain brightness-110 contrast-105 z-30"
        style={{ pointerEvents: "none" }}
      />

      {/* Subtitle (fixed to bottom like original) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={subtitleCtrls}
        className="absolute bottom-6 w-full flex items-center justify-center z-40"
      >
        <div className="w-[88%] md:w-3/4 flex items-center gap-3">
        <div className="flex-1 border-t border-yellow-500"></div>
<div className="flex flex-col items-center">
  <div className="text-gray-300 text-[10px] md:text-xs tracking-[0.35em]">
    BATTAILLE D’ESPRIT
  </div>
  <div className="h-serif text-white text-sm md:text-lg tracking-[0.5em] mt-1">
    THE NINTH EDITION
  </div>
</div>
<div className="flex-1 border-t border-yellow-500"></div>

          
        </div>
      </motion.div>
    </section>
  );
}
