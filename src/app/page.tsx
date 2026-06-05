import Link from "next/link";

const services = [
  {
    badge: "Paid Media",
    title: "Performance Marketing",
    body: "Full-funnel paid media management across Google, Meta, LinkedIn, and YouTube. Every dollar traceable to a business outcome.",
    href: "/services/performance-marketing",
  },
  {
    badge: "E-Commerce",
    title: "E-Commerce Platform Management & Ads",
    body: "End-to-end e-commerce growth — platform management, catalog optimization, and performance advertising built to scale revenue.",
    href: "/services/ecommerce",
  },
  {
    badge: "All-in-One",
    title: "All-in-One Digital Marketing",
    body: "SEO, paid media, email marketing, and social media under one coordinated strategy — so your channels work together, not against each other.",
    href: "/services/all-in-one",
  },
  {
    badge: "Tech & Systems",
    title: "Website Development & Automation",
    body: "Websites, CRM, and marketing automation systems — designed, built, and integrated to turn traffic into revenue.",
    href: "/services/website-automation",
  },
];

const stats = [
  { number: "3x", label: "Average revenue lift in 6 months" },
  { number: "140%", label: "Organic traffic growth" },
  { number: "$94K", label: "Monthly revenue scaled from $28K" },
  { number: "31%", label: "Paid CAC reduction" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-950 text-white pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 border border-gray-700 rounded-full px-3 py-1 mb-8">
              Performance Digital Marketing
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Marketing that moves{" "}
              <span className="text-gray-400">the needle.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Quorbit is a full-service digital marketing agency built for ambitious brands. One partner across every channel, one strategy, one set of outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-950 font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule a Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 font-medium px-6 py-3.5 rounded-lg hover:border-gray-500 hover:text-white transition-colors"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-gray-950">{s.number}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-gray-950 mb-4">What We Do</h2>
            <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
              Four core services, built to work independently or as a unified growth stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group block bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  {svc.badge}
                </span>
                <h3 className="text-lg font-semibold text-gray-950 mb-3 group-hover:text-gray-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{svc.body}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-950">
                  Learn more
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quorbit */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-950 mb-6">
              One partner. Every channel. Full accountability.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most businesses don't have a marketing problem — they have a coordination problem. Channels managed in silos, budgets duplicated, attribution a guessing game.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Quorbit fixes this from the ground up. We manage your entire growth stack with one strategy, one voice, and one set of outcomes everyone is accountable to.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-950 text-white font-semibold px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "Senior-led accounts", body: "Strategists who have operated at the CMO level. Not account managers who know a little about everything." },
              { title: "Revenue-first reporting", body: "Every report connects back to revenue and pipeline — not channel vanity metrics." },
              { title: "Transparent and direct", body: "We push back when something won't work. Transparency isn't a bonus here — it's the baseline." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-gray-950 mb-1">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-gray-950 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to make your marketing actually work?</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Schedule a free 30-minute strategy call. Come with your current setup and goals. We&apos;ll come with an honest read on where you are and a clear path forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-950 font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule My Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-gray-500 mt-4">No commitment required. No long-deck sales pitch. Just a direct conversation.</p>
        </div>
      </section>
    </div>
  );
}
