export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora-wave -left-[12%] -top-[18%] h-[38rem] w-[62rem] bg-gradient-to-r from-aurora-violet/60 via-aurora-purple/25 to-transparent opacity-50" />
      <div
        className="aurora-wave -right-[14%] top-[24%] h-[34rem] w-[58rem] bg-gradient-to-l from-aurora-cyan/45 via-aurora-blue/20 to-transparent opacity-40"
        style={{ animationDelay: '-9s', animationDuration: '32s' }}
      />
      <div
        className="aurora-wave bottom-[-18%] left-[18%] h-[30rem] w-[52rem] bg-gradient-to-t from-aurora-blue/35 via-aurora-lavender/10 to-transparent opacity-40"
        style={{ animationDelay: '-17s', animationDuration: '38s' }}
      />
      <div className="absolute inset-0 grid-texture opacity-[0.55] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,9,20,0.85)_100%)]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
