"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Zap, Shield, Clock, Globe, BarChart3 } from "lucide-react";
import { PrimaryCTA, GhostCTA } from "./Primitives";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div
      ref={ref}
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-36 md:pb-32"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        className="absolute left-1/2 top-[-10%] h-[700px] w-[900px] -translate-x-1/2 conic-glow opacity-80"
        aria-hidden
      />
      <div className="absolute inset-0 noise opacity-50" aria-hidden />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6, ease }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass hairline px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="flex -space-x-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-full bg-gradient-to-br from-brand to-brand-glow ring-2 ring-background"
              />
            ))}
          </span>
          Trusted by 500+ Australian small businesses
          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.2_150)]" /> Live
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl lg:text-[5.5rem]"
        >
          A premium website.
          <br />
          <span className="glow-shimmer">Live in 48 hours.</span>
          <br />
          For just <span className="text-gradient">$99.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
        >
          Production-grade, mobile-first websites designed by an Australian team. No
          builders, no contracts — just a beautiful site that wins you customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <PrimaryCTA>Get my $99 website</PrimaryCTA>
          <GhostCTA href="#showcase">View live examples</GhostCTA>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
        >
          {[
            { icon: Star, label: "4.9/5 from 127 reviews" },
            { icon: Clock, label: "48hr delivery" },
            { icon: Shield, label: "30-day guarantee" },
            { icon: Globe, label: "AU-based team" },
          ].map(({ icon: I, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <I className="h-3.5 w-3.5 text-brand" /> {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Device mock */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease }}
        className="relative mx-auto mt-20 w-full max-w-5xl px-6"
      >
        {/* <DeviceMock /> */}
      </motion.div>
    </div>
  );
}

// export function DeviceMock() {
//   return (
//     <div className="relative">
//       {/* Glow */}
//       <div className="absolute inset-x-10 -top-10 h-40 bg-brand opacity-30 blur-3xl" aria-hidden />
//       <div className="relative rounded-[1.75rem] hairline bg-surface-elevated p-2 shadow-elevated">
//         <div className="flex items-center gap-1.5 px-3 py-2">
//           <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.74_0.16_25)]" />
//           <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.15_85)]" />
//           <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.15_150)]" />
//           <span className="ml-3 inline-flex items-center gap-1.5 rounded-md hairline bg-surface px-2.5 py-1 text-[10px] text-muted-foreground">
//             <Globe className="h-3 w-3" /> yourbusiness.com.au
//           </span>
//         </div>
//         <div className="overflow-hidden rounded-[1.4rem] bg-hero">
//           <div className="grid grid-cols-12 gap-3 p-6 md:p-8">
//             <div className="col-span-12 md:col-span-7">
//               <div className="inline-block rounded-full hairline bg-surface-elevated px-2 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground">
//                 Sydney · since 2014
//               </div>
//               <div className="mt-3 h-9 w-5/6 rounded-lg bg-foreground/90" />
//               <div className="mt-2 h-9 w-3/4 rounded-lg bg-foreground/70" />
//               <div className="mt-4 h-3 w-full rounded-full bg-foreground/20" />
//               <div className="mt-2 h-3 w-4/5 rounded-full bg-foreground/15" />
//               <div className="mt-5 flex gap-2">
//                 <div className="rounded-full bg-foreground px-4 py-2 text-[10px] text-background">
//                   Get a quote
//                 </div>
//                 <div className="rounded-full hairline bg-surface-elevated px-4 py-2 text-[10px]">
//                   Our work
//                 </div>
//               </div>
//             </div>
//             <div className="col-span-12 md:col-span-5">
//               <div className="aspect-[4/3] rounded-2xl bg-brand shadow-glow" />
//             </div>
//             {[0, 1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="col-span-12 mt-2 rounded-2xl hairline bg-surface-elevated p-4 sm:col-span-4"
//               >
//                 <div className="h-2 w-2/3 rounded-full bg-foreground/60" />
//                 <div className="mt-2 h-2 w-full rounded-full bg-foreground/15" />
//                 <div className="mt-1 h-2 w-4/5 rounded-full bg-foreground/15" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Floating phone */}
//       <motion.div
//         initial={{ opacity: 0, x: 30, y: 30 }}
//         animate={{ opacity: 1, x: 0, y: 0 }}
//         transition={{ delay: 0.7, duration: 0.9, ease }}
//         className="absolute -bottom-12 right-0 hidden w-44 rotate-[6deg] floaty md:block md:right-[-2rem] md:w-56"
//       >
//         <div className="rounded-[2rem] hairline bg-surface-elevated p-1.5 shadow-elevated">
//           <div className="overflow-hidden rounded-[1.6rem] bg-hero p-3">
//             <div className="h-2 w-12 rounded-full bg-foreground/70" />
//             <div className="mt-2 h-4 w-4/5 rounded-md bg-foreground/85" />
//             <div className="mt-3 aspect-square rounded-2xl bg-brand" />
//             <div className="mt-3 h-2 w-full rounded-full bg-foreground/20" />
//             <div className="mt-1 h-2 w-3/4 rounded-full bg-foreground/15" />
//             <div className="mt-3 h-6 rounded-full bg-foreground" />
//           </div>
//         </div>
//       </motion.div>

//       {/* Floating badges */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1, duration: 0.5 }}
//         className="absolute -left-4 top-16 hidden rounded-2xl glass hairline p-3 shadow-soft md:block"
//       >
//         <div className="flex items-center gap-2">
//           <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-brand-foreground">
//             <Zap className="h-4 w-4" />
//           </div>
//           <div>
//             <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
//               PageSpeed
//             </div>
//             <div className="text-sm font-semibold">98 / 100</div>
//           </div>
//         </div>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1.1, duration: 0.5 }}
//         className="absolute -right-2 top-32 hidden rounded-2xl glass hairline p-3 shadow-soft md:block lg:right-[-3rem]"
//       >
//         <div className="flex items-center gap-2">
//           <div className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
//             <BarChart3 className="h-4 w-4" />
//           </div>
//           <div>
//             <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
//               Conversions
//             </div>
//             <div className="text-sm font-semibold">+34% mo/mo</div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

