"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Zap, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "./Primitives";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ease = [0.22, 1, 0.36, 1] as const;

export function Showcase() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const cards = useMemo(() => [
    {
      tag: "Flooring & Trades",
      name: "Carpet Cuts",
      city: "Melbourne",
      grad: "linear-gradient(135deg, oklch(0.62 0.15 240), oklch(0.35 0.12 270))",
      url: "https://carpetcuts.au/",
      description: "Carpet Cuts is one of Melbourne's premier carpet and flooring installation specialists. We delivered a high-performance, mobile-first product showcase that displays their extensive flooring range and allows clients to book on-site room measurements directly from their phones.",
      features: [
        "Interactive Product Catalog",
        "On-Site Booking System",
        "Local SEO Dominance",
        "Mobile-First Layout",
      ],
      performance: "98 / 100",
      delivery: "48 hours",
    },
    {
      tag: "Boutique Retail",
      name: "Zevana Jewels",
      city: "Sydney",
      grad: "linear-gradient(135deg, oklch(0.75 0.14 320), oklch(0.5 0.16 350))",
      url: "https://zevanajewels.com.au/",
      description: "Zevana Jewels crafts bespoke luxury fine jewelry. We built an elegant digital presence that mirrors their high-end craftsmanship, showcasing collections through high-fidelity visual grids and integrating a streamlined direct inquiry funnel.",
      features: [
        "Luxury Typography Set",
        "High-Resolution Galleries",
        "Direct Inquiry Routing",
        "Instant Image Optimization",
      ],
      performance: "99 / 100",
      delivery: "48 hours",
    },
    {
      tag: "Hospitality",
      name: "Stoneoak Café",
      city: "Melbourne",
      grad: "linear-gradient(135deg, oklch(0.78 0.12 60), oklch(0.55 0.16 30))",
      url: "https://example.com/stoneoak",
      description: "A popular local café and brunch destination. We designed and built a web experience showcasing their menus, dynamic trading hours, and reservation integrations to capture local customer bookings.",
      features: [
        "Dynamic Menu Panels",
        "Booking Engine Sync",
        "Structured Location Data",
        "Instant-load Menu Assets",
      ],
      performance: "100 / 100",
      delivery: "48 hours",
    },
    {
      tag: "Trades",
      name: "Patterson Plumbing",
      city: "Sydney",
      grad: "linear-gradient(135deg, oklch(0.68 0.16 220), oklch(0.4 0.12 250))",
      url: "https://example.com/patterson",
      description: "A fast-growing residential plumbing agency. We created a high-converting emergency service booking page focused on driving instant customer inquiry phone calls and appointment scheduling.",
      features: [
        "Emergency Call Button",
        "Live Booking Calendar",
        "Customer Review Badges",
        "Service Area Maps",
      ],
      performance: "97 / 100",
      delivery: "48 hours",
    },
    {
      tag: "Retail",
      name: "Bloom Florists",
      city: "Brisbane",
      grad: "linear-gradient(135deg, oklch(0.82 0.14 340), oklch(0.6 0.18 320))",
      url: "https://example.com/bloom",
      description: "A boutique florist studio creating unique botanical arrangements. We delivered a visual portfolio catalog integrated with a custom ordering helper to streamline wedding and event inquiries.",
      features: [
        "Artistic Portfolio Grids",
        "Visual Consultation Flow",
        "Optimized Media Loader",
        "Social Feed Integration",
      ],
      performance: "98 / 100",
      delivery: "48 hours",
    },
    {
      tag: "Wellness",
      name: "North Yoga",
      city: "Perth",
      grad: "linear-gradient(135deg, oklch(0.78 0.11 160), oklch(0.5 0.14 180))",
      url: "https://example.com/northyoga",
      description: "A modern, minimalist yoga studio. We designed an inviting digital workspace incorporating interactive timetable scheduling and simple membership sign-up options.",
      features: [
        "Live Calendar timetable",
        "Calming Visual Layout",
        "Membership Signup Forms",
        "One-click Google Maps",
      ],
      performance: "99 / 100",
      delivery: "48 hours",
    },
  ], []);

  const scrollTo = useCallback(
    (index: number) => {
      carouselApi?.scrollTo(index);
      setIsPaused(true);
    },
    [carouselApi],
  );

  const scrollPrev = useCallback(() => {
    carouselApi?.scrollPrev();
    setIsPaused(true);
  }, [carouselApi]);

  const scrollNext = useCallback(() => {
    carouselApi?.scrollNext();
    setIsPaused(true);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
      setScrollSnaps(carouselApi.scrollSnapList());
    };

    updateCarouselState();
    carouselApi.on("select", updateCarouselState);
    carouselApi.on("reInit", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState);
      carouselApi.off("reInit", updateCarouselState);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || selectedCard || isPaused) return;

    const timer = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 3600);

    return () => clearInterval(timer);
  }, [carouselApi, isPaused, selectedCard]);

  return (
    <Section id="showcase">
      <SectionHeader
        eyebrow="Showcase"
        title={
          <>
            Real Aussie businesses.
            <br />
            <span className="text-gradient">Real results.</span>
          </>
        }
        subtitle="A peek at recent launches across hospitality, trades, retail and wellness."
      />

      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        className="relative"
      >
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {cards.map((c, i) => (
              <CarouselItem key={c.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  onClick={() => setSelectedCard(c)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease }}
                  className="group relative block h-full cursor-pointer overflow-hidden rounded-3xl hairline bg-surface-elevated p-3 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div
                    className="relative aspect-4/3 overflow-hidden rounded-2xl"
                    style={{ background: c.grad }}
                  >
                    <div className="absolute inset-0 noise opacity-40" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground">
                      {c.tag}
                    </div>
                    <div className="absolute inset-x-6 bottom-6 rounded-xl bg-surface-elevated p-3 shadow-elevated">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                      </div>
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-foreground/70" />
                      <div className="mt-1.5 h-2 w-full rounded-full bg-foreground/15" />
                      <div className="mt-1 h-2 w-4/5 rounded-full bg-foreground/15" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-3 py-4">
                    <div>
                      <div className="text-base font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.city}</div>
                    </div>
                    <span className="grid h-8 w-8 place-items-center rounded-full hairline bg-surface-elevated transition-all group-hover:bg-foreground group-hover:text-background">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-7 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  selectedIndex === index ? "w-7 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to showcase slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="grid h-10 w-10 place-items-center rounded-full hairline bg-surface-elevated transition-colors hover:bg-surface"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition-transform hover:scale-[1.03]"
              aria-label="Next showcase"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl overflow-hidden rounded-[2rem] hairline bg-surface-elevated shadow-elevated"
            >
              {/* Header Gradient */}
              <div
                className="relative h-44 overflow-hidden p-6 text-foreground flex flex-col justify-end"
                style={{ background: selectedCard.grad }}
              >
                <div className="absolute inset-0 noise opacity-30" />
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-4 top-4 rounded-full bg-background/25 p-2 text-foreground hover:bg-background/40 transition-colors backdrop-blur-sm"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="relative z-10">
                  <span className="inline-block rounded-full bg-background/20 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-foreground backdrop-blur-sm">
                    {selectedCard.tag}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-foreground">
                    {selectedCard.name}
                  </h3>
                  <p className="text-xs text-foreground/80">{selectedCard.city}</p>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Project Overview</h4>
                  <p className="text-sm text-foreground/85 leading-relaxed">
                    {selectedCard.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Performance</h4>
                    <div className="flex items-center gap-1.5 text-[oklch(0.7_0.2_150)] font-semibold text-sm">
                      <Zap className="h-4 w-4 fill-[oklch(0.7_0.2_150)]" /> PageSpeed {selectedCard.performance}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Delivery</h4>
                    <div className="text-sm font-medium text-foreground">
                      Delivered in {selectedCard.delivery}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCard.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={selectedCard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-medium text-background hover:scale-[1.01] active:scale-[0.99] transition-transform cursor-pointer"
                  >
                    Visit live site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-full hairline bg-surface px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
