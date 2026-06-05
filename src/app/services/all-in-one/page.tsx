import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "All-in-One Digital Marketing — Quorbit",
  description: "SEO, paid media, email marketing, and social media under a single coordinated strategy — so your channels work together instead of competing against each other.",
};

export default function AllInOnePage() {
  return (
    <ServicePageLayout
      badge="All-in-One"
      headline="One Partner. Every Channel. One Goal: Growth."
      subheadline="Our all-in-one digital marketing service brings SEO, paid media, email marketing, and social media under a single coordinated strategy — so your channels work together instead of competing against each other."
      opening="Most businesses don't have a marketing problem. They have a coordination problem. SEO handled by one team. Paid media by another. Email sent by whoever has time. Social media posted inconsistently. No unified messaging. No shared data. No clear view of what's actually driving revenue. Our all-in-one service fixes this from the ground up. You get a single partner managing every growth channel — with one strategy, one voice, and one set of outcomes everyone is accountable to."
      whatIncluded={[
        {
          title: "Search Engine Optimization (SEO)",
          body: "Sustainable, compounding organic growth built for the long game. Technical SEO, on-page optimization, content strategy, authority building, and local SEO — all managed with monthly reporting on rankings, organic traffic, and business outcomes.",
        },
        {
          title: "Performance Marketing (Paid Media)",
          body: "Google Search, Shopping, Display, YouTube, Meta, and LinkedIn — all managed and coordinated with SEO. What converts in paid search informs organic content priorities, and organic ranking data feeds into paid keyword strategy.",
        },
        {
          title: "Email Marketing",
          body: "List segmentation, welcome sequences, promotional campaigns, abandoned cart flows, retention and re-engagement — structured lifecycle programs that drive revenue in the background every week. Platforms: Klaviyo, Mailchimp, HubSpot, and others.",
        },
        {
          title: "Social Media Marketing",
          body: "Content strategy, calendar planning, copywriting, creative direction, community management, and social listening — across Instagram, LinkedIn, X, Facebook, and TikTok. Social that does something beyond likes and followers.",
        },
      ]}
      process={[
        {
          title: "Full Channel Audit",
          body: "We audit every active channel — SEO health, ad account performance, email list quality, social engagement. One unified picture of where you stand.",
        },
        {
          title: "Unified Strategy",
          body: "We build a single strategy that maps all four channels to your funnel stages. Shared messaging, shared data, shared KPIs.",
        },
        {
          title: "Coordinated Launch",
          body: "Channels go live in sequence or in parallel depending on your priorities. Content, campaigns, and automations are aligned from day one.",
        },
        {
          title: "Active Management",
          body: "Every channel under active management. Weekly optimizations, content publishing, email deployments, and bid management running in sync.",
        },
        {
          title: "Unified Reporting",
          body: "One report. Not four. One document showing how all channels are contributing to your growth, with revenue and pipeline as the north star.",
        },
      ]}
      whoFor={[
        "Growing brands ready to graduate from fragmented vendors or doing everything in-house",
        "Businesses spending $3,000–$50,000/month on marketing who want unified execution and reporting",
        "Founders and marketing directors who want a senior-level strategic partner",
        "Companies entering competitive markets who need every channel working in concert",
        "Brands with good products and no shortage of ambition — but not enough bandwidth to do it all well internally",
      ]}
      metrics={[
        { metric: "Organic", description: "Rankings, impressions, and organic traffic growth" },
        { metric: "ROAS", description: "Return on paid media investment across all channels" },
        { metric: "Email Rev", description: "Revenue attributable to email automation flows" },
        { metric: "CAC", description: "Blended customer acquisition cost across all channels" },
        { metric: "Pipeline", description: "Total leads and opportunities generated" },
        { metric: "MER", description: "Marketing efficiency ratio across your full program" },
      ]}
      faqs={[
        {
          question: "Can I pick just two or three of the four channels?",
          answer: "Yes. While the all-in-one package delivers the most impact through coordination, we can build a custom scope with the channels that make the most sense for your stage and budget.",
        },
        {
          question: "What's the minimum engagement size?",
          answer: "This service is designed for businesses with a marketing budget of at least $3,000/month (including any ad spend). We'll be direct with you if the engagement doesn't make economic sense.",
        },
        {
          question: "Who will I actually be working with day-to-day?",
          answer: "A senior strategist owns your account and is your primary point of contact. Specialist practitioners manage each channel. You get both strategic oversight and channel depth.",
        },
        {
          question: "How do you handle reporting across four channels?",
          answer: "You receive one unified report — not four separate channel reports. One document that shows how all channels are contributing to your growth, with revenue and pipeline as the north star.",
        },
        {
          question: "How long before I see results from SEO?",
          answer: "Paid media can generate results within the first 30 days. SEO is a 4–6 month timeline before meaningful traffic movement typically becomes visible. We set realistic expectations from day one.",
        },
        {
          question: "What if I already have someone managing one of the channels?",
          answer: "We can work around existing relationships. We'll identify what's in place, assess performance, and integrate or complement where it makes sense. We're not territorial — we care about results.",
        },
      ]}
      ctaHeadline="One Call. One Strategy. One Partner."
      ctaBody="Tell us where you are and where you want to go. We'll map out what a coordinated, channel-unified marketing program looks like for your specific business — and what it would take to get there."
      ctaBottom="30 minutes. No sales pressure. A direct conversation with someone who's done this before."
    />
  );
}
