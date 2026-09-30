# Tinkerbench Storefront

A custom headless storefront for [Tinkerbench](https://tinkrshop.myshopify.com), built with
[Next.js](https://nextjs.org) and the Shopify [Storefront API](https://shopify.dev/docs/api/storefront).

Products, prices, and checkout all run live through Shopify — this is just a fully custom
front end on top of it, so the design isn't limited to what Shopify's theme editor can do.

## Stack

- Next.js (App Router) + React 19
- Tailwind CSS v4
- Shopify Storefront API (GraphQL)

## Local development

1. Copy `.env.example` to `.env.local` and fill in:
   - `SHOPIFY_STORE_DOMAIN` — `tinkrshop.myshopify.com`
   - `SHOPIFY_STOREFRONT_ACCESS_TOKEN` — from Shopify admin → Sales channels → Headless → Storefront API
   - `SHOPIFY_REVALIDATION_SECRET` — any random string
2. `pnpm install`
3. `pnpm dev`

## Deployment

Deployed on [Vercel](https://vercel.com), connected to this repo. Environment variables are set
in the Vercel project settings, not committed here.
