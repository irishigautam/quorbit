import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "E-Commerce Management & Ads — Quorbit",
  description: "End-to-end e-commerce growth — platform management, catalog optimization, and performance advertising built to scale your revenue month over month.",
};

export default function EcommercePage() {
  return (
    <ServicePageLayout
      badge="E-Commerce"
      headline="Your Store Is Open. Let's Make It Sell."
      subheadline="End-to-end e-commerce growth — platform management, catalog optimization, and performance advertising — built to scale your revenue month over month."
      opening="Running an e-commerce business is operationally complex. Between managing your platform, keeping your product catalog clean, staying on top of inventory signals, and running ads that actually convert — most brands are stretched thin on all of them. We manage the full e-commerce growth stack: Shopify, WooCommerce, or custom platform operations alongside performance advertising on Google Shopping, Meta, and marketplaces. Everything connected, everything measured, and everything aligned to one goal — increasing your revenue per visitor while scaling the volume of buyers coming through the door."
      whatIncluded={[
        {
          title: "E-Commerce Platform Management",
          body: "Day-to-day operational oversight of your store — whether you're on Shopify, WooCommerce, or a custom build. Product catalog management, collection and landing page optimization, conversion rate improvements, and making sure the engine running your store is clean, fast, and set up to convert.",
        },
        {
          title: "Google Shopping Campaigns",
          body: "Shopping is one of the highest-intent ad formats for e-commerce — and one of the most mismanaged. We build and manage Shopping campaigns with structured product feed optimization, segmented campaign architecture, smart bidding, and creative titles and descriptions that drive click-through at the right price.",
        },
        {
          title: "Meta Advertising for E-Commerce",
          body: "Full-funnel paid social built for DTC e-commerce. Prospecting campaigns to build new audiences, retargeting sequences to recover abandoners, and retention campaigns to drive repeat purchase.",
        },
        {
          title: "Product Feed Management & Optimization",
          body: "Your product feed is the foundation of shopping ads. We audit, clean, and continuously optimize your feed — titles, descriptions, categories, images, and custom labels — to improve ad eligibility, relevance, and performance.",
        },
        {
          title: "Google Search & Remarketing",
          body: "Brand and non-brand search campaigns to capture demand, paired with dynamic and standard remarketing to re-engage shoppers who've visited your store but haven't converted.",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          body: "Traffic without conversion is just expense. We analyze your store's performance data — session recordings, heatmaps, checkout flows, page speed — and identify the friction points costing you revenue.",
        },
      ]}
      process={[
        {
          title: "Store & Ads Audit",
          body: "We start with a full audit of your platform and ad accounts. Product feed quality, campaign structure, catalog coverage, creative performance, checkout flow, and attribution. This tells us exactly where revenue is being lost.",
        },
        {
          title: "Revenue Architecture",
          body: "We map your product catalog to a campaign structure that makes sense — hero products, high-margin SKUs, seasonal priorities, and clearance segmented and managed separately with appropriate budgets and bidding strategies.",
        },
        {
          title: "Creative & Copy Alignment",
          body: "Ad creative, product titles, landing pages, and ad copy are aligned to the same message. When everything speaks the same language, conversion improves at every stage of the funnel.",
        },
        {
          title: "Launch & Manage",
          body: "Campaigns live under active management — daily monitoring, weekly optimization cycles, feed updates, creative refreshes, and budget pacing. Nothing sits still.",
        },
        {
          title: "Revenue Reporting",
          body: "Weekly and monthly reporting tied to e-commerce outcomes: revenue, ROAS, average order value, customer acquisition cost, and repeat purchase rate.",
        },
      ]}
      whoFor={[
        "DTC brands on Shopify or WooCommerce spending $5K–$100K+/month on paid media",
        "E-commerce businesses whose Shopping campaigns are set up but underperforming",
        "Brands scaling into new product lines or markets needing coordinated ad + platform execution",
        "Founders and marketing leads wanting a single partner managing both store operations and growth channels",
        "Multi-SKU stores with complex catalog management needs",
      ]}
      metrics={[
        { metric: "ROAS", description: "Return on every ad dollar by campaign and channel" },
        { metric: "Revenue", description: "Total store revenue attributable to paid channels" },
        { metric: "AOV", description: "Are your best customers buying more?" },
        { metric: "CAC vs LTV", description: "Is your acquisition cost justified by lifetime value?" },
        { metric: "Cart Abandon", description: "Where are buyers dropping out?" },
        { metric: "Repeat Rate", description: "How healthy is your customer base?" },
      ]}
      faqs={[
        {
          question: "What platforms do you work on?",
          answer: "Shopify and WooCommerce primarily. We can also work with custom-built stores depending on the tech stack. We'll assess compatibility during our initial call.",
        },
        {
          question: "Do you run ads on Amazon as well?",
          answer: "Amazon Advertising is available as an add-on for brands selling on the marketplace. Let us know during your consultation and we can scope it in.",
        },
        {
          question: "What ad spend do you manage?",
          answer: "We work best with e-commerce brands spending a minimum of $5,000/month across paid channels. Higher spend engagements receive expanded platform management and more aggressive optimization cycles.",
        },
        {
          question: "How long does it take to see results?",
          answer: "In most cases, meaningful ROAS improvement is visible within 30–45 days. Material revenue impact typically takes 60–90 days as campaigns compound and optimization cycles complete.",
        },
        {
          question: "What's the difference between this and just running Google Shopping ads?",
          answer: "Shopping ads are one piece. This service connects your platform performance, your product catalog, your creative, and your paid media into a unified growth system. The sum is significantly more effective than any individual part.",
        },
      ]}
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
      ctaHeadline="Let's Build Your Revenue Machine."
      ctaBody="Schedule a free strategy call. Bring your current store, your numbers, and your goals. We'll come prepared with an honest assessment of where your biggest revenue opportunities are."
      ctaBottom="No contracts to sign on the call. No commitments. Just clarity on what's possible."
    />
  );
}
