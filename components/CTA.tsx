"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Clock } from "lucide-react";
import { Section } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};



export function CTA() {
  return (
    <Section className="!pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-[2rem] bg-foreground px-8 py-20 text-center text-background md:px-16 md:py-28"
      >
        <div className="absolute inset-0 grid-bg opacity-[0.07]" aria-hidden />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px 300px at 30% 0%, oklch(0.7 0.17 280 / 0.7), transparent 60%), radial-gradient(500px 250px at 80% 100%, oklch(0.74 0.16 35 / 0.55), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
            Ready to get online?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-background/70 md:text-lg">
            Join 500+ Australian businesses with a premium website for just $99. 48-hour
            delivery. 30-day money-back guarantee.
          </p>
          <a
            href="#pricing"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground shadow-elevated transition-transform hover:scale-[1.02]"
          >
            Get my $99 website now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-background/60">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" /> 30-day money-back
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> 48-hour delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" /> No hidden fees
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

