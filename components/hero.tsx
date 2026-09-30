import Link from "next/link";

const TRUST_ITEMS = [
  "Secure checkout",
  "Small-batch & curated",
  "New finds added often",
];

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[520px] w-full max-w-(--breakpoint-2xl) flex-col items-center justify-center overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(201,130,42,0.16), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-cream) 0, var(--color-cream) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-24 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-amber-300 uppercase">
          Toys &amp; games for teens and adults
        </p>
        <h1 className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold text-cream drop-shadow-sm sm:text-5xl md:text-6xl">
          Build something worth remembering
        </h1>
        <p className="max-w-md text-base text-cream/80">
          Hand-picked build kits, games, and collectibles for people who never
          quite grew out of making things.
        </p>
        <Link
          href="/search"
          prefetch={true}
          className="mt-2 rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105 hover:bg-amber-300"
        >
          Shop all
        </Link>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-cream/70">
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-amber-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
