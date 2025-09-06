import React from "react";

function HSRAPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          HSRA
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Envisaging a pan-India strategy for a revolution for an independent
            socialist Hindustan & devising the immediate roadmap to function,
            after the loss of leadership post Kakori Kaand Trials and increasing
            police scrutiny after the killing of John P.Saunders.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            The blows struck at me today will be the last nails in the coffin of
            British rule in India.” The date is 30 December 1927; death
            penalties have been decreed, and the Hindustan Socialist Republican
            Association (HSRA) is in a state of upheaval. Our plans are now
            compromised, and trust amongst our ranks has crumbled. Nevertheless,
            we rekindled our resolve amidst the ashes of Kakori. Consequently,
            what should be our subsequent measures? How might we reorganize the
            HSRA with a significant portion of our leadership lost? How can we
            continue to operate under constant surveillance? This committee is
            not concerned with debate or diplomatic formalities; it aims to
            initiate genuine change. You will confront the formidable challenges
            faced by revolutionaries—survival, planning, loyalty, betrayal, and
            purpose. If this revolutionary fire is to be ignited within you, if
            you possess the capacity to shape the future of this committee and
            to honor the sacrifices of martyrs, then step forward. Join the
            HSRA.
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c3.png"
            alt="HSRA"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default HSRAPage;
