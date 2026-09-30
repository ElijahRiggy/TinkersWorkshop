import Grid from "components/grid";
import { Hero } from "components/hero";
import Footer from "components/layout/footer";
import ProductGridItems from "components/layout/product-grid-items";
import { ValueProps } from "components/value-props";
import { getProducts } from "lib/shopify";

export const metadata = {
  description:
    "Toys, games, and build kits for teens and adults — hand-picked, not mass-produced.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const products = await getProducts({});

  return (
    <>
      <Hero />
      <ValueProps />
      <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pt-16 pb-24 sm:px-6">
        <div className="mb-8 flex flex-col gap-1 text-center sm:text-left">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            Shop all
          </h2>
          <p className="text-sm text-cream/60">
            {products.length} piece{products.length === 1 ? "" : "s"} in the
            catalog right now.
          </p>
        </div>
        {products.length > 0 ? (
          <Grid className="grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <ProductGridItems products={products} />
          </Grid>
        ) : (
          <p className="text-neutral-400">
            New pieces are on the workbench — check back soon.
          </p>
        )}
      </section>
      <Footer />
    </>
  );
}
