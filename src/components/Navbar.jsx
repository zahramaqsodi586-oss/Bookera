import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive ? "text-[#A36B45]" : "text-[#5C5148] hover:text-[#A36B45]"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-[#F5F0E8] px-6 md:px-16 py-5 border-b border-[#DDD3C5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <BookOpen size={28} className="text-[#A36B45]" />

          <span className="text-2xl font-serif font-bold tracking-widest text-[#29231F]">
            BOOKORA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
          <NavLink to="/" end className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/books" className={navStyle}>
            Books
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>
        </div>

        {/* Right Text */}
        <div className="hidden md:block text-right">
          <p className="text-[10px] tracking-[3px] uppercase text-[#A36B45]">
            Read • Imagine • Explore
          </p>

          <p className="font-serif italic text-sm text-[#29231F] mt-1">
            Stories worth keeping
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#29231F] p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-5 pt-5 border-t border-[#DDD3C5]">
          <div className="flex flex-col gap-5 text-sm font-semibold">
            <NavLink to="/" end className={navStyle} onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/books" className={navStyle} onClick={closeMenu}>
              Books
            </NavLink>

            <NavLink to="/about" className={navStyle} onClick={closeMenu}>
              About
            </NavLink>
          </div>

          <p className="text-[10px] tracking-[3px] uppercase text-[#A36B45] mt-7">
            Read • Imagine • Explore
          </p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
