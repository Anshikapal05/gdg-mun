import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/addressals", label: "Addressals" },
    { to: "/committees", label: "Committees" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-yellow-500/15 via-black/60 to-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center relative">
        {/*  Logo + Text */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png" //  Make sure your logo is in public/logo.png
            alt="GDGPS Logo"
            className="h-8 w-auto sm:h-10 md:h-12 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
          />
          <span className="font-serif text-gold text-xl md:text-3xl tracking-wide">
            GDGPS MUN
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 md:gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-500 text-black rounded-full font-semibold px-4 py-2 shadow-[0_8px_24px_rgba(212,175,55,0.25)] transition-all duration-300"
                  : "rounded-full font-semibold px-4 py-2 ring-1 ring-yellow-500/60 shadow-[0_8px_24px_rgba(212,175,55,0.25)] bg-black/70 text-gold transition-all duration-300 hover:bg-yellow-500 hover:!text-black hover:ring-0 hover:shadow-[0_8px_24px_rgba(212,175,55,0.25)]"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gold text-2xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-center gap-4 py-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} // close on click
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-500 text-black rounded-full font-semibold px-6 py-2 w-3/4 text-center shadow-[0_8px_24px_rgba(212,175,55,0.25)]"
                  : "rounded-full font-semibold px-6 py-2 w-3/4 text-center ring-1 ring-yellow-500/60 bg-black/70 text-gold hover:bg-yellow-500 hover:text-black hover:ring-0 transition-all duration-300"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
