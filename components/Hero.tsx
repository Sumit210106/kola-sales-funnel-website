"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { PrimaryCTA, GhostCTA } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const checks = [
  "48-Hour Delivery Guarantee",
  "100% Risk-Free (30-Day Refund)",
  "Engineered for Google Ads & SEO",
];

export function Hero() {

  return (
    <section id="top" className="relative overflow-hidden bg-hero px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:min-h-170 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full hairline bg-surface-elevated/75 px-3 py-1.5 text-xs font-medium text-accent-coral shadow-soft backdrop-blur animate-pulse"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-coral" />
            🚨 97% of traffic bounces on old websites. We build sites that convert.
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold leading-[0.98] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          >
            A conversion ready website, live in{" "}
            <span className="text-gradient">48 hours.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            Most websites lose 97% of visitors due to bad layout or slow load times. We build premium website funnels that turn cold clicks into paying customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease }}
            className="mt-8 flex w-full flex-col gap-4"
          >
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <PrimaryCTA>Claim My Lead Funnel</PrimaryCTA>
              <GhostCTA href="#pricing">See Pricing Plans</GhostCTA>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-medium text-accent-coral">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-coral"></span>
              </span>
              <span>⚡ Only 2 onboarding spots remaining this week. Max 5 clients per week.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="mt-8 grid w-full grid-cols-1 gap-2 border-t border-hairline pt-6 sm:grid-cols-2"
          >
            {checks.map((c) => (
              <span key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[oklch(0.55_0.16_150)]" />
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.75, ease }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          {/* <div className="absolute -inset-8 rounded-[3rem]  blur-3xl" aria-hidden /> */}
          <div className="relative overflow-hidden p-3">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/691/492/small/ribbon-sales-funnel-vector-diagram-template.jpg"
              alt="Ribbon Sales Funnel Diagram"
              className="w-full min-h-[360px] sm:min-h-[460px] lg:min-h-[560px] object-contain rounded-[1.75rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
