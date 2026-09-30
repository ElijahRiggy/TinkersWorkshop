import Grid from "components/grid";
import { Hero } from "components/hero";
import Footer from "components/layout/footer";
import ProductGridItems from "components/layout/product-grid-items";
import { getProducts } from "lib/shopify";

export const metadata = {
  description:
    "Handcrafted toys, games, and building kits for teens and adults — built to last.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const products = await getProducts({});

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-24 pt-4">
        <h2 className="mb-6 text-2xl font-semibold text-cream">Shop all</h2>
        {products.length > 0 ? (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
