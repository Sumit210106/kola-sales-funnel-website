"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Globe, Code2 } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};



export function Pricing() {
  const tiers = [
    {
      name: "Launch",
      tag: "Best for sole traders",
      price: 99,
      original: 1300,
      cta: "Get my $99 site",
      highlight: false,
      features: [
        "1-page custom website",
        "Mobile & tablet responsive",
        "Contact form + email alerts",
        "Google Maps & social embeds",
        "Basic SEO setup",
        "48-hour delivery",
        "1 round of revisions",
      ],
    },
    {
      name: "Growth",
      tag: "Most popular",
      price: 249,
      original: 2400,
      cta: "Choose Growth",
      highlight: true,
      features: [
        "Up to 5-page website",
        "Everything in Launch",
        "Booking / calendar integration",
        "Stripe or PayPal payments",
        "Newsletter signup + Mailchimp",
        "Advanced on-page SEO",
        "2 rounds of revisions",
        "5-day delivery",
      ],
    },
    {
      name: "Scale",
      tag: "For established brands",
      price: 499,
      original: 5000,
      cta: "Talk to us",
      highlight: false,
      features: [
        "Up to 10-page website",
        "Everything in Growth",
        "Blog / CMS setup",
        "Custom illustrations",
        "Advanced analytics dashboard",
        "Priority AU support",
        "Unlimited revisions (14 days)",
      ],
    },
  ];
  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            Transparent pricing.
            <br />
            <span className="text-gradient">No hidden fees, ever.</span>
          </>
        }
        subtitle="One-off pricing in AUD, GST included. Optional hosting & maintenance from $19/month."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            className={`relative flex flex-col rounded-3xl p-7 shadow-soft transition-all hover:-translate-y-1 ${
              t.highlight
                ? "bg-foreground text-background shadow-elevated"
                : "hairline bg-surface-elevated"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-foreground shadow-glow">
                Most popular
              </span>
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
              <span
                className={`text-[10px] uppercase tracking-widest ${
                  t.highlight ? "text-background/60" : "text-muted-foreground"
                }`}
              >
                {t.tag}
              </span>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className={`text-sm line-through ${t.highlight ? "text-background/50" : "text-muted-foreground"}`}>
                ${t.original}
              </span>
              <span className="font-display text-6xl font-semibold tracking-[-0.04em]">
                ${t.price}
              </span>
              <span className={`mb-2 text-xs ${t.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                AUD
              </span>
            </div>
            <a
              href="#"
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                t.highlight
                  ? "bg-background text-foreground"
                  : "bg-foreground text-background"
              }`}
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <ul className="mt-7 space-y-2.5 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 grid h-4 w-4 place-items-center rounded-full ${
                      t.highlight ? "bg-background/15 text-background" : "bg-foreground text-background"
                    }`}
                  >
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span className={t.highlight ? "text-background/85" : ""}>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5" /> 30-day money-back guarantee
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Code2 className="h-3.5 w-3.5" /> You own 100% of the code
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5" /> Hosting from $19/month (optional)
        </span>
      </div>
    </Section>
  );
}

