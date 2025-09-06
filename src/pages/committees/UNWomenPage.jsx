import React from "react";

function UNWomenPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          UN Women (UNW)
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Addressing the global decline in funding for women's empowerment
            institutions and reinforcing international investment in gender
            equity, in alignment with the framework of the Compromiso de
            Sevilla.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            UN Women leads the United Nations in its pursuit of gender equality
            and accelerated women’s empowerment. It acts as a global catalyst
            for change. It’s vital role in advancing women’s rights and
            combating gender-based violence reaffirms its continued relevance
            and necessity. Its unwavering efforts to uphold women’s rights
            aren’t just a part of a global agenda, they are personal battles for
            millions. Around the world, financial support for institutions that
            empower women is shrinking, slowly eroding the foundation of
            progress. But through advocacy and action, that tide can be turned.
            By reaffirming and advancing the Sevilla Commitment made at the 4th
            International Conference on Financing for Development, doors can be
            opened to the funding that fuels change. The chance to transform
            commitments into resources and resources into results lies here.
            This session is not just a conversation. The world is listening, and
            it is waiting. We must push for inclusive financing strategies and
            demand gender responsive budgeting that reflects the real lives and
            needs of women across every nation. Only then can we begin to fill
            the funding gaps that hold back progress. Aligning with the Sevilla
            Commitment is more than a policy step, it is a promise. A promise
            that injustice will not thrive through neglect. A promise that we
            will fight not only for gender equity, but for a world where women
            no longer have to fight alone.
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c5.png"
            alt="UN Women (UNW)"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default UNWomenPage;
