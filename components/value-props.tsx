const PROPS = [
  {
    title: "Made to be used",
    body: "Every piece is picked for build quality, not just looks — things that hold up to real play.",
  },
  {
    title: "Secure checkout",
    body: "Checkout runs on Shopify's payment infrastructure, so your details stay protected.",
  },
  {
    title: "For all ages",
    body: "A catalog built for teens and adults too, not just the kids' aisle.",
  },
];

export function ValueProps() {
  return (
    <section className="border-y border-ink-3/60 bg-ink-2">
      <div className="mx-auto grid max-w-(--breakpoint-2xl) grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3 sm:gap-6">
        {PROPS.map((prop) => (
          <div
            key={prop.title}
            className="flex flex-col gap-2 text-center sm:text-left"
          >
            <h3 className="text-sm font-semibold tracking-wide text-amber-300 uppercase">
              {prop.title}
            </h3>
            <p className="text-sm text-cream/70">{prop.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
