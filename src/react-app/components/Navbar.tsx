import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "top-4 px-4"
          : "top-0 px-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? "max-w-4xl bg-white border-3 border-[#2A1B28] rounded-full shadow-[4px_4px_0px_0px_#2A1B28] px-6 py-2"
            : "max-w-6xl bg-transparent px-4 sm:px-6 lg:px-8 py-4"
        }`}
      >
        <div className="flex justify-between items-center h-12">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-2xl font-black text-[#2A1B28] hover:text-primary transition-colors flex items-center gap-1.5"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span>Trusha</span>
            <span className="text-pink-400">✿</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-1.5 text-sm font-bold text-[#2A1B28] hover:bg-pink-soft hover:border-2 hover:border-[#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] border-2 border-transparent rounded-full transition-all"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#2A1B28] hover:text-primary transition-colors focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-white border-3 border-[#2A1B28] rounded-2xl shadow-[4px_4px_0px_0px_#2A1B28] overflow-hidden p-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="w-full py-3 text-center text-sm font-bold text-[#2A1B28] hover:bg-pink-soft rounded-xl transition-all"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
