import Link from "next/link";

const HERO_IMAGE =
  "https://cdn.shopify.com/s/files/1/0857/5762/4408/files/warm-craftsman-workbench-flat-lay.png?v=1790732642";

export function Hero() {
  return (
    <section className="relative mx-auto flex h-[70vh] min-h-[420px] w-full max-w-(--breakpoint-2xl) items-center justify-center overflow-hidden md:h-[80vh]">
      <img
        src={HERO_IMAGE}
        alt="A warm, lamplit workbench scattered with handmade wooden toys, magnetic tiles, a jigsaw puzzle, and a retro arcade cabinet"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <p className="text-xs font-medium tracking-[0.3em] text-amber-300 uppercase">
          Handcrafted toys &amp; games, built to last
        </p>
        <h1 className="max-w-2xl text-4xl font-bold text-cream drop-shadow-sm sm:text-5xl md:text-6xl">
          Build something worth remembering
        </h1>
        <Link
          href="/search"
          prefetch={true}
          className="mt-2 rounded-full border border-cream/70 bg-cream/5 px-7 py-3 text-sm font-medium text-cream backdrop-blur-sm transition-colors hover:bg-amber-400 hover:text-ink"
        >
          Shop all
        </Link>
      </div>
    </section>
  );
}
