import { Droplet } from './WaterBottle';

// Soft pure-white radial glows + floating droplets behind sections.
export function AquaBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-white/5 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute -bottom-32 left-1/4 h-[26rem] w-[26rem] rounded-full bg-white/5 blur-3xl animate-blob" style={{ animationDelay: '8s' }} />
      <Droplet className="absolute top-20 right-[12%] h-6 w-6 text-white/30 animate-float" color="#ffffff" />
      <Droplet className="absolute top-1/2 left-[8%] h-4 w-4 text-white/20 animate-floatSlow" color="#ffffff" />
      <Droplet className="absolute bottom-24 right-[18%] h-5 w-5 text-white/30 animate-float" color="#ffffff" />
    </div>
  );
}
