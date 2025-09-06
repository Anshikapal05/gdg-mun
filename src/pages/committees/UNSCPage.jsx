import React from "react";

function UNSCPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          UNSC
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Addressing the situation concerning the Democratic Republic of the
            Congo.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            In the words of Jean-Roger Kaseki, Congolese activist- “The world
            talks about Congo's minerals, but never about our blood." For over a
            decade, the United Nations Organization Stabilization Mission in the
            DRC has advocated for peace and order. Despite all these efforts,
            humanitarian conditions in Congo are deteriorating. Internal
            Displacement has further exacerbated the crisis, causing disease
            outbreaks and gender-based violence. Violent demonstrations continue
            across various locations of the Democratic Republic of Congo,
            resulting in adverse security implications.The Secretary General's
            latest report on the current status of Democratic Republic of Congo
            documents a rise in armed conflict primarily by the M23 rebel group.
            The report reviews the implementation of MONUSCO mandate and
            highlights growing humanitarian concerns in the eastern provinces of
            the DRC. The United Nations Security Council must assess the current
            situation in DRC and mitigate the effects of the crisis.
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c4.png"
            alt="UNSC"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default UNSCPage;
