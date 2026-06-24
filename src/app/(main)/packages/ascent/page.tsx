import type { Metadata } from "next";
import PackageHero from "@/components/PackageHero";
import PricingBanner from "@/components/PricingBanner";
import FeatureSection from "@/components/FeatureSection";
import UpgradePath from "@/components/UpgradePath";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ascent Package — Quorbit",
  description:
    "The complete growth stack for ambitious businesses. Paid media, email marketing, SDR outreach, social, SEO, and AEO/GEO — working in perfect coordination. Starting at $2,100/month.",
  openGraph: {
    title: "Ascent Package — Quorbit",
    description:
      "Scale every channel. Accelerate every metric. The full-stack marketing program for businesses ready to grow fast.",
    url: "https://quorbit.io/packages/ascent",
  },
  alternates: { canonical: "https://quorbit.io/packages/ascent" },
};

export default function AscentPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative bg-midnight pt-24 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative max-w-4xl mx-auto">
          <PackageHero
            badge="Ascent Package"
            headline="Scale Every Channel. Accelerate Every Metric."
            subheadline="The complete growth stack for ambitious businesses. Paid media, email marketing, SDR outreach, social, SEO, and AEO/GEO — working in perfect coordination."
            price="$2,100"
          />
        </div>
      </section>

      {/* ── PRICING BANNER ── */}
      <PricingBanner
        price="$2,100"
        setupFee="Custom Quote"
        note="One-time setup fee applies. Pricing depends on platform requirements and project scope. A custom quote will be provided before engagement begins."
        background="light"
      />

      {/* ── PERFORMANCE MARKETING ── */}
      <FeatureSection
        badge="Performance Marketing"
        title="Four platforms. One coordinated paid strategy."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Everything in Launch (Google + Meta)",
            description:
              "Full Google Search, Shopping, and Meta campaign management — with the same active weekly optimization and monthly reporting as the Launch package.",
          },
          {
            title: "LinkedIn Advertising",
            description:
              "Sponsored Content, Message Ads, and Lead Gen Forms on LinkedIn — essential for B2B brands targeting decision-makers by title, company size, and industry.",
          },
          {
            title: "Google Display & YouTube",
            description:
              "Remarketing audiences, prospecting campaigns, and video ad management across the Google Display Network and YouTube — extending reach beyond search intent.",
          },
          {
            title: "Advanced Audience Segmentation",
            description:
              "Layered audience strategies: lookalikes, intent audiences, in-market segments, retargeting sequences, and suppression lists — all coordinated across platforms.",
          },
          {
            title: "A/B Testing Framework",
            description:
              "Structured creative and copy testing across all paid channels. Every test has a hypothesis, a control, and a defined success metric before we run it.",
          },
        ]}
      />

      {/* ── EMAIL MARKETING ── */}
      <FeatureSection
        badge="Email Marketing"
        title="Revenue in the background. Every week."
        background="light"
        bordered
        items={[
          {
            title: "Welcome & Onboarding Sequence",
            description:
              "Multi-step automated welcome series for new subscribers and customers. Sets expectations, builds trust, and drives early conversions without manual effort.",
          },
          {
            title: "Weekly Newsletter Management",
            description:
              "Content-driven weekly email: topic planning, copywriting, design briefing, sending, and performance review. Keeps your audience warm and your brand top-of-mind.",
          },
          {
            title: "Promotional Campaign Execution (Up to 4/month)",
            description:
              "Sales campaigns, product launches, seasonal promos, and offer emails — planned, written, designed, and sent on your behalf.",
          },
          {
            title: "Lifecycle Automation Flows",
            description:
              "Abandoned cart, browse abandonment, post-purchase sequences, review requests, and win-back campaigns. Revenue generated while you're not looking.",
          },
          {
            title: "List Segmentation & Hygiene",
            description:
              "Audience segmentation by behaviour, purchase history, and engagement tier. Regular list hygiene to maintain deliverability and suppress unengaged contacts.",
          },
          {
            title: "Platform Management",
            description:
              "We work within your existing platform — Klaviyo, Mailchimp, HubSpot, or ActiveCampaign — or recommend and implement the best fit for your stack.",
          },
        ]}
      />

      {/* ── SDR PROGRAM ── */}
      <FeatureSection
        badge="SDR Program"
        title="Outbound pipeline. Qualified leads. Handed off warm."
        background="dark"
        bordered={false}
        items={[
          {
            title: "LinkedIn Outbound Prospecting (50 Contacts/Month)",
            description:
              "ICP-matched prospect lists built monthly. Connection requests, follow-up message sequences, and conversation management handled by our SDR team.",
          },
          {
            title: "Cold Email Outreach Sequences",
            description:
              "Multi-touch email sequences targeting your ideal buyers. Written, tested, and optimised for reply rate — not open rate. Compliance with CAN-SPAM and GDPR as standard.",
          },
          {
            title: "Lead Qualification & Handoff",
            description:
              "Interested prospects are qualified against your defined criteria before handoff. You receive warm leads — not raw lists.",
          },
          {
            title: "CRM Integration & Tracking",
            description:
              "All prospecting activity logged in your CRM. Opportunity stages tracked. Pipeline visibility built in from day one.",
          },
          {
            title: "Monthly Prospecting Report",
            description:
              "Contacts reached, replies, qualified leads, meetings booked, and pipeline value created — with learnings and next-month targeting adjustments included.",
          },
        ]}
      />

      {/* ── SOCIAL MEDIA ── */}
      <FeatureSection
        badge="Social Media"
        title="Three platforms. Coordinated content. Real engagement."
        background="light"
        bordered
        items={[
          {
            title: "3 Social Platforms",
            description:
              "Instagram, LinkedIn, and one additional platform based on your audience — Facebook, X, or TikTok. Platform selection informed by your ICP and objectives.",
          },
          {
            title: "12 Posts Per Platform Per Month",
            description:
              "Full content calendar, copywriting, and creative direction. Posts aligned to your paid media messaging for channel coherence.",
          },
          {
            title: "Full Community Management",
            description:
              "Proactive comment replies, DM management, and community engagement — all in your brand voice, daily during business hours.",
          },
          {
            title: "Social Listening & Brand Monitoring",
            description:
              "Monitoring of brand mentions, competitor activity, and industry conversations. Opportunities for engagement flagged and acted upon.",
          },
          {
            title: "Influencer & UGC Strategy Guidance",
            description:
              "Strategic guidance on influencer partnerships and user-generated content programs — including outreach strategy, brief templates, and performance benchmarks.",
          },
        ]}
      />

      {/* ── SEO ── */}
      <FeatureSection
        badge="SEO"
        title="Advanced SEO with content that compounds."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Everything in Launch SEO",
            description:
              "Full technical SEO management, unlimited on-page optimization, keyword research and mapping, GSC management, and monthly rank tracking.",
          },
          {
            title: "Content Strategy & Blog Management",
            description:
              "4 long-form articles per month. Topic research, brief creation, writing, editing, internal linking, and publishing — all managed. Each article targets a high-value keyword cluster.",
          },
          {
            title: "Link Building",
            description:
              "Systematic domain authority building through editorial link acquisition, digital PR, and partnership outreach. No directories, no PBNs — only legitimate, high-authority links.",
          },
          {
            title: "Competitor Gap Analysis",
            description:
              "Quarterly analysis of competitor keyword rankings and backlink profiles. Gaps identified and built into the next quarter's content and link-building plan.",
          },
        ]}
      />

      {/* ── AEO/GEO ── */}
      <FeatureSection
        badge="AEO / GEO — AI Search"
        title="Voice search, AI answers, and the future of discovery."
        background="light"
        bordered
        items={[
          {
            title: "Everything in Launch AEO/GEO",
            description:
              "Full AI search visibility audit, structured data implementation, AI answer optimization, featured snippet targeting, and monthly AI visibility reporting.",
          },
          {
            title: "Voice Search Optimization",
            description:
              "Content structured for conversational queries. Question-answer format, local intent optimization, and long-tail keyword targeting aligned with voice search patterns.",
          },
          {
            title: "Multi-Platform AI Optimization",
            description:
              "Active optimization across ChatGPT, Perplexity, Google AI Overview, and Gemini. Each platform has different citation and citation-quality signals — we manage all of them.",
          },
          {
            title: "AI Answer Quality Monitoring",
            description:
              "Monthly monitoring of how AI tools describe your brand, products, and services. Inaccuracies identified and content updated to correct the record.",
          },
        ]}
      />

      {/* ── IDEAL CUSTOMER ── */}
      <section className="bg-midnight py-20 px-6 border-y border-midnight-muted">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-ice mb-10 border-b border-midnight-muted pb-5">
              Who Ascent Is Built For
            </h2>
          </ScrollReveal>
          <ul className="divide-y divide-midnight-muted">
            {[
              "Scaling businesses with $1M–$10M in annual revenue ready for a multi-channel growth program",
              "Companies with a monthly marketing budget of $15,000–$50,000 seeking coordinated execution",
              "Businesses that have outgrown their current agency and need a more sophisticated partner",
              "Founders and marketing directors who want strategy and execution under one roof",
              "Brands where marketing efficiency — not just volume — has become a bottleneck to growth",
              "B2B companies that need both inbound (SEO + content) and outbound (SDR + LinkedIn) working together",
              "E-commerce brands ready to run paid media, email automation, and social as one coordinated system",
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <li className="flex items-start gap-4 py-4">
                  <svg
                    className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-ice-muted leading-relaxed">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── UPGRADE PATH ── */}
      <UpgradePath
        message="When you're ready for enterprise-level reporting, a dedicated account team, ABM outbound at scale, programmatic advertising, and complete marketing command — Orbit is the top of the stack."
        nextPackage="Orbit"
        nextHref="/packages/orbit"
        nextDescription="Custom reporting, dedicated team, programmatic ads, ABM at scale, and full attribution."
      />

      {/* ── BOTTOM CTA ── */}
      <section className="py-28 px-6 bg-midnight-light border-t border-midnight-muted">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
              Get Started
            </span>
            <div className="w-12 h-0.5 bg-yellow mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-black text-ice mb-5 leading-tight">
              Ready to accelerate across every channel?
            </h2>
            <p className="text-ice-muted text-lg mb-10 leading-relaxed">
              Schedule a free 30-minute strategy call. We&apos;ll map Ascent to your specific
              business, identify the fastest-path channels, and give you a clear first-90-days plan.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-8 py-4 rounded-lg hover:bg-yellow-dark transition-all text-sm"
            >
              Schedule My Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-xs text-ice-muted mt-5">
              No commitment. No sales pressure. A direct conversation about your growth.
            </p>
            <div className="mt-8 pt-8 border-t border-midnight-muted">
              <p className="text-xs text-ice-muted mb-3">Compare packages</p>
              <div className="flex items-center justify-center gap-6">
                <Link
                  href="/packages/launch"
                  className="text-xs text-ice-muted hover:text-yellow transition-colors"
                >
                  ← Launch
                </Link>
                <span className="w-px h-3 bg-midnight-muted" />
                <Link
                  href="/packages"
                  className="text-xs text-ice-muted hover:text-yellow transition-colors"
                >
                  All Packages
                </Link>
                <span className="w-px h-3 bg-midnight-muted" />
                <Link
                  href="/packages/orbit"
                  className="text-xs text-ice-muted hover:text-yellow transition-colors"
                >
                  Orbit →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
