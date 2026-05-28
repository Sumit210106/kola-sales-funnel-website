"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  // Terminal,
  Zap,
} from "lucide-react";
import { PrimaryCTA, GhostCTA } from "./Primitives";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const checks = [
  "48-hour delivery",
  "No lock-in contracts",
  "30-day money-back",
  "Mobile-first by default",
  "Built for Google Ads & SEO",
];

const terminalLines = [
  { prompt: "$", text: "create website --business local --market AU", tone: "text-background/50" },
  { prompt: "✓", text: "design system generated", tone: "text-[oklch(0.55_0.16_150)]" },
  { prompt: "✓", text: "mobile layout optimized", tone: "text-[oklch(0.55_0.16_150)]" },
  { prompt: "✓", text: "SEO metadata and analytics wired", tone: "text-[oklch(0.55_0.16_150)]" },
  { prompt: "→", text: "deploying fast lead funnel...", tone: "text-brand" },
];

export function Hero() {
  const typedTerminal = useTypedTerminal(terminalLines);

  return (
    <section id="top" className="relative overflow-hidden bg-hero px-5 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:min-h-170 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full hairline bg-surface-elevated/75 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Web design for small business growth
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
            Fast, polished websites for Australian businesses that need more
            calls, bookings, and quote requests from Google, ads, and mobile
            visitors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease }}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <PrimaryCTA>Get my $99 website</PrimaryCTA>
            <GhostCTA href="#showcase">View live examples</GhostCTA>
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
          <div className="absolute -inset-8 rounded-[3rem] bg-brand/10 blur-3xl" aria-hidden />
          <div className="relative rounded-[2.25rem] hairline bg-surface-elevated/70 p-3 shadow-elevated backdrop-blur">
            <div className="overflow-hidden rounded-[1.75rem] bg-background">
              <div className="flex items-center justify-between border-b border-hairline bg-surface-elevated/80 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.18_75)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.62_0.16_160)]" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Preview</span>
              </div>

              <div className="relative px-5 pb-6 pt-8 md:px-7 md:pb-8">
                <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand/35 to-transparent" aria-hidden />

                <div className="mx-auto max-w-sm text-center">
                  {/* <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background shadow-soft">
                    <Terminal className="h-5 w-5" />
                  </div> */}
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Build terminal
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-[-0.02em]">
                    Your site, compiling into leads.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    A focused build process for speed, search, mobile polish,
                    and conversion tracking.
                  </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-foreground text-background shadow-elevated">
                  <div className="flex items-center justify-between border-b border-background/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.18_75)]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.62_0.16_160)]" />
                    </div>
                    <span className="font-mono text-[11px] text-background/45">launch.sh</span>
                  </div>

                  <div className="min-h-49 space-y-3 px-4 py-5 font-mono text-[12px] leading-relaxed sm:min-h-51 sm:text-[13px]">
                    {typedTerminal.lines.map((line, index) => (
                      <motion.div
                        key={line.text}
                        initial={false}
                        animate={{ opacity: line.visible ? 1 : 0 }}
                        transition={{ duration: 0.18, ease }}
                        className="flex gap-3 whitespace-pre-wrap"
                      >
                        <span className={`w-4 shrink-0 ${line.tone}`}>{line.prompt}</span>
                        <span
                          className={line.prompt === "$" ? "text-background/85" : "text-background/62"}
                        >
                          {line.typed}
                          {typedTerminal.activeLine === index && (
                            <motion.span
                              aria-hidden
                              animate={{ opacity: [1, 1, 0, 0] }}
                              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                              className="ml-0.5 inline-block h-4 w-1 translate-y-0.5 bg-brand"
                            />
                          )}
                        </span>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: typedTerminal.done ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-3 pt-2"
                    >
                      <motion.span
                        aria-hidden
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                        className="w-4 shrink-0 text-brand"
                      >
                        ▌
                      </motion.span>
                      <span className="text-background/45">ready for launch</span>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-3 gap-px bg-background/10 text-center">
                    <div className="bg-foreground px-3 py-4">
                      <p className="font-display text-2xl font-semibold leading-none">98</p>
                      <p className="mt-1 text-[11px] text-background/45">speed</p>
                    </div>
                    <div className="bg-foreground px-3 py-4">
                      <p className="font-display text-2xl font-semibold leading-none">48h</p>
                      <p className="mt-1 text-[11px] text-background/45">launch</p>
                    </div>
                    <div className="bg-foreground px-3 py-4">
                      <p className="font-display text-2xl font-semibold leading-none">SEO</p>
                      <p className="mt-1 text-[11px] text-background/45">ready</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 hidden grid-cols-3 gap-3 sm:grid">
                  <MiniMetric icon={Zap} label="Speed" value="98" />
                  <MiniMetric icon={Clock3} label="Launch" value="48h" />
                  <MiniMetric icon={ShieldCheck} label="Guarantee" value="30d" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 hidden w-[78%] -translate-x-1/2 rounded-2xl hairline bg-surface-elevated/90 px-4 py-3 shadow-soft backdrop-blur sm:block">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[oklch(0.55_0.16_150)]" />
              SEO, forms, analytics and mobile UX included
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function useTypedTerminal(lines: typeof terminalLines) {
  const [typedChars, setTypedChars] = useState(0);
  const totalChars = useMemo(
    () => lines.reduce((total, line) => total + line.text.length, 0),
    [lines],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches) {
      setTypedChars(totalChars);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    const startDelay = 450;
    const typeDelay = 24;

    timeoutId = setTimeout(function typeNext() {
      setTypedChars((current) => {
        if (current >= totalChars) return current;

        timeoutId = setTimeout(typeNext, typeDelay);
        return current + 1;
      });
    }, startDelay);

    return () => clearTimeout(timeoutId);
  }, [totalChars]);

  let remaining = typedChars;
  let activeLine = -1;

  const typedLines = lines.map((line, index) => {
    const typedLength = Math.max(0, Math.min(line.text.length, remaining));
    remaining -= typedLength;

    if (activeLine === -1 && typedLength > 0 && typedLength < line.text.length) {
      activeLine = index;
    }

    return {
      ...line,
      typed: line.text.slice(0, typedLength),
      visible: typedLength > 0 || typedChars >= lines.slice(0, index).reduce((total, item) => total + item.text.length, 0),
    };
  });

  if (activeLine === -1 && typedChars < totalChars) {
    activeLine = typedLines.findIndex((line) => line.typed.length === 0);
  }

  return {
    activeLine,
    done: typedChars >= totalChars,
    lines: typedLines,
  };
}

function MiniMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock3;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-surface-elevated p-3 text-center shadow-soft">
      <div className="flex justify-center">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-foreground/5">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
      </div>
      <p className="mt-3 font-display text-xl font-semibold leading-none">{value}</p>
      <p className="mt-1 text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}
