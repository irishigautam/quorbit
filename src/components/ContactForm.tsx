"use client";

import { useRef, useState } from "react";

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

const sources = ["Google Search", "LinkedIn", "Referral", "Social Media", "Other"];

const inputClass =
  "w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice placeholder-ice-muted/40 focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition";

const selectClass =
  "w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);
    setError(null);

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      formRef.current.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-ice mb-1.5">
            First Name <span className="text-yellow">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Jane"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ice mb-1.5">
            Last Name <span className="text-yellow">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-ice mb-1.5">
            Email Address <span className="text-yellow">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@acme.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ice mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 555 000 0000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Company + Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-ice mb-1.5">
            Company Name <span className="text-yellow">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Acme Inc."
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ice mb-1.5">
            Company Website
          </label>
          <input
            type="url"
            name="website"
            placeholder="https://acme.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-semibold text-ice mb-1.5">
          Which service are you interested in? <span className="text-yellow">*</span>
        </label>
        <select name="service" required className={selectClass}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold text-ice mb-1.5">
          Current monthly marketing budget
        </label>
        <select name="budget" className={selectClass}>
          <option value="">Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Challenge */}
      <div>
        <label className="block text-sm font-semibold text-ice mb-1.5">
          What&apos;s your biggest marketing challenge right now? <span className="text-yellow">*</span>
        </label>
        <textarea
          name="challenge"
          required
          rows={4}
          placeholder="Tell us what's not working or where you want to grow..."
          className="w-full bg-midnight border border-midnight-muted rounded-lg px-4 py-3 text-sm text-ice placeholder-ice-muted/40 focus:outline-none focus:border-yellow/60 focus:ring-1 focus:ring-yellow/30 transition resize-none"
        />
      </div>

      {/* Source */}
      <div>
        <label className="block text-sm font-semibold text-ice mb-1.5">
          How did you hear about us?
        </label>
        <select name="source" className={selectClass}>
          <option value="">Select an option</option>
          {sources.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Server-side error message */}
      {error && (
        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-yellow text-midnight font-bold py-3.5 rounded-lg hover:bg-yellow-dark transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Submit & Schedule My Call"}
      </button>
      <p className="text-xs text-ice-muted text-center">
        You&apos;ll hear from us within one business day to confirm your call time.
      </p>
    </form>
  );
}
