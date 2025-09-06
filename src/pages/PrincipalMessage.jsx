function PrincipalMessage() {
    return (
      <main className="min-h-screen bg-black text-white pt-24 px-6">
        {/* Page Heading */}
        <section className="mx-auto max-w-6xl text-center mb-16">
          <h2 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          Addressals
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </section>
  
        {/* Principal's Message Section */}
        <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          {/* Heading */}
          <div className="md:col-span-2">
            <h2 className="h-serif text-gold text-xl sm:text-2xl md:text-3xl uppercase">
              Principal’s Message
            </h2>
            <div className="w-12 sm:w-16 h-[3px] bg-yellow-500 mt-2 sm:mt-3 rounded-full"></div>
          </div>
          {/* Message Box */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-yellow-500/40 bg-black/40 p-4 sm:p-6 md:p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With profound pride and pleasure, I extend my warm welcome to you for the Ninth Edition of the GD Goenka Model United Nations on the dates <span className="text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 italic text-yellow-300/90">10th and 11th October, 2025. </span>
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                To uphold our commitment to continuous growth, these young minds will be guided and empowered to evolve into knowledgeable and exceptional individuals. The students have been provided with a great opportunity to develop into global leaders during this two-day conference, where they can demonstrate their diplomatic and debating abilities. Our sole objective is to develop these imaginative brains for the benefit of humanity.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                At GD Goenka, we acknowledge that these critical thinkers are what propel constructive change on a global scale. GDGPS MUN 2025 provides a platform for delegates to engage in discussion on pressing global issues and come up with innovative solutions aimed at strengthening international relations and solving global problems as our future world leaders.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                The world is in grave need of a perspective driven by practicality, values, and strategic thinking. The weight is on the shoulders of the delegates to empower a world ignited with inclusivity, peace, compassion, and dignity.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4">
                With the impact of the past conferences, I can proudly say that this conference will become a catalyst for empowering the emerging leaders. I would like to extend my heartfelt gratitude to our respected Chairman, Mr. Sarvesh Goel, for providing this platform to shape tomorrow’s changemakers with his unwavering support, and I extend my commendation to the entire team of the MUN for their relentless commitment to upholding the excellence that defines GD Goenka.
              </p>
              <div className="mt-5 sm:mt-6 text-right">
                <p className="text-gray-200 font-semibold">Warm regards,</p>
                <p className="text-gold h-serif text-lg sm:text-xl">Dr. Prerna Mitra</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default PrincipalMessage;
  