import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Quorbit",
  description: "Get in touch with the Quorbit team. Tell us about your business, your goals, and what's not working — and we'll come back with a clear path forward.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-midnight pt-24 pb-28 px-6 overflow-hidden border-b border-midnight-muted"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative max-w-4xl mx-auto">
          <ServiceHero
            badge="Get in Touch"
            headline="Let's Talk Growth"
            subheadline="30 minutes. No commitment. No long-deck sales pitch. Just a direct conversation with someone who's done this before."
          />
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-midnight-light">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
