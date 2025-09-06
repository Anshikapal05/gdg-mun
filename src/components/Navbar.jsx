import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for desktop hover
  const [mobileDropdown, setMobileDropdown] = useState(null); // for mobile click

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileDropdown(null); // close dropdown when menu closes
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    {
      to: "/addressals",
      label: "Addressals",
      dropdown: [
        { to: "/addressals/principal", label: "Principal’s Message" },
        { to: "/addressals/secretary", label: "Secretary-General’s Message" },
      ],
    },
    {
      to: "/committees",
      label: "Committees",
      dropdown: [
        { to: "/committees/aippm", label: "AIPPM" },
        { to: "/committees/unhrc", label: "UNHRC" },
        { to: "/committees/hsra", label: "HSRA" },
        { to: "/committees/unsc", label: "UNSC" },
        { to: "/committees/unwomen", label: "UN Women" },
        { to: "/committees/lok-sabha", label: "Lok Sabha" },
        { to: "/committees/dumbarton-oaks", label: "Dumbarton Oaks" },
        { to: "/committees/jcc", label: "JCC" },
        {
          to: "/committees/akbars-ibadat-khana",
          label: "Akbar’s Ibadat Khana",
        },
        { to: "/committees/wto", label: "WTO; DSB" },
        { to: "/committees/unga-ess", label: "UNGA; ESS" },
        { to: "/committees/ipc", label: "International Press Corps" },
      ],
    },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-yellow-500/15 via-black/60 to-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="GDGPS Logo"
            className="h-8 w-auto sm:h-10 md:h-12 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
          />
          <span className="font-serif text-gold text-xl md:text-3xl tracking-wide">
            GDGPS MUN
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 md:gap-4">
          {navLinks.map(({ to, label, dropdown }) => (
            <div
              key={to}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-500 text-black rounded-full font-semibold px-4 py-2 shadow-[0_8px_24px_rgba(212,175,55,0.25)] transition-all duration-300"
                    : "rounded-full font-semibold px-4 py-2 ring-1 ring-yellow-500/60 shadow-[0_8px_24px_rgba(212,175,55,0.25)] bg-black/70 text-gold transition-all duration-300 hover:bg-yellow-500 hover:!text-black hover:ring-0 hover:shadow-[0_8px_24px_rgba(212,175,55,0.25)]"
                }
              >
                {label}
              </NavLink>

              {/* Dropdown for Desktop */}
              {dropdown && openDropdown === label && (
                <div className="absolute left-0 mt-2 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg p-2 flex flex-col w-56 z-50">
                  {dropdown.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className="text-gold px-3 py-2 rounded-md hover:bg-yellow-500 hover:!text-black transition-all duration-200"
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gold text-2xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

     {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-center gap-4 py-6">
    {navLinks.map(({ to, label, dropdown }) => (
      <div key={to} className="w-3/4 text-center">
        {dropdown ? (
          // For dropdown items like Addressals and Committees
          <>
            <button
              onClick={() =>
                setMobileDropdown(mobileDropdown === label ? null : label)
              }
              className="rounded-full font-semibold px-6 py-2 block w-full text-sm ring-1 ring-yellow-500/60 bg-black/70 text-gold hover:bg-yellow-500 hover:!text-black hover:ring-0 transition-all duration-300"
            >
              {label}{" "}
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </button>
            {mobileDropdown === label && (
              <div className="mt-2 flex flex-col gap-2 text-sm">
                {dropdown.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="text-gold px-4 py-1 rounded-md hover:bg-yellow-500 hover:!text-black transition-all duration-200"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </>
        ) : (
          // For normal items like Home, About, Contact
          <NavLink
            to={to}
            onClick={() => setIsOpen(false)}
            className="rounded-full font-semibold px-6 py-2 block w-full text-sm ring-1 ring-yellow-500/60 bg-black/70 text-gold hover:bg-yellow-500 hover:!text-black hover:ring-0 transition-all duration-300"
          >
            {label}
          </NavLink>
        )}
      </div>
    ))}
  </div>
)}

        
    </nav>
  );
}

export default Navbar;
