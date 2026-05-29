import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
// import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/Process";
import { Showcase } from "@/components/Showcase";
// import { Compare } from "@/components/Compare";
import { Pricing } from "@/components/Pricing";
// import { AddOns } from "@/components/Addons";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Urgency } from "@/components/Urgency";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      {/* <Marquee /> */}
      {/* <Features /> */}
      <Showcase />
      <Pricing />
      {/* <Compare /> */}
      <HowItWorks />
      <Urgency />
      {/* <AddOns /> */}
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
