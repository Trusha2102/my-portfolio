import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = (): Petal => ({
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 14 + 8,
      delay: Math.random() * 12,
      duration: Math.random() * 8 + 15,
      opacity: 0.8,
    });

    // Initial petals
    const initialPetals = Array.from({ length: 25 }, createPetal);
    setPetals(initialPetals);

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals((prev) => {
        // Keep max 50 petals
        if (prev.length > 50) {
          return [...prev.slice(-40), createPetal()];
        }
        return [...prev, createPetal()];
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0" 
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "transparent",
      }}
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: `${petal.left}%`,
            top: "-50px",
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            {/* Petal shape */}
            <path
              d="M50 0C55 25 75 45 100 50C75 55 55 75 50 100C45 75 25 55 0 50C25 45 45 25 50 0Z"
              fill="#FFB6C1"
              opacity="0.9"
            />
            {/* Darker center */}
            <path
              d="M50 0C53 20 70 40 100 50C70 50 53 70 50 100C47 70 30 50 0 50C30 40 47 20 50 0Z"
              fill="#FF91A4"
              opacity="0.5"
            />
            {/* Shimmer */}
            <circle cx="50" cy="35" r="10" fill="#FFD1DC" opacity="0.6" />
          </svg>
        </div>
      ))}
    </div>
  );
}
