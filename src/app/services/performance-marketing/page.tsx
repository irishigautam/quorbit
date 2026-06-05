import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Performance Marketing — Quorbit",
  description: "Full-funnel paid media management across Google, Meta, LinkedIn, and YouTube. Every dollar traceable to a business outcome.",
};

export default function PerformanceMarketingPage() {
  return (
    <ServicePageLayout
      badge="Paid Media"
      headline="Spend Smarter. Scale Faster. Measure Everything."
      subheadline="Full-funnel paid media management across Google, Meta, LinkedIn, YouTube, and beyond — built to drive revenue, not just clicks."
      opening="Most businesses aren't losing money because their product is wrong. They're losing it because their campaigns aren't built to convert. Misaligned audiences. Weak creative. Poor bid strategy. Budgets spread across platforms with no clear attribution. Our performance marketing practice is built around one principle: every dollar you put into paid media should be traceable to a business outcome. Not an impression. Not a click. A lead, a sale, a booked call, a revenue event."
      whatIncluded={[
        {
          title: "Google Ads — Search, Shopping & Display",
          body: "We build and manage campaigns that capture high-intent demand — people actively searching for what you offer. Tight keyword structure, strong Quality Scores, smart bidding strategies, and ad copy that converts. No wasted impressions, no broad-match guesswork.",
        },
        {
          title: "Meta Advertising — Facebook & Instagram",
          body: "Audience-first paid social built for both prospecting and retargeting. We develop creative strategy, ad copy, and audience architecture across the funnel — from cold traffic to purchase and retention. We test systematically and scale what works.",
        },
        {
          title: "LinkedIn Ads",
          body: "For B2B brands targeting decision-makers, LinkedIn is one of the highest-intent channels available — when used correctly. We manage sponsored content, lead gen forms, and conversation ads with targeting precision at the company, title, and seniority level.",
        },
        {
          title: "YouTube & Video Advertising",
          body: "We manage YouTube campaigns — from skippable in-stream to discovery ads — paired with creative direction guidance to ensure your video assets actually perform, not just play.",
        },
        {
          title: "Programmatic & Display",
          body: "Retargeting, awareness, and prospecting campaigns across the Google Display Network and programmatic platforms. Managed with frequency caps, audience exclusions, and creative rotation to avoid fatigue and protect your brand.",
        },
      ]}
      process={[
        {
          title: "Audit & Discovery",
          body: "Before a single campaign is touched, we audit your existing setup — account structure, historical performance, audience data, landing pages, and attribution model. We identify exactly what's working, what's wasted, and where the biggest opportunities are.",
        },
        {
          title: "Strategy & Architecture",
          body: "We build a campaign architecture aligned to your funnel — awareness, consideration, and conversion — with clear KPIs for each stage. Platform selection, budget allocation, audience segmentation, and bidding strategy are defined before launch.",
        },
        {
          title: "Creative Development",
          body: "Ad performance lives or dies on creative. We develop copy and work closely on visual direction to ensure your ads stop the scroll and drive action.",
        },
        {
          title: "Launch & Active Management",
          body: "Active, ongoing management — not set-and-forget. Weekly optimizations, bid adjustments, audience pruning, A/B testing, and budget pacing are all standard.",
        },
        {
          title: "Reporting & Accountability",
          body: "Clean, consistent reporting connecting channel performance to business outcomes — revenue, pipeline, CAC, ROAS — not just platform-level vanity stats.",
        },
      ]}
      whoFor={[
        "Spending $5,000–$100,000+/month in paid media and want it working harder",
        "Results are inconsistent, CAC is rising, or ROAS has plateaued",
        "Launching into paid media seriously for the first time and want to build the right foundation",
        "Have an internal marketing team that needs an expert paid media partner",
        "Scaling into new markets or launching new products and need fast, data-informed execution",
      ]}
      metrics={[
        { metric: "ROAS", description: "Revenue generated per dollar spent on ads" },
        { metric: "CAC", description: "Cost to acquire one new customer" },
        { metric: "CPL", description: "Cost per qualified lead" },
        { metric: "CTR", description: "Quality of creative and audience alignment" },
        { metric: "CVR", description: "How well your landing pages convert ad traffic" },
        { metric: "MER", description: "Blended efficiency across your full paid media mix" },
      ]}
      faqs={[
        {
          question: "What platforms do you manage?",
          answer: "Google (Search, Shopping, Display, YouTube), Meta (Facebook and Instagram), LinkedIn, and programmatic/display networks. Platform selection depends on your business, audience, and goals.",
        },
        {
          question: "Do you require a minimum ad spend?",
          answer: "We work best with clients spending a minimum of $5,000/month in media. Below that threshold, optimization cycles are limited and results tend to be inconsistent.",
        },
        {
          question: "Do you handle ad creative?",
          answer: "We handle copy and creative direction as a core part of the service. For video and photography assets, we work with your existing materials or can connect you with production partners.",
        },
        {
          question: "How long before I start seeing results?",
          answer: "Most clients see meaningful directional data within the first 30 days. Significant performance improvements typically emerge in weeks 6–10 as optimization cycles compound.",
        },
        {
          question: "How is your fee structured?",
          answer: "We charge a management fee based on scope and ad spend. You own all ad accounts, all data, and all creative assets — always. We don't mark up media spend.",
        },
        {
          question: "What does reporting look like?",
          answer: "Weekly performance summaries and monthly deep-dive reports. You'll also have access to a live dashboard with real-time campaign data.",
        },
      ]}
      ctaHeadline="Ready to Make Your Ad Spend Work?"
      ctaBody="Schedule a free 30-minute strategy call. Come with your current setup, your goals, and your questions. We'll come with an honest read on where you are and a clear path to where you want to be."
      ctaBottom="No commitment required. No long-deck sales pitch. Just a direct conversation about your business."
    />
  );
}
