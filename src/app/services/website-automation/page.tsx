import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Website Development & Marketing Automation — Quorbit",
  description: "We build and integrate websites, CRM, and automation systems that turn your traffic into revenue — and automate the workflows that turn leads into closed deals.",
};

export default function WebsiteAutomationPage() {
  return (
    <ServicePageLayout
      badge="Tech & Systems"
      headline="Your Website Should Work While You Sleep. So Should Your Sales Process."
      subheadline="We build and integrate the systems that turn your website into a lead machine — and automate the workflows that turn leads into closed revenue."
      opening="A great website without a sales system is just a brochure. A great sales system without a website that converts is a leaky bucket. And marketing automation without either is just software you're paying for and not using. We build all three — and we connect them. This service covers website development (WordPress, Shopify, and custom builds), sales automation (lead routing, CRM setup, pipeline management), and marketing automation (HubSpot, Salesforce, Zapier) — designed, built, and integrated by a team that understands both the technical architecture and the commercial outcomes each system needs to drive."
      whatIncluded={[
        {
          title: "Website Development",
          body: "WordPress, Shopify, and custom builds. Conversion-focused architecture, Core Web Vitals performance, mobile-first design, a CMS your team can actually use, analytics implementation, and all integrations connected from day one.",
        },
        {
          title: "Sales Automation & CRM",
          body: "CRM setup and configuration (HubSpot, Salesforce, Pipedrive), lead routing and assignment, automated follow-up sequences, lead scoring, pipeline reporting, and sales-marketing alignment with closed-loop reporting.",
        },
        {
          title: "Marketing Automation",
          body: "Lead nurture sequences, multi-step onboarding flows, re-engagement automations, cross-channel workflows, and internal handoff notifications. Built in HubSpot, Salesforce, Zapier/Make, ActiveCampaign, or Klaviyo.",
        },
        {
          title: "Analytics & Tracking",
          body: "GA4 setup, event tracking, conversion goals, and tag management configured correctly from day one. Looker Studio dashboards that connect automation activity to revenue outcomes.",
        },
      ]}
      process={[
        {
          title: "Discovery & Systems Audit",
          body: "We start by understanding your current tech stack, your sales process, and your growth bottlenecks. What tools are you using? What's broken? What's missing? What does success look like in 90 days and 6 months?",
        },
        {
          title: "Architecture & Scope",
          body: "We map the full build — website structure, automation logic, CRM configuration, and integration architecture — before a single line of code is written. You approve the plan before work begins.",
        },
        {
          title: "Build & Configure",
          body: "Website development, CRM setup, and automation workflows built in parallel where possible to compress timelines. Every build includes testing, QA, and a defined launch checklist.",
        },
        {
          title: "Integration & Testing",
          body: "All systems connected and stress-tested end-to-end. Form submissions route correctly. Automations trigger as intended. Analytics track what they're supposed to. Nothing goes live until it's verified.",
        },
        {
          title: "Launch & Handover",
          body: "We document everything. Your team gets clear SOPs for managing the CMS, working the CRM, and understanding the automation logic. We don't build systems your team can't operate.",
        },
        {
          title: "Ongoing Support (Optional)",
          body: "A/B tests, expanded automation coverage, new landing pages, and continued conversion performance improvements — available as a retainer after launch.",
        },
      ]}
      whoFor={[
        "B2B companies with a sales team that's doing too much manually",
        "E-commerce or DTC brands that need a conversion-focused store rebuild alongside automated retention",
        "Growing businesses whose tech stack is a fragmented collection of disconnected tools",
        "Marketing leaders who have budget for automation but haven't found a partner who thinks commercially and builds technically",
        "Companies launching new products or entering new markets who need the full infrastructure built correctly from the start",
      ]}
      metrics={[
        { metric: "Lead Time", description: "Time from form submit to first sales touchpoint" },
        { metric: "CVR", description: "Website conversion rate from visit to lead" },
        { metric: "Pipeline", description: "Opportunities created from automated lead routing" },
        { metric: "Close Rate", description: "Impact of lead nurture on sales team close rates" },
        { metric: "Email Rev", description: "Revenue from automated lifecycle flows" },
        { metric: "CAC", description: "Customer acquisition cost with full-system attribution" },
      ]}
      faqs={[
        {
          question: "How long does a website build take?",
          answer: "WordPress or Shopify builds with existing brand assets take 6–10 weeks. More complex custom builds or builds requiring brand development take 10–16 weeks. We'll give you a specific timeline during scoping.",
        },
        {
          question: "Do you build custom websites or use templates?",
          answer: "We build on established frameworks (WordPress, Shopify) with custom themes and architecture tailored to your business. We don't use off-the-shelf templates — every build is purposefully structured for your audience and conversion goals.",
        },
        {
          question: "What CRM do you recommend?",
          answer: "It depends entirely on your business. For most mid-market B2B companies, HubSpot is the clearest choice. For larger sales organizations, we work within Salesforce. We'll recommend based on your actual needs.",
        },
        {
          question: "What automation platform is best for e-commerce?",
          answer: "For most Shopify-based DTC brands, Klaviyo is the strongest choice for email and SMS automation. For broader marketing automation, we layer in additional tools based on your stack.",
        },
        {
          question: "Do you provide training after the build?",
          answer: "Yes. Documentation and team training are standard parts of our delivery. Your team will know how to manage the CMS, work inside the CRM, and understand the logic behind your automations.",
        },
        {
          question: "Can you just do one part — website, or CRM, or automation — not all three?",
          answer: "Absolutely. The three services are available independently. That said, the commercial impact is significantly higher when all three are connected — and we'll explain why during the strategy call.",
        },
      ]}
      ctaHeadline="Let's Build the System Your Business Deserves."
      ctaBody="Schedule a free strategy call. Walk us through your current setup, your sales process, and where you're feeling the friction. We'll come back with a clear picture of what needs to be built and in what order."
      ctaBottom="30 minutes. No commitment. We'll tell you exactly what we'd recommend — and why."
    />
  );
}
