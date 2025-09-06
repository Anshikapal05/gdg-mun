import { useState } from "react";
import { Link } from "react-router-dom"
import Countdown from "../components/Countdown";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/15 via-transparent to-black/70 pointer-events-none"></div>
        <div className="mx-auto max-w-5xl px-6 py-16 text-center max-sm:py-10">
          <p className="text-gold tracking-[0.35em] text-sm max-sm:text-xs">
            BATAILLE D’ESPIRIT
          </p>
          <h2 className="h-serif text-gold text-5xl md:text-7xl mt-2 max-sm:text-3xl">
            GDGPS MUN
          </h2>
            {/* Countdown */}
      <Countdown />
      {/*  Updated Buttons */}
      <div className="mt-8 flex justify-center gap-4 max-sm:flex-col max-sm:gap-3 max-sm:mt-6">
            {/* Register Now → Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-yellow-400 text-black font-semibold font-cinzel px-6 py-3 
             transition-all duration-500 ease-in-out
             hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] hover:scale-101 hover:cursor-pointer
             max-sm:w-full max-sm:text-sm max-sm:px-4 max-sm:py-2"
            >
              Register Now
            </button>

            {/* Guidelines */}
            <a
              href="/guidelines"
              className="rounded-full border-2 border-yellow-300 text-yellow-300 font-semibold px-6 py-3 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,215,0,0.8)]
              max-sm:w-full max-sm:text-sm max-sm:px-4 max-sm:py-2"
            >
              Guidelines
            </a>
          </div>
          {/* Bigger 2025 Image with Golden Glow */}
          <img
            src="/2025.png"
            alt="2025"
            className="mx-auto mt-6 h-56 md:h-72 max-sm:h-55 max-sm:mt-10 object-contain filter brightness-110"
            style={{
              filter:
                "drop-shadow(0 0 15px rgba(212,175,55,0.8)) saturate(1.3)",
            }}
          />

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto max-sm:text-sm max-sm:mt-4">
            A conclave of debate, diplomacy and innovation.
            <br /> Join delegates across the globe for our ninth edition.
          </p>

        
        </div>
      </section>


      {/* Sections grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-6 max-sm:py-10">
  {[
    {
      title: "Committees",
      description: "Explore dynamic agendas and topical issues curated by our EB.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#D4AF37] max-sm:w-6 max-sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      link: "/committees",
    },
    {
      title: "Registration",
      description: "Secure your spot and be part of an unforgettable experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#D4AF37] max-sm:w-6 max-sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A3.001 3.001 0 018 15h8a3.001 3.001 0 012.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      action: "modal", // opens modal
    },
    {
      title: "Contact",
      description: "Reach the Secretariat for queries and partnerships.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#D4AF37] max-sm:w-6 max-sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.22 3.64a1 1 0 01-.27 1.05l-2.12 2.12a16.001 16.001 0 007.07 7.07l2.12-2.12a1 1 0 011.05-.27l3.64 1.22a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
        </svg>
      ),
      link: "/contact",
    },
  ].map((item, idx) => {
    const CardContent = (
      <div
        className="border hover:cursor-pointer border-[#D4AF37]/50 rounded-xl p-6 bg-black/40 flex items-center gap-4 hover:bg-black/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition duration-300
        max-sm:flex-col max-sm:text-center max-sm:p-4"
      >
        <div>{item.icon}</div>
        <div>
          <h3 className="h-serif text-[#D4AF37] text-xl font-semibold max-sm:text-lg">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-300 text-sm max-sm:text-xs">
            {item.description}
          </p>
        </div>
      </div>
    );

    // ✅ If it's modal
    if (item.action === "modal") {
      return (
        <button
          key={idx}
          onClick={() => setIsModalOpen(true)}
          className="text-left w-full"
        >
          {CardContent}
        </button>
      );
    }

    // ✅ Otherwise, normal Link
    return (
      <Link to={item.link} key={idx}>
        {CardContent}
      </Link>
    );
  })}
</section>



      {/*  Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
          <div className="bg-black border border-yellow-500/40 rounded-2xl p-8 max-w-sm w-full text-center shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-scale-up
      sm:max-w-sm sm:p-8 
      max-sm:p-4 max-sm:rounded-xl">
            <h2 className="text-gold text-2xl font-bold mb-6 max-sm:text-lg">
              Choose Registration Type
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScBS_78_9bER1Vs0Uocsx8hCUIaSxYZWeVzNJ1qWQC8Dl1V2A/viewform?pli=1&fbclid=PAVERDUAMfsgRleHRuA2FlbQIxMAABpzjVZUgrr8lAC4C_VK5vqBO7Q-ocpLeKrPF-WuJQjA7hbqWsHaer0fW7GwYW_aem_qbfEy7cWxMDaTpWo7TpUyw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-500 text-black font-semibold px-6 py-3 hover:bg-yellow-400 transition-all max-sm:px-4 max-sm:py-2 max-sm:text-sm"
              >
                Individual Delegate Forms
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfs45zms_vYDDCFrM4uTqJEg5S8UshvZh51p_AH9iTBCL4j7Q/viewform?fbclid=PAVERDUAMfsilleHRuA2FlbQIxMAABp-q8pbZnSz1VKbPXYQJM1XKkmMs9uJJvkHwmrEXGup-xUIaCJ4GOva6IhJAa_aem_nvgtvcLVQN9tErSopXP5fg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-500 text-black font-semibold px-6 py-3 hover:bg-yellow-400 transition-all max-sm:px-4 max-sm:py-2 max-sm:text-sm"
              >
                School Registration Forms
              </a>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 text-yellow-400 hover:text-yellow-600 transition-colors hover:cursor-pointer max-sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default HomePage;
