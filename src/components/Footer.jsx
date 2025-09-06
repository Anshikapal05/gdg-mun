import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-yellow-500/70 bg-black text-gray-200 mt-20 py-8 px-6 relative">
      {/* Glowing Top Border */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
        
        {/* Left - Logo + Brand */}
        <div className="flex items-center justify-center md:justify-start gap-3">
          <img
            src="/logo.png" // Make sure logo.png is in public folder
            alt="GDGPS Logo"
            className="h-10 w-auto sm:h-14 object-contain"
          />
          <div>
            <p className="h-serif text-[#FFD700] text-2xl font-bold tracking-wide">
              GDGPS MUN
            </p>
            <p className="mt-1 text-sm text-gray-400">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Center - Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-center gap-4 sm:gap-6 text-sm font-semibold">
          {["About", "Media", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 hover:underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Instagram Handle */}
        <div className="flex items-center justify-center md:justify-end gap-2 text-[#FFD700] font-semibold hover:text-yellow-300 transition-colors mt-4 md:mt-0">
          <FaInstagram className="text-xl" />
          <a
            href="https://www.instagram.com/gdgpsmunlko?utm_source=ig_web_button_share_sheet&igsh=MTJla3RrbzA5aHVsbw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @gdgpsmunlko
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
