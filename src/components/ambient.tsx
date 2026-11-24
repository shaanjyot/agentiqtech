export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="grid-surface animate-drift absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_20%,transparent_75%)]" />
      <div className="animate-float-slow absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-azure/20 blur-[140px] light:bg-azure/15" />
      <div className="animate-float absolute top-[46rem] -left-40 h-[34rem] w-[34rem] rounded-full bg-violet/15 blur-[130px] light:bg-violet/10" />
      <div className="absolute top-[92rem] -right-32 h-[32rem] w-[32rem] rounded-full bg-mint/10 blur-[130px] light:bg-mint/10" />
    </div>
  );
}
