import { useEffect, useState } from "react";

export function ButterflyButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsFlying(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setIsFlying(false);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`butterfly-btn fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group transition-transform duration-300 hover:scale-110 ${
        isFlying ? "butterfly-flying" : ""
      }`}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Left Wing */}
        <path
          className="wing-left origin-right transition-all duration-300"
          d="M50 50C30 30 5 35 5 50C5 65 30 80 50 50Z"
          fill="url(#wingGradientLeft)"
          stroke="#E57399"
          strokeWidth="1"
        />
        <path
          className="wing-left origin-right"
          d="M50 50C35 35 15 38 15 50C15 62 35 72 50 50Z"
          fill="url(#wingInnerLeft)"
        />
        
        {/* Right Wing */}
        <path
          className="wing-right origin-left transition-all duration-300"
          d="M50 50C70 30 95 35 95 50C95 65 70 80 50 50Z"
          fill="url(#wingGradientRight)"
          stroke="#E57399"
          strokeWidth="1"
        />
        <path
          className="wing-right origin-left"
          d="M50 50C65 35 85 38 85 50C85 62 65 72 50 50Z"
          fill="url(#wingInnerRight)"
        />

        {/* Upper Wings */}
        <path
          className="wing-left origin-bottom-right"
          d="M50 50C25 25 10 5 25 20C35 30 50 50 50 50Z"
          fill="url(#wingGradientLeft)"
          stroke="#E57399"
          strokeWidth="0.5"
        />
        <path
          className="wing-right origin-bottom-left"
          d="M50 50C75 25 90 5 75 20C65 30 50 50 50 50Z"
          fill="url(#wingGradientRight)"
          stroke="#E57399"
          strokeWidth="0.5"
        />

        {/* Body */}
        <ellipse cx="50" cy="50" rx="3" ry="15" fill="#8B4060" />
        <circle cx="50" cy="35" r="4" fill="#8B4060" />
        
        {/* Antennae */}
        <path d="M48 31C46 25 42 20 40 18" stroke="#8B4060" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M52 31C54 25 58 20 60 18" stroke="#8B4060" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="40" cy="17" r="2" fill="#FFB6C1" />
        <circle cx="60" cy="17" r="2" fill="#FFB6C1" />

        {/* Wing patterns */}
        <circle cx="25" cy="50" r="6" fill="#FFD1DC" opacity="0.8" />
        <circle cx="75" cy="50" r="6" fill="#FFD1DC" opacity="0.8" />
        <circle cx="30" cy="42" r="3" fill="#FFF0F3" opacity="0.9" />
        <circle cx="70" cy="42" r="3" fill="#FFF0F3" opacity="0.9" />

        {/* Arrow indicator */}
        <path
          d="M50 85L45 92L50 89L55 92L50 85Z"
          fill="#E57399"
          className="opacity-70"
        />

        <defs>
          <linearGradient id="wingGradientLeft" x1="5" y1="35" x2="50" y2="65">
            <stop offset="0%" stopColor="#FFB6C1" />
            <stop offset="50%" stopColor="#FF91A4" />
            <stop offset="100%" stopColor="#E57399" />
          </linearGradient>
          <linearGradient id="wingGradientRight" x1="95" y1="35" x2="50" y2="65">
            <stop offset="0%" stopColor="#FFB6C1" />
            <stop offset="50%" stopColor="#FF91A4" />
            <stop offset="100%" stopColor="#E57399" />
          </linearGradient>
          <radialGradient id="wingInnerLeft" cx="30%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE4E9" />
            <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="wingInnerRight" cx="70%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE4E9" />
            <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>
    </button>
  );
}
