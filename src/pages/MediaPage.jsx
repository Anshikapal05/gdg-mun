export default function MediaPage() {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl">
          {/* Heading */}
          <section className="mx-auto max-w-6xl text-center mb-10">
            <h2 className="h-serif text-gold text-6xl uppercase tracking-wide">Media</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </section>
  
          {/* Main Message */}
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            See you after the <span className="text-[#FFD700]">conference!</span>
          </p>
  
          {/* Subtext */}
          <p className="text-gray-400 mb-10">
            Stay tuned for official photos, videos, and highlights.  
            We can’t wait to share the moments that made GDGPS MUN extraordinary!
          </p>
  
          {/* Call to Action */}
          <a
            href="/home"
            className="inline-block rounded-full bg-[#FFD700] text-black font-semibold px-8 py-3 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.6)]"
          >
            Back to Home
          </a>
  
          {/* Decorative Line */}
          <div className="mt-10 h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
        </div>
      </main>
    );
  }
  