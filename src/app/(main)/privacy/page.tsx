import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Quorbit",
  description: "How Quorbit collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "**Contact and inquiry data** — When you fill out our contact form or schedule a strategy call, we collect your name, email address, company name, and any details you provide about your goals or budget.",
      "**Usage data** — We automatically collect standard web log data when you visit our site, including your IP address, browser type, pages visited, and time spent on pages. This data is aggregated and non-personally identifiable.",
      "**Communications** — If you email us or interact with us through other channels, we retain records of that communication.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "To respond to your inquiries and schedule strategy calls.",
      "To deliver services you have engaged us for and manage our client relationship.",
      "To send you relevant updates, case studies, or marketing insights — only if you have opted in.",
      "To improve our website, understand audience behaviour, and refine our service offering.",
      "To comply with legal obligations or resolve disputes.",
    ],
  },
  {
    title: "3. Sharing of Information",
    body: [
      "We do not sell, rent, or trade your personal information to any third party.",
      "We may share data with trusted service providers (e.g., email platforms, analytics tools, CRM software) strictly to operate our business. These providers are bound by confidentiality agreements.",
      "We may disclose information if required by law, court order, or to protect the rights and safety of Quorbit or others.",
    ],
  },
  {
    title: "4. Cookies and Tracking",
    body: [
      "Our website uses cookies to enhance your browsing experience. These include strictly necessary cookies (required for the site to function) and analytics cookies (to understand how visitors interact with our site).",
      "You can disable cookies in your browser settings. Note that disabling certain cookies may affect site functionality.",
      "We use Google Analytics or similar tools in an anonymised mode. We do not use cookies for retargeting or cross-site advertising.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "Inquiry and contact data is retained for as long as necessary to fulfil the purpose it was collected for, or as required by law.",
      "If you become a client, we retain relevant records for a minimum of 5 years for accounting and legal compliance purposes.",
      "You may request deletion of your data at any time by contacting us at the address below.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You have the right to access, correct, or request deletion of any personal data we hold about you.",
      "You may opt out of marketing communications at any time by clicking 'Unsubscribe' in any email or contacting us directly.",
      "If you are located in the EU/EEA, you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability and the right to lodge a complaint with a supervisory authority.",
    ],
  },
  {
    title: "7. Security",
    body: [
      "We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction.",
      "While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "8. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policies of any site you visit.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website following changes constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your data, please contact us at:",
      "**Email:** hello@quorbit.agency",
      "**Website:** quorbit.agency/contact",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* Hero */}
      <section
        className="relative bg-midnight pt-24 pb-20 px-6 border-b border-midnight-muted overflow-hidden"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-6">Legal</span>
          <div className="w-12 h-0.5 bg-yellow mb-7" />
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] text-ice mb-5">
            Privacy Policy
          </h1>
          <p className="text-ice-muted text-lg leading-relaxed max-w-xl">
            How we collect, use, and protect your personal information. Effective date: June 2025.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-ice-muted leading-relaxed mb-12 border-l-4 border-yellow pl-6 text-sm">
            Quorbit (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy explains what information we collect, why we collect it, and how we use it.
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-midnight-muted pb-12 last:border-0">
                <h2 className="text-lg font-black text-ice mb-5">{section.title}</h2>
                <ul className="space-y-3">
                  {section.body.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ice-muted leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-yellow shrink-0 mt-2" />
                      <span dangerouslySetInnerHTML={{
                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ice font-semibold">$1</strong>')
                      }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-midnight-muted flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3 text-sm rounded-lg hover:bg-yellow-dark transition-colors">
              Contact Us
            </Link>
            <Link href="/terms" className="inline-flex items-center gap-2 border border-midnight-muted text-ice-muted font-semibold px-6 py-3 text-sm rounded-lg hover:border-yellow hover:text-yellow transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
