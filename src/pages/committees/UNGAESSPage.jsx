import React from "react";

function UNGAESSPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          UNGA; ESS
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Humanitarian intervention and protection mandates involving armed
            non-State groups in conflict zones.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            When justice turns into a privilege, humanity is never more
            vulnerable." What if you were unable to cross a border and your life
            depended on it? What if the politics of those who professed to be
            your protectors blocked the only path to safety, not the enemy you
            knew? Across all conflict zones around the world, armed non-state
            groups rule by force, not by mandate.They decide who eats, who
            leaves and who is left behind. Government falters. Aid convoys are
            forced to retreat. Entire town vanishes, first from map then from
            memory.These people are not anonymous victims. They are the doctors
            operating by candlelight because the hospital generator ran out of
            fuel. They are the father digging through rubble with bare hands,
            searching for his child. They are the girl who hides her schoolbooks
            because education is forbidden.This is a test of our global
            conscience, not just a humanitarian crisis. We must consider whether
            we can still claim to be for peace when the world decides to
            intervene selectively and when protection turns into a political
            issue.
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c7.png"
            alt="UNGA; ESS"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default UNGAESSPage;
