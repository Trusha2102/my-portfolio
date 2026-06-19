import React from "react";

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// 1. Twinkling Sparkle Doodle
export function SparkleDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`animate-pulse ${className}`}
      {...props}
    >
      <path d="M50 15 C50 35 35 50 15 50 C35 50 50 65 50 85 C50 65 65 50 85 50 C65 50 50 35 50 15 Z" />
    </svg>
  );
}

// 2. Cute Heart Doodle
export function HeartDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`animate-bounce ${className}`}
      style={{ animationDuration: "3s" }}
      {...props}
    >
      <path d="M50 35 C40 15 15 20 15 45 C15 70 45 85 50 88 C55 85 85 70 85 45 C85 20 60 15 50 35 Z" />
    </svg>
  );
}

// 3. Curly Arrow Doodle
export function ArrowDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M20 20 C40 25 70 20 75 45 C80 65 50 75 40 60 C35 52 45 42 60 45 L70 50" />
      <path d="M55 35 L70 50 L52 65" />
    </svg>
  );
}

// 4. Laptop Doodle
export function LaptopDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Screen */}
      <rect x="20" y="25" width="60" height="40" rx="4" />
      {/* Keyboard Base */}
      <path d="M10 72 L90 72 C90 72 85 82 80 82 L20 82 C15 82 10 72 10 72 Z" />
      {/* Trackpad */}
      <rect x="42" y="75" width="16" height="4" rx="1" />
      {/* Whimsical heart floating from screen */}
      <path d="M50 45 C48 40 43 40 43 45 C43 50 49 53 50 54 C51 53 57 50 57 45 C57 40 52 40 50 45 Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// 5. Graduation Cap Doodle
export function GraduationDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Diamond Cap */}
      <path d="M50 20 L85 35 L50 50 L15 35 Z" />
      {/* Head Band */}
      <path d="M30 42 L30 60 C30 68 70 68 70 60 L70 42" />
      {/* Tassel */}
      <path d="M50 35 L80 45 L80 65 L78 68 M82 68" />
      <circle cx="80" cy="67" r="3" fill="currentColor" />
    </svg>
  );
}

// 6. Briefcase Doodle
export function BriefcaseDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="20" y="30" width="60" height="45" rx="6" />
      <path d="M40 30 L40 22 C40 18 60 18 60 22 L60 30" />
      <path d="M20 48 L42 48 M58 48 L80 48" />
      <rect x="44" y="44" width="12" height="10" rx="2" />
    </svg>
  );
}

// 7. Whimsical Code Brackets Doodle
export function CodeBracketsDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M35 30 L15 50 L35 70" />
      <path d="M65 30 L85 50 L65 70" />
      <path d="M55 25 L45 75" />
      {/* Mini Sparkle */}
      <path d="M25 20 L27 24 L31 25 L27 26 L25 30 L23 26 L19 25 L23 24 Z" fill="currentColor" opacity="0.8" />
      <path d="M75 75 L77 79 L81 80 L77 81 L75 85 L73 81 L69 80 L73 79 Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

// 8. Cute Coffee Cup Doodle
export function CoffeeDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Cup Body */}
      <path d="M25 35 L75 35 C75 35 72 75 48 75 C24 75 25 35 25 35 Z" />
      {/* Handle */}
      <path d="M75 42 C85 42 85 58 75 58" />
      {/* Saucer */}
      <path d="M20 80 L80 80" />
      {/* Steam lines */}
      <path d="M38 15 C38 22 44 22 44 28" />
      <path d="M50 12 C50 20 56 20 56 28" />
      <path d="M62 16 C62 21 68 21 68 27" />
    </svg>
  );
}

// 9. Whimsical Envelope Doodle
export function MailDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Envelope Outline */}
      <rect x="15" y="30" width="70" height="46" rx="6" />
      {/* Flaps */}
      <path d="M15 30 L50 55 L85 30" />
      <path d="M15 76 L42 53" />
      <path d="M85 76 L58 53" />
      {/* Mini wing doodle */}
      <path d="M10 40 C0 35 2 20 12 30" />
      <path d="M90 40 C100 35 98 20 88 30" />
    </svg>
  );
}

// 10. Large Central Workstation Illustration Doodle
export function CentralWorkstationDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 500 350"
      fill="none"
      stroke="#2A1B28"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Desk surface */}
      <path d="M50 300 L450 300" strokeWidth="6" />
      <path d="M70 300 L70 330 M430 300 L430 330" strokeWidth="6" />

      {/* Main Monitor */}
      {/* Stand */}
      <path d="M220 280 L280 280" />
      <path d="M250 240 L250 280" />
      {/* Monitor bezel */}
      <rect x="150" y="80" width="200" height="150" rx="16" fill="#FFFCE8" />
      <rect x="160" y="90" width="180" height="110" rx="8" fill="#E2E4FF" />
      {/* Smiley eyes & mouth in monitor screen */}
      <circle cx="230" cy="135" r="4" fill="#2A1B28" />
      <circle cx="270" cy="135" r="4" fill="#2A1B28" />
      <path d="M245 150 Q250 156 255 150" strokeWidth="3" />
      {/* Small code brackets on screen */}
      <path d="M175 110 L165 115 L175 120 M325 110 L335 115 L325 120" strokeWidth="3" />

      {/* Laptop */}
      <path d="M80 270 L140 270 L150 290 L70 290 Z" fill="#FFEAD2" />
      <rect x="85" y="210" width="50" height="60" rx="4" transform="rotate(-10 85 210)" fill="#FFFCE8" />
      <rect x="88" y="215" width="44" height="40" rx="2" transform="rotate(-10 88 215)" fill="#FFD6E8" />

      {/* Steaming Coffee Cup */}
      <path d="M375 260 C375 285 400 285 400 260 Z" fill="#FFD6E8" />
      <path d="M400 265 C407 265 407 275 400 275" />
      <path d="M380 248 C380 242 384 242 384 236 M390 250 C390 244 394 244 394 238" strokeWidth="3" />

      {/* Cute Flower/Cactus Pot */}
      <path d="M110 295 L114 275 L136 275 L140 295 Z" fill="#FFEAD2" />
      <path d="M125 275 Q125 245 115 250 Q135 240 125 275" fill="#E2F5E9" />
      <circle cx="120" cy="245" r="3" fill="#FFD6E8" />

      {/* Floating Sparkles & Butterflies */}
      <path d="M30 150 C30 160 20 170 10 170 C20 170 30 180 30 190 C30 180 40 170 50 170 C40 170 30 160 30 150 Z" fill="#FFEAD2" />
      <path d="M440 100 C440 108 432 115 425 115 C432 115 440 122 440 130 C440 122 448 115 455 115 C448 115 440 108 440 100 Z" fill="#FFD6E8" />

      {/* Cute Butterfly Hovering */}
      <g transform="translate(380, 70) scale(0.7)">
        <path d="M30 20 C25 5 5 10 15 25 C5 40 25 45 30 30 C35 45 55 40 45 25 C55 10 35 5 30 20 Z" fill="#E2E4FF" />
        <path d="M30 10 L30 35" strokeWidth="3" />
      </g>
    </svg>
  );
}

// 11. Cute Cloud Doodle
export function CloudDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M10 40 C10 25, 25 20, 35 25 C42 15, 60 12, 70 22 C80 18, 90 28, 90 40 C95 45, 90 55, 80 55 L20 55 C10 55, 5 48, 10 40 Z" fill="white" />
    </svg>
  );
}

// 12. Cute Butterfly Doodle
export function ButterflyDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M30 25 C25 10 5 15 15 30 C5 45 25 50 30 35 C35 50 55 45 45 30 C55 15 35 10 30 25 Z" fill="#E2E4FF" />
      <path d="M30 15 L30 45" />
      <path d="M28 15 Q20 8 16 12 M32 15 Q40 8 44 12" />
    </svg>
  );
}

// 13. Horizontal Girl Coding & Garden Illustration Doodle
export function HorizontalGirlCodingDoodle({ className, ...props }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 700 320"
      fill="none"
      stroke="#2A1B28"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Desk Ground Line - wavy hand-drawn turf */}
      <path d="M40 260 Q180 275 350 260 Q520 245 660 260" strokeWidth="5" />

      {/* LEFT SIDE: monstera garden pot */}
      {/* Pot */}
      <path d="M80 260 L85 220 L125 220 L130 260 Z" fill="#FFEAD2" />
      {/* Monstera detailed leaves */}
      <path d="M105 220 Q105 150 90 110" />
      <path d="M90 110 Q50 100 45 130 C45 150 70 160 95 150" fill="#E2F5E9" />
      <path d="M90 110 Q130 100 135 130 C135 150 110 160 95 150" fill="#E2F5E9" />
      {/* Left side leaves */}
      <path d="M105 220 Q60 190 40 180 Q25 160 30 190 C35 210 65 210 80 200" fill="#E2F5E9" />
      {/* Right side leaves */}
      <path d="M105 220 Q150 190 170 180 Q185 160 180 190 C175 210 145 210 130 200" fill="#E2F5E9" />

      {/* CENTER: The Girl & Nestled Puppy */}
      {/* Body / Sweater */}
      <path d="M250 260 C250 215 275 180 320 180 C365 180 390 215 390 260 Z" fill="#FFD6E8" />
      
      {/* Left sleeve hugging */}
      <path d="M260 230 Q280 210 305 225" strokeWidth="4.5" />

      {/* NESTLED PUPPY (nestled in her right arm/side) */}
      {/* Body */}
      <path d="M350 260 C350 220 395 220 395 260 Z" fill="#FFEAD2" />
      {/* Puppy Head */}
      <circle cx="372" cy="225" r="16" fill="#FFEAD2" />
      {/* Puppy Ears */}
      <path d="M358 215 Q350 215 354 228 Z" fill="#2A1B28" />
      <path d="M386 215 Q394 215 390 228 Z" fill="#2A1B28" />
      {/* Puppy Face */}
      <circle cx="367" cy="223" r="2" fill="#2A1B28" />
      <circle cx="377" cy="223" r="2" fill="#2A1B28" />
      <path d="M371 228 Q372 230 373 228" strokeWidth="2" />

      {/* Neck */}
      <rect x="312" y="155" width="16" height="30" rx="4" fill="#FFEAD2" />

      {/* Hair (Behind head) */}
      <path d="M280 150 C265 90 375 90 360 150 Z" fill="#2A1B28" />

      {/* Face/Head */}
      <circle cx="320" cy="135" r="32" fill="#FFEAD2" />
      
      {/* Face Details (rosy cheeks + eyes) */}
      <circle cx="308" cy="138" r="5" fill="#FFB2D6" opacity="0.6" />
      <circle cx="332" cy="138" r="5" fill="#FFB2D6" opacity="0.6" />
      <circle cx="310" cy="132" r="3.5" fill="#2A1B28" />
      <circle cx="330" cy="132" r="3.5" fill="#2A1B28" />
      <path d="M316 145 Q320 149 324 145" strokeWidth="2.5" />

      {/* Hair front bangs */}
      <path d="M288 128 C300 110 320 110 320 120 C320 110 340 110 352 128 C355 120 355 110 345 105 C330 100 310 100 295 105 Z" fill="#2A1B28" />
      {/* Buns / Pigtails */}
      <circle cx="282" cy="108" r="12" fill="#2A1B28" />
      <circle cx="358" cy="108" r="12" fill="#2A1B28" />
      <path d="M280 118 Q270 125 272 135" />
      <path d="M360 118 Q370 125 368 135" />

      {/* Laptop in front of her */}
      {/* Screen */}
      <rect x="230" y="195" width="80" height="47" rx="6" fill="#FFFCE8" />
      <rect x="236" y="201" width="68" height="35" rx="3" fill="#E2E4FF" />
      {/* Coding Lines mockup inside screen */}
      <path d="M242 208 L260 208 M242 216 L280 216 M242 224 L255 224" strokeWidth="2.5" stroke="rgba(42, 27, 40, 0.7)" />
      {/* Base */}
      <path d="M220 242 L320 242 L330 252 L210 252 Z" fill="#E2E4FF" />

      {/* PEEKING CAT (peeking over the laptop screen) */}
      {/* Head */}
      <path d="M285 195 C285 180 310 180 310 195 Z" fill="#FFEAD2" />
      {/* Ears */}
      <path d="M287 182 L293 190" strokeWidth="3" />
      <path d="M308 182 L302 190" strokeWidth="3" />
      {/* Eyes */}
      <circle cx="293" cy="189" r="1.5" fill="#2A1B28" />
      <circle cx="302" cy="189" r="1.5" fill="#2A1B28" />

      {/* RIGHT SIDE: Steaming coffee and cacti */}
      {/* Coffee Mug */}
      <path d="M435 225 C435 248 455 248 455 225 Z" fill="#FFD6E8" />
      <path d="M455 228 C461 228 461 236 455 236" />
      <path d="M440 214 C440 208 444 208 444 202 M448 216 C448 210 452 210 452 204" strokeWidth="2.5" />

      {/* Cactus Pot */}
      <path d="M495 260 L500 225 L530 225 L535 260 Z" fill="#E2E4FF" />
      <path d="M515 225 L515 195" strokeWidth="6" strokeLinecap="round" />
      <path d="M505 210 L515 210" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M515 205 L525 205" strokeWidth="5.5" strokeLinecap="round" />
      {/* Pink bloom */}
      <circle cx="515" cy="190" r="4" fill="#FFD6E8" />

      {/* Secondary Garden Flower Pot */}
      <path d="M575 260 L578 235 L602 235 L605 260 Z" fill="#FFEAD2" />
      <path d="M590 235 Q590 205 580 210 Q600 195 590 235" fill="#E2F5E9" strokeWidth="3.5" />
      <circle cx="585" cy="205" r="3" fill="#FFD6E8" />

      {/* Hanging vines */}
      <path d="M150 0 Q160 50 145 80" strokeWidth="3" />
      <circle cx="158" cy="30" r="5" fill="#E2F5E9" />
      <circle cx="146" cy="55" r="5" fill="#E2F5E9" />
      <circle cx="143" cy="75" r="5" fill="#E2F5E9" />

      <path d="M480 0 Q470 40 485 70" strokeWidth="3" />
      <circle cx="474" cy="25" r="5" fill="#E2F5E9" />
      <circle cx="482" cy="50" r="5" fill="#E2F5E9" />

      {/* Twinkles and Butterflies */}
      <path d="M205 130 C205 135 200 140 195 140 C200 140 205 145 205 150 C205 145 210 140 215 140 C210 140 205 135 205 130 Z" fill="#FFFCE8" />
      <path d="M410 100 C410 105 405 110 400 110 C405 110 410 115 410 120 C410 115 415 110 420 110 C415 110 410 105 410 100 Z" fill="#FFD6E8" />
      <path d="M60 70 C60 75 55 80 50 80 C55 80 60 85 60 90 C60 85 65 80 70 80 C65 80 60 75 60 70 Z" fill="#FFFCE8" />

      {/* Butterflies */}
      <g transform="translate(190, 80) scale(0.6)">
        <path d="M30 20 C25 5 5 10 15 25 C5 40 25 45 30 30 C35 45 55 40 45 25 C55 10 35 5 30 20 Z" fill="#E2E4FF" />
        <path d="M30 10 L30 35" strokeWidth="2.5" />
      </g>
      <g transform="translate(420, 140) scale(0.6)">
        <path d="M30 20 C25 5 5 10 15 25 C5 40 25 45 30 30 C35 45 55 40 45 25 C55 10 35 5 30 20 Z" fill="#FFD6E8" />
        <path d="M30 10 L30 35" strokeWidth="2.5" />
      </g>
    </svg>
  );
}

