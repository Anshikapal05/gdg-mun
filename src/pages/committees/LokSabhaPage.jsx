import React from "react";

function LokSabhaPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          Lok Sabha
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Addressing the political assassinations, communal Riots and
            center-state power dispute in the state of West Bengal with special
            emphasis on illegal immigration.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            India’s democracy has long worn its resilience as a crown but even
            the mightiest foundations tremble when confronted with the weight of
            internal unrest. In the eastern corridors of our nation, a burning
            crisis has erupted, where identity battles citizenship, and politics
            bleeds into violence. West Bengal stands at crossroads, streets
            echoing with protests, institutions drowning in mistrust and its
            communities divided along the weakest lines. Beneath every vote,
            lies fear and behind every government action lies a question about
            allegiance. Illegal immigration is no longer a border issue, it has
            become an epicenter of community rift, population concerns and
            electoral uncertainty. At the same time, a worrying rise in
            political assassinations threatens the very heart of democratic
            expression. As the session convenes, the stakes are clear- will
            order be restored through dialogue or will silence continue to push
            division? This session doesn’t just demand policy, it demands
            courage. For in this chamber, the future of West Bengal, and the
            very integrity of India's federalism itself, is uncertain. Will the
            house of people stand by the values of the Indian constitution or
            will political gain silence the promises of the preamble?
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c1.png"
            alt="Lok Sabha"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default LokSabhaPage;
