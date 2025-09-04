// // import Countdown from "../components/Countdown";
// import HeroSection from "../components/HeroSection";

// function FrontPage() {
//   return (
//     <div className="relative h-screen bg-black text-gold flex flex-col items-center overflow-hidden">
//       {/* Inset golden frame */}
//       <div className="pointer-events-none absolute inset-4 border-[3px] border-yellow-500"></div>

//       {/* Subtle vertical gradient wash */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>

//       {/* Soft bottom vignette */}
//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Home Button */}
//       <div className="absolute bottom-24 left-24 z-40">
//         <a
//           href="/home"
//           className="bg-yellow-500 text-black font-extrabold text-xl md:text-2xl tracking-[0.35em] px-10 py-4 rounded-full shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:bg-yellow-400 transition-colors"
//         >
//           HOME
//         </a>
//       </div>
//     </div>
//   );
// }

// export default FrontPage;


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

      {/*Logo in Top-Left */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-50">
        <img
          src="/logo.png" //Make sure your logo is in public/logo.png
          alt="Logo"
          className="h-10 w-auto sm:h-14 md:h-16 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
        />
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-8">
        <HeroSection />
      </div>

      {/* Home Button */}
      <div className="absolute bottom-10 sm:bottom-14 md:bottom-20 left-1/2 md:left-8 transform md:transform-none -translate-x-1/2 md:translate-x-0 z-40">
        <a
          href="/home"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-cinzel font-extrabold text-lg sm:text-xl md:text-2xl tracking-[0.35em] mx-20 px-10 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
        >
          HOME
        </a>
      </div>
    </div>
  );
}

export default FrontPage;
