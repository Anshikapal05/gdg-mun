import { useState } from "react";
import { motion } from "framer-motion";

function CommitteeCard({ title, overview = "", agenda, image }) {
  const [expanded, setExpanded] = useState(false);

  const shortOverview =
    overview.length > 400 ? overview.substring(0, 400) + "..." : overview;

  const imageSrc = (() => {
    if (!image) {
      return `/images/${title.toLowerCase().replace(/\s+/g, "_")}.png`;
    }
    return image.startsWith("/images/") ? image : `/images/${image}`;
  })();

  return (
    <motion.div
      className="bg-black border border-yellow-500/40 rounded-2xl p-4 sm:p-6 md:p-8 
                 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 md:gap-8 
                 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Side - Agenda + Overview */}
      <div>
        <h3 className="text-gold text-2xl sm:text-3xl md:text-4xl font-serif mb-4 md:mb-6">
          {title}
        </h3>

        {/* Agenda */}
        <h4 className="text-yellow-400 text-sm sm:text-base font-semibold mb-2 md:mb-3 uppercase tracking-wide">
          Agenda
        </h4>
        <p className="text-gray-100 text-base sm:text-lg font-serif leading-snug mb-4 md:mb-6">
          {agenda}
        </p>

        {/* Overview */}
        <h4 className="text-yellow-400 text-sm sm:text-base font-semibold mb-2 md:mb-3 uppercase tracking-wide">
          Committee Overview
        </h4>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          {expanded ? overview : shortOverview}
        </p>

        {overview && overview.length > 400 && (
          <button
            type="button"
            className="mt-2 sm:mt-3 text-yellow-400 hover:text-yellow-300 
                       text-sm sm:text-base font-medium transition hover:cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less ▲" : "Read More ▼"}
          </button>
        )}
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center items-center">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="rounded-xl shadow-lg 
                     w-[120px] sm:w-[150px] md:w-[200px] lg:w-[240px] 
                     h-auto object-contain"
        />
      </div>
    </motion.div>
  );
}

export default CommitteeCard;
