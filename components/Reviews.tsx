"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reviews() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Trades", "Retail", "Wellness & Beauty"];

  const reviews = [
    {
      quote: "Kola delivered our flooring showroom site in 48 hours. The local quote requests we receive daily have completely changed our business model.",
      name: "David Fletcher",
      role: "Carpet Cuts · Melbourne",
      category: "Trades",
      avatarGrad: "from-blue-500 to-indigo-600",
    },
    {
      quote: "The aesthetic is pure luxury. We showcase our fine collections beautifully, and the direct WhatsApp inquiries have converted like crazy.",
      name: "Sofia Zevana",
      role: "Zevana Jewels · Sydney",
      category: "Retail",
      avatarGrad: "from-purple-500 to-pink-600",
    },
    {
      quote: "As a tradie, I assumed a website would cost thousands. They got me online fast — and my phone hasn't stopped ringing.",
      name: "James Patterson",
      role: "Patterson Plumbing · Sydney",
      category: "Trades",
      avatarGrad: "from-cyan-500 to-blue-600",
    },
    {
      quote: "Filled out a form, two days later my beautiful site was live. Best $99 I've ever spent on my business.",
      name: "Emma Richardson",
      role: "Bloom Florists · Brisbane",
      category: "Retail",
      avatarGrad: "from-pink-500 to-rose-600",
    },
    {
      quote: "The team understood our brand instantly. Bookings went up 40% in the first month after launch.",
      name: "Liam Chen",
      role: "North Yoga · Perth",
      category: "Wellness & Beauty",
      avatarGrad: "from-emerald-500 to-teal-600",
    },
    {
      quote: "Honestly cheaper than what I was paying Squarespace, and looks ten times better. Easy decision.",
      name: "Priya Nair",
      role: "The Bay Salon · Gold Coast",
      category: "Wellness & Beauty",
      avatarGrad: "from-orange-400 to-amber-600",
    },
  ];

  const filteredReviews = reviews.filter(
    (r) => activeCategory === "All" || r.category === activeCategory
  );

  return (
    <Section id="reviews" className="bg-surface relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-32 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl" aria-hidden />

      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Eyebrow>Customer love</Eyebrow>
          <h2 className="mt-3 max-w-xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Loved by Australian
            <br />
            <span className="text-gradient">small business owners.</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 rounded-full hairline bg-surface-elevated px-4 py-2 shadow-soft">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-[oklch(0.78_0.18_75)]" />
            ))}
          </div>
          <span className="text-sm font-semibold">4.9 / 5</span>
          <span className="text-sm text-muted-foreground">· 127 reviews</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-background"
                  : "text-muted-foreground hairline hover:bg-surface-elevated hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeReviewCategory"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Dynamic Animated Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredReviews.map((r, i) => (
            <motion.figure
              key={r.name}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.45, ease }}
              className="group relative flex flex-col justify-between rounded-3xl bg-surface-elevated p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300 border border-hairline/10 hover:border-hairline"
            >
              <div>
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current text-[oklch(0.78_0.18_75)]" />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground/60 bg-surface px-2 py-0.5 rounded-full">
                    {r.category}
                  </span>
                </div>
                <blockquote className="text-[14px] leading-relaxed text-foreground/90 font-medium italic">
                  "{r.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${r.avatarGrad} font-bold text-white text-xs shadow-soft`}>
                  {r.name[0]}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
