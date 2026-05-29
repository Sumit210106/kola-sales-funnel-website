"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Section, Eyebrow } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;

interface ReviewItem {
  quote: string;
  name: string;
  role: string;
  avatarGrad: string;
  metric: string;
}

function ReviewCard({ r }: { r: ReviewItem }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <Quote className="absolute right-6 top-6 h-8 w-8 text-foreground/5 rotate-180 pointer-events-none" />

      <div className="relative">
        {/* SaaS Metric Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.55_0.16_150)/0.08] px-3 py-1 text-xs font-semibold text-[oklch(0.55_0.16_150)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.16_150)]" />
          {r.metric}
        </div>

        <div className="mb-3 flex gap-0.5">
          {[...Array(5)].map((_, k) => (
            <Star key={k} className="h-3.5 w-3.5 fill-current text-accent-coral" />
          ))}
        </div>

        <blockquote className="text-[14px] leading-relaxed text-foreground/90 font-medium italic">
          "{r.quote}"
        </blockquote>
      </div>

      <div className="mt-6 flex items-center gap-3 relative border-t border-hairline/40 pt-4">
        <span className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br ${r.avatarGrad} font-bold text-white text-xs`}>
          {r.name[0]}
        </span>
        <div>
          <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
            {r.name}
            <CheckCircle2 className="h-3.5 w-3.5 fill-current text-[oklch(0.55_0.16_150)] text-white" />
          </div>
          <div className="text-xs text-muted-foreground font-medium">{r.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const [mounted, setMounted] = useState(false);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [activeDesktopIndex, setActiveDesktopIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reviews = [
    {
      quote: "Launched on Tuesday, and had 14 high-ticket quote requests by Friday. It completely changed our business.",
      name: "David Fletcher",
      role: "Carpet Cuts · Melbourne",
      avatarGrad: "from-blue-500 to-indigo-600",
      metric: "14 Leads in 3 Days",
    },
    {
      quote: "Our conversion rate from paid traffic jumped 300% in the first month. The direct integration is a game-changer.",
      name: "Sofia Zevana",
      role: "Zevana Jewels · Sydney",
      avatarGrad: "from-purple-500 to-pink-600",
      metric: "+300% Conversion",
    },

  ];

  const total = reviews.length;
  const isGridDesktop = total <= 3;

  // SSR Fallback (Static Grid of first 3 items or all items)
  if (!mounted) {
    return (
      <Section id="reviews" className="bg-surface relative overflow-hidden">
        <div className="mb-12 flex flex-col items-center text-center">
          <Eyebrow>Verified Outcomes</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Websites that pay for <span className="text-gradient">themselves.</span>
          </h2>
          <p className="mt-3 max-w-lg text-balance text-base text-muted-foreground">
            See how Australian business owners turn cold Google and Meta Ads traffic into paying customers.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reviews.slice(0, 3).map((r, idx) => (
            <div
              key={`${r.name}-${idx}`}
              className="group relative flex flex-col justify-between rounded-3xl bg-surface-elevated/70 p-8 shadow-soft border border-hairline/60"
            >
              <ReviewCard r={r} />
            </div>
          ))}
        </div>
      </Section>
    );
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : dir < 0 ? -80 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : dir > 0 ? -80 : 0,
      opacity: 0,
    }),
  };

  return (
    <Section id="reviews" className="bg-surface relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden />
      <div className="absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-accent-coral/5 blur-3xl" aria-hidden />

      {/* Header section - concise & outcome-driven */}
      <div className="mb-12 flex flex-col items-center text-center">
        <Eyebrow>Verified Outcomes</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
          Websites that pay for <span className="text-gradient">themselves.</span>
        </h2>
        <p className="mt-3 max-w-lg text-balance text-base text-muted-foreground">
          See how Australian business owners turn cold Google and Meta Ads traffic into paying customers.
        </p>

        {/* Global score indicator */}
        <div className="mt-5 flex items-center gap-2 rounded-full border border-hairline/80 bg-surface-elevated/80 px-4 py-1.5 shadow-soft backdrop-blur-xs">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-accent-coral" />
            ))}
          </div>
          <span className="text-xs font-semibold text-foreground">4.9/5 Rating</span>
          <span className="text-muted-foreground text-xs font-medium">· Verified Clients</span>
        </div>
      </div>

      {/* Desktop Layout (Hidden on Mobile) */}
      <div className="hidden md:block">
        {isGridDesktop ? (
          /* Dynamic Grid based on review count (max 3) */
          <div
            className={`grid gap-6 ${
              total === 1
                ? "grid-cols-1 max-w-xl mx-auto"
                : total === 2
                  ? "grid-cols-2 max-w-4xl mx-auto"
                  : "grid-cols-3 max-w-6xl mx-auto"
            }`}
          >
            {reviews.map((r, idx) => (
              <div
                key={`${r.name}-${idx}`}
                className="group relative flex flex-col justify-between rounded-3xl bg-surface-elevated/70 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-hairline/60 hover:border-brand/40 hover:-translate-y-0.5 backdrop-blur-xs"
              >
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        ) : (
          /* Desktop Carousel Layout when reviews count > 3 */
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="relative flex gap-6 transition-all duration-500 ease-out"
                style={{ left: `calc(-${activeDesktopIndex} * (100% + 24px) / 3)` }}
              >
                {reviews.map((r, idx) => (
                  <div
                    key={`${r.name}-${idx}`}
                    className="w-[calc((100%-48px)/3)] shrink-0 group relative flex flex-col justify-between rounded-3xl bg-surface-elevated/70 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-hairline/60 hover:border-brand/40 backdrop-blur-xs animate-fade-in"
                  >
                    <ReviewCard r={r} />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Carousel Controls */}
            <div className="mt-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex gap-1.5">
                {[...Array(total - 2)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDesktopIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeDesktopIndex ? "w-6 bg-foreground" : "w-2 bg-foreground/20"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    if (activeDesktopIndex > 0) setActiveDesktopIndex(activeDesktopIndex - 1);
                  }}
                  disabled={activeDesktopIndex === 0}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface-elevated text-foreground shadow-soft transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  <ArrowLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={() => {
                    if (activeDesktopIndex < total - 3) setActiveDesktopIndex(activeDesktopIndex + 1);
                  }}
                  disabled={activeDesktopIndex === total - 3}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface-elevated text-foreground shadow-soft transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Layout (Hidden on Desktop) */}
      <div className="md:hidden">
        {total === 1 ? (
          /* Single Review Layout for Mobile (No Carousel needed) */
          <div className="group relative flex flex-col justify-between rounded-3xl bg-surface-elevated p-8 shadow-soft border border-hairline/60 max-w-md mx-auto">
            <ReviewCard r={reviews[0]} />
          </div>
        ) : (
          /* Mobile swipeable Carousel when total reviews > 1 */
          <div className="relative mt-4">
            <div className="overflow-hidden px-1 py-3 min-h-[300px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`${reviews[activeMobileIndex].name}-${activeMobileIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(e, info) => {
                    const swipe = info.offset.x;
                    if (swipe < -50) {
                      if (activeMobileIndex < total - 1) {
                        setDirection(1);
                        setActiveMobileIndex(activeMobileIndex + 1);
                      }
                    } else if (swipe > 50) {
                      if (activeMobileIndex > 0) {
                        setDirection(-1);
                        setActiveMobileIndex(activeMobileIndex - 1);
                      }
                    }
                  }}
                  className="group relative flex flex-col justify-between rounded-3xl bg-surface-elevated p-8 shadow-elevated border border-hairline/60 cursor-grab active:cursor-grabbing min-h-[250px]"
                >
                  <ReviewCard r={reviews[activeMobileIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Carousel controls */}
            <div className="mt-4 flex items-center justify-between px-2">
              {/* Dots */}
              <div className="flex gap-1.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeMobileIndex ? 1 : -1);
                      setActiveMobileIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeMobileIndex ? "w-6 bg-foreground" : "w-2 bg-foreground/20"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    if (activeMobileIndex > 0) {
                      setDirection(-1);
                      setActiveMobileIndex(activeMobileIndex - 1);
                    }
                  }}
                  disabled={activeMobileIndex === 0}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface-elevated text-foreground shadow-soft transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  <ArrowLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={() => {
                    if (activeMobileIndex < total - 1) {
                      setDirection(1);
                      setActiveMobileIndex(activeMobileIndex + 1);
                    }
                  }}
                  disabled={activeMobileIndex === total - 1}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface-elevated text-foreground shadow-soft transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                >
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
