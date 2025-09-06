import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  const titleCtrls = useAnimation();
  const statueCtrls = useAnimation();
  const subtitleCtrls = useAnimation();
  const threadCtrls = useAnimation();

  useEffect(() => {
    titleCtrls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    });

    const t = setTimeout(() => {
      // Thread slides in first
      threadCtrls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });

      // Statue comes over it
      statueCtrls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
      });

      titleCtrls.start({ opacity: 1, transition: { duration: 0.6 } });
      subtitleCtrls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut", delay: 0.4 },
      });
    }, 800);

    return () => clearTimeout(t);
  }, [titleCtrls, statueCtrls, subtitleCtrls, threadCtrls]);

  return (
    <section className="relative h-full w-full grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden">
      {/* TOP-RIGHT text (visible only on mobile at top) */}
      

      {/* IMAGE SECTION */}
      <div className="relative flex justify-center md:justify-start items-end md:items-end pt-8 md:pt-0">
        <motion.img
          src="/statue2.png"
          alt="Statue"
          initial={{ opacity: 0, x: -200 }}
          animate={statueCtrls}
          className="h-[50vh] sm:h-[60vh] md:h-[90vh] object-contain brightness-110 contrast-105 z-30 scale-100 md:scale-110"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* TEXT SECTION */}
      <div className="flex flex-col items-center md:items-end justify-start md:justify-center px-4 md:px-18 lg:px-25 pb-8 md:pb-0">
  <motion.div
    initial={{ opacity: 0, y: -18 }}
    animate={titleCtrls}
    className="text-center md:text-right select-none pointer-events-none"
  >
    <h1 className="h-serif text-gold text-5xl sm:text-xl md:text-7xl px-4 md:px-8 lg:px-10">
      GDGPS
    </h1>
    <h2 className="h-serif text-gold text-[4rem] sm:text-[6rem] md:text-[9.5rem] leading-[0.9]">
      MUN
    </h2>
    <div className="flex items-center justify-center md:justify-end mt-4 font-bold h-serif tracking-[0.35em] ">
      <span className="text-gold text-4xl sm:text-5xl md:text-[6rem] leading-none px-4 md:px-10 lg:px-12">
        2025
      </span>
    </div>
  </motion.div>
  {/* Bataille text for small screens (below GDGPS MUN 2025) */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={subtitleCtrls}
  className="block md:hidden mt-3 text-center"
>
  <div className="text-gray-300 text-[10px] tracking-[0.35em]">
    BATAILLE D’ESPIRIT
  </div>
  <div className="h-serif text-white text-sm tracking-[0.5em] mt-1">
    THE NINTH EDITION
  </div>
</motion.div>


  {/* Bataille text (visible only on md and up) */}
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={subtitleCtrls}
    className="hidden md:block mt-6 text-center md:text-right"
  >
    <div className="text-gray-300 text-xs md:text-sm tracking-[0.35em] px-4 md:px-10 lg:px-15">
      BATAILLE D’ESPIRIT
    </div>
    <div className="h-serif text-white text-base md:text-lg tracking-[0.5em] mt-1 px-4 md:px-10 lg:px-15">
      THE NINTH EDITION
    </div>
  </motion.div>
</div>

    </section>
  );
}
