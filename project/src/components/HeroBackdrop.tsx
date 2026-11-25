const PARTICLES = Array.from({ length: 22 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53 + 11) % 100}%`,
  size: 2 + (index % 3),
  duration: `${10 + (index % 5) * 2.5}s`,
  delay: `${-(index * 0.8)}s`,
}));

export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-[10%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-aurora-violet/30 blur-[120px] animate-glow-pulse" />
      <div
        className="absolute right-[-6%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-aurora-cyan/20 blur-[110px] animate-glow-pulse"
        style={{ animationDelay: '-4s' }}
      />

      <div
        className="absolute left-0 top-[34%] h-px w-[70%] origin-left bg-gradient-to-r from-transparent via-aurora-cyan/60 to-transparent animate-trail"
      />
      <div
        className="absolute right-0 top-[62%] h-px w-[60%] origin-right bg-gradient-to-l from-transparent via-aurora-purple/60 to-transparent animate-trail"
        style={{ animationDelay: '-3.5s' }}
      />

      <div className="absolute right-[8%] top-[16%] h-14 w-14 rotate-12 rounded-2xl border border-white/10 animate-float" />
      <div
        className="absolute bottom-[14%] left-[46%] h-20 w-20 rounded-full border border-aurora-mint/20 animate-float"
        style={{ animationDelay: '-2s' }}
      />
      <div
        className="absolute left-[6%] bottom-[30%] h-3 w-3 rotate-45 border border-aurora-lavender/50 animate-float"
        style={{ animationDelay: '-4s' }}
      />

      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-aurora-lavender animate-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            ['--dur' as string]: particle.duration,
            ['--delay' as string]: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
