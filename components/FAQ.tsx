"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};



export function FAQ() {
  const faqs = [
    {
      q: "What happens after I pay the $99?",
      a: "You'll receive a confirmation email with a short questionnaire about your business, brand and content. Once submitted, our team starts designing within hours.",
    },
    {
      q: "Can I upgrade to more pages later?",
      a: "Absolutely. Add extra pages, blog setup, e-commerce or bookings any time — pricing is transparent and modular.",
    },
    {
      q: "Do I own the website?",
      a: "Yes — 100%. The design, code and domain are all yours. We never lock you in or hold your site hostage.",
    },
    {
      q: "What if I'm not satisfied?",
      a: "We offer a 30-day money-back guarantee. If you're not happy with the final result, you get a full refund — no questions asked.",
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Every site is mobile-first by default and tested across iOS, Android and tablets before delivery.",
    },
    {
      q: "Do you provide hosting?",
      a: "Optional Australian-based hosting & maintenance is available from $19/month, including SSL, backups and updates.",
    },
    {
      q: "Is GST included in pricing?",
      a: "Yes. All prices on this page are in AUD and include GST.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
      <div className="mx-auto max-w-3xl divide-y divide-hairline overflow-hidden rounded-3xl hairline bg-surface-elevated">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="px-6">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-medium">{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full hairline bg-surface text-muted-foreground"
                >
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

