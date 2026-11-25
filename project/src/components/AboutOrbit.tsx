export default function AboutOrbit() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-aurora-violet/40 via-aurora-blue/20 to-aurora-cyan/30 blur-3xl animate-glow-pulse" />

      <div className="absolute inset-0 rounded-full border border-white/10 animate-orbit">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora-purple shadow-[0_0_16px_#A855F7]" />
      </div>
      <div className="absolute inset-[14%] rounded-full border border-aurora-cyan/20 animate-orbit-reverse">
        <span className="absolute bottom-0 right-[14%] h-2 w-2 translate-y-1/2 rounded-full bg-aurora-cyan shadow-[0_0_14px_#22D3EE]" />
      </div>
      <div className="absolute inset-[28%] rounded-full border border-dashed border-aurora-lavender/25 animate-orbit" style={{ animationDuration: '24s' }}>
        <span className="absolute left-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-aurora-mint" />
      </div>

      <div className="absolute inset-[38%] flex items-center justify-center rounded-full border border-white/15 bg-midnight/80 backdrop-blur-md">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-aurora-mint">Build</span>
      </div>
    </div>
  );
}
