"use client";

import { motion } from "framer-motion";
import { Palette , Smartphone, MessageSquare, Zap, Search, Calendar, CreditCard, BarChart3 } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};



export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Features"
        title={
          <>
            Built like a SaaS product.
            <br />
            <span className="text-gradient">Priced like a coffee.</span>
          </>
        }
        subtitle="Every site ships with the essentials a modern small business needs to look credible and convert visitors."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[180px]">
        {/* Big tile - design */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl hairline bg-surface-elevated p-7 shadow-soft md:col-span-4"
        >
          <div className="absolute inset-0 bg-hero opacity-60" aria-hidden />
          <div className="relative">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground text-background">
              <Palette className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
              Custom design — not a template.
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Every site is hand-designed around your brand, voice and customers. No
              cookie-cutter themes, no drag-and-drop fingerprints.
            </p>
          </div>
          <div className="relative mt-6 grid grid-cols-3 gap-3">
            {[
              "oklch(0.62 0.18 260)",
              "oklch(0.74 0.16 35)",
              "oklch(0.7 0.18 200)",
            ].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="aspect-[4/3] rounded-2xl shadow-soft"
                style={{ background: c }}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile */}
        <BentoCard
          icon={Smartphone}
          title="Pixel-perfect on every device"
          desc="Mobile-first by default. Tested on iOS, Android, tablets and desktop."
          colSpan="md:col-span-2"
        />

        {/* Speed */}
        <BentoCard
          icon={Zap}
          title="Lightning-fast load times"
          desc="98+ PageSpeed scores. Optimised images, modern stack, edge-cached."
          colSpan="md:col-span-2"
          extra={
            <div className="mt-5 flex items-end gap-1">
              {[40, 60, 75, 90, 98].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease }}
                  className="w-3 rounded-t bg-brand"
                  style={{ height: `${h}%` }}
                />
              ))}
              <span className="ml-2 text-xs text-muted-foreground">PageSpeed</span>
            </div>
          }
        />

        {/* SEO */}
        <BentoCard
          icon={Search}
          title="SEO foundations baked in"
          desc="Meta tags, schema, sitemaps, fast Core Web Vitals — Google-ready on day one."
          colSpan="md:col-span-3"
        />

        {/* Forms */}
        <BentoCard
          icon={MessageSquare}
          title="Lead-capture forms that work"
          desc="Spam-protected forms wired to your inbox the moment your site goes live."
          colSpan="md:col-span-3"
        />

        {/* Bookings */}
        <BentoCard
          icon={Calendar}
          title="Bookings & calendars"
          desc="Optional Calendly / Square Appointments — let clients book in two taps."
          colSpan="md:col-span-2"
        />
        {/* Payments */}
        <BentoCard
          icon={CreditCard}
          title="Stripe & PayPal payments"
          desc="Accept deposits or sell products without a separate platform."
          colSpan="md:col-span-2"
        />
        {/* Analytics */}
        <BentoCard
          icon={BarChart3}
          title="Real analytics, no fluff"
          desc="GA4 or Plausible — see exactly what's converting from day one."
          colSpan="md:col-span-2"
        />
      </div>
    </Section>
  );
}

export function BentoCard({
  icon: I,
  title,
  desc,
  colSpan = "",
  extra,
}: {
  icon: typeof Zap;
  title: string;
  desc: string;
  colSpan?: string;
  extra?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
      className={`group relative overflow-hidden rounded-3xl hairline bg-surface-elevated p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated ${colSpan}`}
    >
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
        <I className="h-4 w-4" />
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      {extra}
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
    </motion.div>
  );
}

