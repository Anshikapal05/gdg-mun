import HeroSection from "../components/HeroSection";

function FrontPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-gold flex flex-col items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black animate-gradientMove"></div>

      {/* Golden Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent)]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-yellow-500/20 rounded-full"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 8}s ease-in-out infinite`,
            }}
          ></span>
        ))}
      </div>

      {/* Inset Golden Frame with Glow */}
      <div className="pointer-events-none absolute inset-4 sm:inset-6 md:inset-10 border-[2px] sm:border-[3px] border-yellow-500 rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]"></div>

      {/* Soft Gradient Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>

      {/* Logo */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-10 z-50">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-14 w-auto sm:h-20 md:h-22 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
        />
      </div>

      {/* Thread (hidden on small screens) */}
      <img
        src="/thread.png"
        alt="Golden Threads"
        className="hidden md:block absolute left-0 top-0 h-[40vh] sm:h-[60vh] md:h-full w-auto object-contain sm:object-cover z-10 brightness-110 contrast-110"
        style={{
          filter:
            "drop-shadow(0 0 4px #D4AF37) drop-shadow(0 0 8px rgba(212,175,55,0.5))",
          pointerEvents: "none",
        }}
      />

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-8">
        <HeroSection />
      </div>

      {/* Home Button */}
      <div className="relative md:absolute md:bottom-16 bottom-8 z-40">
        <a
          href="/home"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-cinzel font-extrabold text-base sm:text-xl md:text-2xl tracking-[0.35em] px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 block text-center"
        >
          HOME
        </a>
      </div>
    </div>
  );
}

export default FrontPage;
