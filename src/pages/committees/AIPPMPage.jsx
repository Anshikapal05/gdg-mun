function AIPPMPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          AIPPM
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Evaluating the Agniveer scheme with special emphasis on creating a
            balance between national security and the welfare of youth.{" "}
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Ask an Agniveer what stays longer — the pride of serving the nation
            for four years, or the unanswered question of ‘what next?’ The
            Agniveer scheme, often spoken of as a revolutionary reform to
            India’s military recruitment, promises a younger, stronger army. But
            behind the bold slogans and patriotic ardor lies a looming question
            that is often overlooked: Is this scheme trading long-term security
            and youth welfare for a short-term round of applause and a couple of
            feel-good headlines? Ask the thousands of Agniveers who sacrificed
            their youth to get into the military just to be sent back after 4
            years of service without a pension, without a job and most
            importantly without a path forward. This AIPPM is not just a debate
            over a scheme; it is a decision that will shape the helpless lives
            of people who risked everything to serve their country. Let us
            create thought-provoking conversation and ask ourselves: Can a
            nation really prosper if those who were once ready to lay down their
            lives for the country are forgotten?
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c1.png"
            alt="AIPPM"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default AIPPMPage;
