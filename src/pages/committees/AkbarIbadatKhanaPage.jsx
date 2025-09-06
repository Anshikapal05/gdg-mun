import React from "react";

function AkbarIbadatKhanPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          AKBAR’S IBADATKHANA
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            The creation of Din-i-Ilahi.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            The Mughal Empire was being destroyed, not by a foreign intruder but
            by their people, divided among religions. Akbar witnessed a
            troubling surge in sectarian tensions: Muslim theologians condemned
            those with differing beliefs. Hindu leaders grew wary of imperial
            interference, and bitter feuds began to spread, district by
            district. In this turmoil, Akbar took a radical step: “A monarch
            should be free to choose the best from every faith,” he proclaimed
            as he built not another fort, but a religious sanctuary —the Ibadat
            Khana, the House of Worship. Here, faiths meet not to conquer but to
            unite. This is not just an ordinary council but a battlefield of
            belief. The result? Din-I-Ilahi: The Religion of God. A spiritual
            fellowship. Not a new religion, but a shared moral philosophy. No
            scripture. No rituals. Just truth, love, reason, and tolerance. But
            not everyone welcomed this experiment. People began to talk.
            Orthodoxy was threatened, spirituality was questioned, and belief
            had begun to fail. Could an empire survive with one emperor and many
            gods? Could unity thrive without uniformity? And now, as the court
            prepares to reconvene at Fatehpur Sikri, the biggest question
            remained unanswered —Is Din-I-Ilahi a path to peace… or a challenge
            to power?
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c8.png"
            alt="AkbarIbadat"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default AkbarIbadatKhanPage;
