import React from "react";

function UNHRCPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          UNHRC
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
        <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Addressing the human rights violations arising from the conscription
            of children by terrorist organizations, with special emphasis on
            psychological rehabilitation in Central & South East Asia.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Across Central and South-East Asia, terrorist organisations have
            weaponised one of humanity’s greatest vulnerabilities—its children.
            Forced recruitment robs them of safety, education, and innocence,
            leaving deep psychological wounds that endure long after the
            violence ends. The issue extends beyond the battlefield, demanding
            urgent attention to post-conflict rehabilitation, trauma recovery,
            and reintegration into society. Cultural sensitivities, resource
            limitations, and the stigma surrounding former child combatants make
            the challenge even more complex. Addressing these human rights
            violations requires coordinated action that blends legal
            protections, humanitarian aid, and mental health expertise. In this
            committee, you will have the platform to dissect these realities,
            confront the moral and political dilemmas, and shape actionable,
            compassionate strategies that may one day restore stolen
            childhoods. Your ideas could become their lifeline.
          </p>

          
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c2.png"
            alt="UNHRC"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default UNHRCPage;