function SecretaryMessage() {
    return (
      <main className="min-h-screen bg-black text-white pt-24 px-6">
        {/* Page Heading */}
        <section className="mx-auto max-w-6xl text-center mb-16">
          <h2 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
            Addressals
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </section>
  
        {/* Secretary-General's Message Section */}
        <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          {/* Heading */}
          <div className="md:col-span-2 order-1">
            <h2 className="h-serif text-gold text-xl sm:text-2xl md:text-3xl uppercase">
              Secretary-General’s Message
            </h2>
            <div className="w-12 sm:w-16 h-[3px] bg-yellow-500 mt-2 sm:mt-3 rounded-full"></div>
          </div>
          {/* Message Box */}
          <div className="md:col-span-3 order-2">
            <div className="rounded-2xl border border-yellow-500/40 bg-black/40 p-4 sm:p-6 md:p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Dear Delegates,
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 italic text-yellow-300/90">
                Civilisation does not move forward in a straight line — it advances through storms.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                History shows us that humanity’s greatest leaps have often come in the wake of its deepest crises. The fall of empires has cleared the way for new systems of governance. Economic collapses have forced innovation that has reshaped societies. From the ashes of destruction, the world has again and again found the will to rebuild stronger, wiser, and more united.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                In our own time, the battlefield is not always marked by trenches and artillery, but by shifting alliances, digital warfare, humanitarian struggles, and the silent erosion of freedoms. The challenges before us — climate displacement, contested sovereignties, and the tug-of-war between national interest and global responsibility — demand not only negotiation but foresight, empathy, and resilience.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                As your Secretary-General, I, Nilesh Mandhyan, welcome you to a conference where debate is not just an exercise, but a simulation of the very processes that shape our shared future. Here, you will be called upon to argue fiercely, listen deeply, and craft solutions that can withstand scrutiny from both history and humanity.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                This gathering is more than a meeting of minds — it is a proving ground for leadership. With carefully chosen agendas, a distinguished executive board, and participants from diverse backgrounds, the Ninth Edition of GD Goenka Public School Model United Nations, Lucknow promises a dialogue that is as intense as it is inspiring.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                The storm of ideas is about to break. We look forward to seeing who will emerge with the clarity to guide it.
              </p>
              <div className="mt-5 sm:mt-6 text-right">
                <p className="text-gray-200 font-semibold">Yours Sincerely,</p>
                <p className="text-gold h-serif text-lg sm:text-xl">Nilesh Mandhyan</p>
                <p className="text-gray-300 text-sm sm:text-base">Secretary-General</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default SecretaryMessage;
  