import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Quorbit",
  description: "The terms and conditions governing use of Quorbit's website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the Quorbit website (quorbit.agency) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
      "These terms apply to all visitors, clients, and others who access or use our services. We reserve the right to update these terms at any time, and your continued use of our website constitutes acceptance of any changes.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "Quorbit provides digital marketing services including, but not limited to, performance marketing, e-commerce management, SEO, paid media, email marketing, social media management, and website development.",
      "The specific scope, deliverables, timelines, and fees for any engagement are set out in a separate Service Agreement or Statement of Work signed between Quorbit and the client.",
      "We reserve the right to refuse service to any individual or organisation at our sole discretion.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    body: [
      "You agree to provide accurate, current, and complete information as required for the delivery of services.",
      "You are responsible for maintaining the confidentiality of any account credentials or access we provide and for all activities that occur under those credentials.",
      "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our ability to deliver services.",
      "You grant Quorbit a limited, non-exclusive licence to use your brand assets, content, and data solely for the purpose of delivering agreed services.",
    ],
  },
  {
    title: "4. Fees and Payment",
    body: [
      "Fees for services are as agreed in the relevant Service Agreement. Unless otherwise stated, invoices are payable within 14 days of issue.",
      "Late payments may attract interest at a rate of 2% per month on the outstanding balance.",
      "Quorbit reserves the right to suspend or terminate services if payment obligations are not met.",
      "All fees are exclusive of applicable taxes (e.g., GST, VAT) unless stated otherwise.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "All content on the Quorbit website — including text, graphics, logos, images, and software — is the property of Quorbit or its content suppliers and is protected by applicable intellectual property laws.",
      "Upon full payment of all fees, you own the deliverables created specifically for you under a Service Agreement. Quorbit retains ownership of any pre-existing intellectual property, methodologies, tools, or frameworks used in delivering the services.",
      "You may not reproduce, distribute, or create derivative works of our website content without our express written permission.",
    ],
  },
  {
    title: "6. Confidentiality",
    body: [
      "Both parties agree to keep confidential any non-public information received from the other party in connection with the services.",
      "This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
      "Quorbit may reference your company name and general results in case studies or marketing materials unless you request otherwise in writing.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Quorbit's total liability for any claim arising out of or related to our services shall not exceed the total fees paid by you in the three months preceding the claim.",
      "Quorbit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data, even if we have been advised of the possibility of such damages.",
      "We do not guarantee specific results from our marketing services. Performance outcomes depend on many factors beyond our control, including market conditions, platform algorithm changes, and client-side decisions.",
    ],
  },
  {
    title: "8. Termination",
    body: [
      "Either party may terminate a Service Agreement by providing written notice as specified in that agreement.",
      "Quorbit may terminate immediately if you breach these terms or any Service Agreement and fail to remedy that breach within 7 days of written notice.",
      "Upon termination, you remain liable for all fees for services rendered up to the termination date. Quorbit will return or transfer your data and assets within a reasonable timeframe.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These terms are governed by the laws of the jurisdiction in which Quorbit is registered. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of that jurisdiction.",
      "We encourage resolution of disputes through good-faith discussion before resorting to formal legal proceedings.",
    ],
  },
  {
    title: "10. Website Use",
    body: [
      "You may use our website for lawful purposes only. You must not use the site in any way that breaches applicable laws, is fraudulent, or causes harm to any person.",
      "We make no warranty that our website will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "Links to third-party websites are provided for convenience only. We accept no responsibility for their content or practices.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      "For questions about these Terms of Service, please contact us:",
      "**Email:** hello@quorbit.agency",
      "**Website:** quorbit.agency/contact",
    ],
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-ice-muted text-lg leading-relaxed max-w-xl">
            The terms and conditions governing use of Quorbit&apos;s website and services. Effective date: June 2025.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-ice-muted leading-relaxed mb-12 border-l-4 border-yellow pl-6 text-sm">
            Please read these Terms of Service carefully before using our website or engaging our services. By using quorbit.agency, you agree to be bound by these terms.
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
            <Link href="/privacy" className="inline-flex items-center gap-2 border border-midnight-muted text-ice-muted font-semibold px-6 py-3 text-sm rounded-lg hover:border-yellow hover:text-yellow transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
