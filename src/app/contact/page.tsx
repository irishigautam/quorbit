import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Strategy Call — Quorbit",
  description: "Schedule a free 30-minute strategy call with the Quorbit team. No commitment, no long-deck sales pitch.",
};

const services = [
  "Performance Marketing",
  "E-Commerce Management & Ads",
  "All-in-One Digital Marketing",
  "Website Development & Automation",
  "Not Sure Yet",
];

const budgets = [
  "Under $2K/month",
  "$2K–$5K/month",
  "$5K–$20K/month",
  "$20K–$50K/month",
  "$50K+/month",
  "Prefer not to say",
];

const sources = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Other",
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-950 text-white pt-20 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 border border-gray-700 rounded-full px-3 py-1 mb-6">
            Free Strategy Call
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Schedule a Call</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            30 minutes. No commitment. No long-deck sales pitch. Just a direct conversation with someone who&apos;s done this before.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-950 mb-1.5">
                  First Name <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-950 mb-1.5">
                  Last Name <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-950 mb-1.5">
                  Company Name <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-950 mb-1.5">
                  Company Website
                </label>
                <input
                  type="url"
                  name="website"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition"
                  placeholder="https://acme.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-950 mb-1.5">
                Which service are you interested in? <span className="text-gray-400">*</span>
              </label>
              <select
                name="service"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 bg-white focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-950 mb-1.5">
                Current monthly marketing budget
              </label>
              <select
                name="budget"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 bg-white focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition"
              >
                <option value="">Select a range</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-950 mb-1.5">
                What&apos;s your biggest marketing challenge right now? <span className="text-gray-400">*</span>
              </label>
              <textarea
                name="challenge"
                required
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition resize-none"
                placeholder="Tell us what's not working or where you want to grow..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-950 mb-1.5">
                How did you hear about us?
              </label>
              <select
                name="source"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-950 bg-white focus:outline-none focus:ring-2 focus:ring-gray-950 focus:border-transparent transition"
              >
                <option value="">Select an option</option>
                {sources.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-950 text-white font-semibold py-3.5 rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Submit &amp; Schedule My Call
            </button>
            <p className="text-xs text-gray-400 text-center">
              You&apos;ll hear from us within one business day to confirm your call time.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
