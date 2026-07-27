// Premium SVG bottle illustrations styled with Neon White & Obsidian Black design tokens.

type BottleProps = {
  variant: 'clear' | 'blue' | 'flavored' | 'carbonated' | 'custom';
  label?: string;
  sublabel?: string;
  className?: string;
  customLabelColor?: string;
};

const liquidTop: Record<BottleProps['variant'], string> = {
  clear: '#ffffff',
  blue: '#f4f4f5',
  flavored: '#e4e4e7',
  carbonated: '#ffffff',
  custom: '#ffffff',
};

export function WaterBottle({
  variant,
  label = 'AquaLab',
  sublabel,
  className = '',
  customLabelColor = '#ffffff',
}: BottleProps) {
  const id = `${variant}-grad`;
  const capColor = variant === 'flavored' ? '#d4d4d8' : variant === 'custom' ? customLabelColor : '#ffffff';

  return (
    <svg
      viewBox="0 0 200 460"
      className={className}
      role="img"
      aria-label={`${variant} water bottle`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={liquidTop[variant]} stopOpacity="0.85" />
          <stop offset="1" stopColor="#a1a1aa" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id={`${id}-plastic`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#f4f4f5" stopOpacity="0.7" />
          <stop offset="1" stopColor="#e4e4e7" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={`${id}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={capColor} />
          <stop offset="1" stopColor="#71717a" />
        </linearGradient>
      </defs>

      {/* Cap */}
      <rect x="80" y="6" width="40" height="30" rx="5" fill={`url(#${id}-cap)`} />
      <rect x="80" y="6" width="40" height="8" rx="3" fill="rgba(255,255,255,0.4)" />

      {/* Neck */}
      <path d="M84 34 h32 l-4 28 h-24 z" fill={`url(#${id}-plastic)`} />

      {/* Bottle body */}
      <path
        d="M58 62 q0 -14 14 -16 h56 q14 2 14 16 v320 q0 24 -22 26 h-40 q-22 -2 -22 -26 z"
        fill={`url(#${id}-plastic)`}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
      />

      {/* Liquid fill */}
      <path
        d="M66 150 v232 q0 22 22 24 h24 q22 -2 22 -24 V150 z"
        fill={`url(#${id}-water)`}
      />

      {/* Carbonation bubbles */}
      {variant === 'carbonated' && (
        <g fill="#ffffff" opacity="0.8">
          <circle cx="92" cy="260" r="3">
            <animate attributeName="cy" values="360;180" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="110" cy="300" r="2.2">
            <animate attributeName="cy" values="370;190" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="330" r="2.6">
            <animate attributeName="cy" values="375;185" dur="3.4s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur="3.4s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>
      )}

      {/* Label */}
      <rect x="62" y="210" width="76" height="120" rx="6" fill="#0a0a0c" opacity="0.96" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <rect x="62" y="210" width="76" height="14" rx="6" fill="#ffffff" opacity="0.95" />
      <rect x="62" y="316" width="76" height="14" rx="6" fill="#ffffff" opacity="0.95" />
      {/* Droplet mark */}
      <path d="M100 236 C100 236 88 252 88 262 a12 12 0 0 0 24 0 c0 -10 -12 -26 -12 -26 z" fill="#ffffff" />
      <text x="100" y="296" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="13" fill="#ffffff" letterSpacing="0.5">
        {label.toUpperCase()}
      </text>
      {sublabel && (
        <text x="100" y="310" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="7" fill="#a1a1aa" fontWeight="600">
          {sublabel}
        </text>
      )}

      {/* Glossy highlight */}
      <path d="M72 70 q-6 40 -2 120 v260" stroke="#ffffff" strokeWidth="6" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

// Large 18L dispenser bottle (different silhouette)
export function DispenserBottle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 380" className={className} role="img" aria-label="18L dispenser water bottle" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="disp-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#a1a1aa" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="disp-plastic" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#f4f4f5" stopOpacity="0.6" />
          <stop offset="1" stopColor="#e4e4e7" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="disp-cap" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#71717a" />
        </linearGradient>
      </defs>
      {/* Cap + neck */}
      <rect x="100" y="8" width="40" height="26" rx="5" fill="url(#disp-cap)" />
      <path d="M96 34 h48 l-6 36 h-36 z" fill="url(#disp-plastic)" />
      {/* Body — tall rounded */}
      <path d="M40 70 h160 v250 q0 30 -30 30 h-100 q-30 0 -30 -30 z" fill="url(#disp-plastic)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      {/* Water */}
      <path d="M48 130 v190 q0 26 26 26 h92 q26 0 26 -26 V130 z" fill="url(#disp-water)" />
      {/* Handle ridges */}
      <path d="M40 70 h160" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      {/* Label */}
      <rect x="48" y="180" width="144" height="100" rx="8" fill="#0a0a0c" opacity="0.96" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <rect x="48" y="180" width="144" height="12" rx="8" fill="#ffffff" opacity="0.95" />
      <rect x="48" y="268" width="144" height="12" rx="8" fill="#ffffff" opacity="0.95" />
      <path d="M120 210 C120 210 104 232 104 244 a16 16 0 0 0 32 0 c0 -12 -16 -34 -16 -34 z" fill="#ffffff" />
      <text x="120" y="262" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="18" fill="#ffffff" letterSpacing="1">AQUALAB</text>
      {/* Glossy highlight */}
      <path d="M56 80 q-8 60 0 160 v190" stroke="#ffffff" strokeWidth="7" opacity="0.35" strokeLinecap="round" />
    </svg>
  );
}

// Decorative droplet used in USP + backgrounds
export function Droplet({ className = '', color = '#ffffff' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 C12 2 4 11 4 16 a8 8 0 0 0 16 0 c0 -5 -8 -14 -8 -14 z" fill={color} />
    </svg>
  );
}
