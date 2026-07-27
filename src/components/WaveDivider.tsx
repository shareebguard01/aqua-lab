// SVG wave-shaped section dividers styled with neon white stroke and soft glow.

type WaveProps = {
  className?: string;
  fill?: string;
  flip?: boolean;
};

export function WaveDivider({ className = '', fill = '#0a0a0c', flip = false }: WaveProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ display: 'block', transform: flip ? 'scaleY(-1)' : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 60 C 180 110, 360 10, 540 50 C 720 90, 900 110, 1080 70 C 1260 30, 1380 60, 1440 60 L 1440 120 L 0 120 Z"
        fill={fill}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.35))' }}
      />
    </svg>
  );
}

// A more pronounced double-wave for premium section transitions
export function WaveDividerBold({ className = '', fill = '#0a0a0c', flip = false }: WaveProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ display: 'block', transform: flip ? 'scaleY(-1)' : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 80 C 160 140, 320 20, 520 80 C 720 140, 880 140, 1080 80 C 1280 20, 1380 80, 1440 80 L 1440 160 L 0 160 Z"
        fill={fill}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.35))' }}
      />
    </svg>
  );
}
