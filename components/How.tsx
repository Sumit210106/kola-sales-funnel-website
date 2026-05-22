"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};



export function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Place your order",
      d: "Pay $99 and complete a 5-minute questionnaire about your business.",
    },
    {
      n: "02",
      t: "We design & build",
      d: "An Australian designer crafts your site within 48 hours.",
    },
    {
      n: "03",
      t: "Review & revise",
      d: "Get a private preview link, request changes, and approve.",
    },
    {
      n: "04",
      t: "Go live",
      d: "We launch your site to the world and hand over full ownership.",
    },
  ];
  return (
    <Section id="how" className="bg-surface">
      <SectionHeader
        eyebrow="Process"
        title={
          <>
            From idea to launch — <span className="text-gradient">in days, not months.</span>
          </>
        }
      />
      <div className="relative grid grid-cols-1 gap-5 md:grid-cols-4">
        <div
          className="absolute left-0 right-0 top-12 hidden h-px md:block"
          style={{
            background:
              "repeating-linear-gradient(90deg, var(--hairline) 0 6px, transparent 6px 12px)",
          }}
          aria-hidden
        />
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            className="relative rounded-3xl hairline bg-surface-elevated p-6 shadow-soft"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground font-display text-sm font-semibold text-background">
              {s.n}
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{s.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

