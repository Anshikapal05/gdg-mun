import React from "react";

function DumbartonOaksPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          DUMBARTON OAKS
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Drafting proposals for the establishment of a General International
            Committee
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Committee Assembles on: August 21, 1944 Welcome to 1944. With the
            severe impact of World War II, humanity lies on the brink of
            collapse, the world anxiously holds its breath, and history awaits
            to be written. The then-established international organisation known
            as the League of Nations ended up crumbling miserably. From the
            ruins of hopelessness, a tiny glimmer of optimism emerges as four
            great powers — China, the Soviet Union, the United Kingdom, and the
            United States — assemble at a conference in Washington, D.C.The four
            secretly assemble with the single aim of forging a blueprint for a
            new successful international organisation to ensure peaceful
            coexistence among nations, justice, and the secure future of
            mankind.The conference navigates itself through questions like how
            such a large institution would function, who would head it, and
            whether all the nations would truly collaborate with one another.
            Can trust be rebuilt after the betrayals of war? Can sovereignty
            survive in a world that demands global unity?
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c4.png"
            alt="DO"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default DumbartonOaksPage;
