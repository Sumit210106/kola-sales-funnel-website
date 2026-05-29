"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";
import { Section } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  return (
    <Section id="cta" className="!py-20 border-t border-hairline/50">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Zap className="h-3.5 w-3.5" />
            Limited Availability
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground max-w-2xl leading-[1.1]">
            Ready to get online?
          </h2>
          
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Join other local Aussie businesses with a premium, Sydney-coded landing page for just A$99. Delivered in 48 hours. 100% money-back guarantee.
          </p>
          
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background shadow-soft transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Get my $99 website now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-muted-foreground/60" /> 30-day money-back
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-muted-foreground/60" /> Secured with Stripe
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}



