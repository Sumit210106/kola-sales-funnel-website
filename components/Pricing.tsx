"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Shield,
  Globe,
  Code2,
  Calendar,
  CreditCard,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "./Primitives";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckoutForm } from "@/components/checkoutform";


const ease = [0.22, 1, 0.36, 1] as const;
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
// };

const addons = [
  {
    icon: Search,
    name: "SEO accelerator",
    price: 149,
    cadence: "/mo",
    d: "Local SEO strategy, citations, and monthly search reports.",
  },
  {
    icon: Calendar,
    name: "Online bookings",
    price: 49,
    cadence: " once",
    d: "Calendly, Square, or booking tool setup with styled sections.",
  },
  {
    icon: CreditCard,
    name: "Stripe payments",
    price: 79,
    cadence: " once",
    d: "Accept deposits, payments, or simple product purchases.",
  },
  {
    icon: Mail,
    name: "Google Workspace email",
    price: 12,
    cadence: "/mo",
    d: "Professional email setup for your business domain.",
  },
  {
    icon: Globe,
    name: "Hosting + maintenance",
    price: 19,
    cadence: "/mo",
    d: "Fast AU hosting, SSL, backups, and basic maintenance.",
  },
];

type Tier = {
  name: string;
  tag: string;
  price: number;
  original: number;
  cta: string;
  highlight: boolean;
  features: { label: string; value: number; featured?: boolean }[];
};

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const dialogContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showCheckoutForm && dialogContentRef.current) {
      dialogContentRef.current.scrollTop = 0;
    }
  }, [showCheckoutForm]);

  const tiers: Tier[] = [
    {
      name: "Launch",
      tag: "Best for sole traders",
      price: 99,
      original: 1300,
      cta: "Get my $99 site",
      highlight: false,
      features: [
        { label: "1-page custom website", value: 899 },
        { label: "Mobile & tablet responsive", value: 299 },
        { label: "Contact form + email alerts", value: 99 },
        { label: "Google Maps & social embeds", value: 79 },
        { label: "Basic SEO setup", value: 149 },
        { label: "48-hour delivery", value: 199 },
        { label: "1 round of revisions", value: 99 },
      ],
    },
    {
      name: "Growth",
      tag: "Most popular",
      price: 249,
      original: 2400,
      cta: "Choose Growth",
      highlight: true,
      features: [
        { label: "Up to 5-page website", value: 1799 },
        { label: "Everything in Launch", value: 399 },
        { label: "Free hosting + domain", value: 228, featured: true },
        { label: "Booking / calendar integration", value: 149 },
        { label: "Stripe or PayPal payments", value: 179 },
        { label: "Newsletter signup + Mailchimp", value: 129 },
        { label: "Advanced on-page SEO", value: 249 },
        { label: "2 rounds of revisions", value: 199 },
        { label: "5-day delivery", value: 149 },
      ],
    },
    {
      name: "Scale",
      tag: "For established brands",
      price: 499,
      original: 5000,
      cta: "Talk to us",
      highlight: false,
      features: [
        { label: "Up to 10-page website", value: 3499 },
        { label: "Everything in Growth", value: 699 },
        { label: "Blog / CMS setup", value: 599 },
        { label: "Custom illustrations", value: 399 },
        { label: "Advanced analytics dashboard", value: 399 },
        { label: "Priority AU support", value: 299 },
        { label: "Unlimited revisions (14 days)", value: 499 },
      ],
    },
  ];

  const selectedAddonItems = useMemo(
    () => addons.filter((addon) => selectedAddons.includes(addon.name)),
    [selectedAddons],
  );
  const oneTimeAddonTotal = selectedAddonItems
    .filter((addon) => addon.cadence.includes("once"))
    .reduce((sum, addon) => sum + addon.price, 0);
  const monthlyAddonTotal = selectedAddonItems
    .filter((addon) => addon.cadence.includes("/mo"))
    .reduce((sum, addon) => sum + addon.price, 0);

  const openCheckout = (tier: Tier) => {
    setSelectedTier(tier);
    setSelectedAddons([]);
    setShowCheckoutForm(false);
  };

  const toggleAddon = (name: string) => {
    setSelectedAddons((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            Transparent pricing.
            <br />
            <span className="text-gradient">No hidden fees, ever.</span>
          </>
        }
        subtitle="One-off pricing, GST included. Optional hosting & maintenance from A$19/month."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            className={`relative flex flex-col rounded-3xl p-7 shadow-soft transition-all hover:-translate-y-1 ${t.highlight
                ? "bg-foreground text-background shadow-elevated"
                : "hairline bg-surface-elevated"
              }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-foreground shadow-glow">
                Most popular
              </span>
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
              <span
                className={`text-[10px] uppercase tracking-widest ${t.highlight ? "text-background/60" : "text-muted-foreground"
                  }`}
              >
                {t.tag}
              </span>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className={`text-sm line-through ${t.highlight ? "text-background/50" : "text-muted-foreground"}`}>
                A${t.original}
              </span>
              <span className="font-display text-6xl font-semibold tracking-[-0.04em]">
                A${t.price}
              </span>
            </div>
            <button
              type="button"
              onClick={() => openCheckout(t)}
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${t.highlight
                  ? "bg-background text-foreground"
                  : "bg-foreground text-background"
                }`}
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
            <ul className="mt-7 space-y-2.5 text-sm">
              {t.features.map((f) => (
                <li
                  key={f.label}
                  className={`flex items-start justify-between gap-3 ${f.featured ? "rounded-2xl bg-brand/90 px-3 py-2 text-brand-foreground shadow-glow" : ""
                    }`}
                >
                  <span className="flex min-w-0 items-start gap-2.5">
                    <span
                      className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${f.featured
                          ? "bg-brand-foreground/20 text-brand-foreground"
                          : t.highlight
                            ? "bg-background/15 text-background"
                            : "bg-foreground text-background"
                        }`}
                    >
                      {f.featured ? <Sparkles className="h-2.5 w-2.5" /> : <Check className="h-2.5 w-2.5" />}
                    </span>
                    <span className={f.featured ? "" : t.highlight ? "text-background/85" : ""}>
                      {f.label}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 whitespace-nowrap text-xs font-semibold ${f.featured ? "" : t.highlight ? "text-background/85" : "text-foreground"
                      }`}
                  >
                    <span
                      className={`mr-1.5 line-through ${f.featured ? "opacity-65" : t.highlight ? "text-background/45" : "text-muted-foreground"
                        }`}
                    >
                      A${f.value}
                    </span>
                    Free
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Shield className="h-3.5 w-3.5" /> 30-day money-back guarantee
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Code2 className="h-3.5 w-3.5" /> You own 100% of the code
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5" /> Hosting from $19/month (optional)
        </span>
      </div>

      <Dialog
        open={Boolean(selectedTier)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedTier(null);
            setShowCheckoutForm(false);
          }
        }}
      >
        <DialogContent ref={dialogContentRef} className="max-h-[90dvh] max-w-4xl overflow-y-auto rounded-3xl border-hairline p-0 shadow-elevated">
          {selectedTier && (
            <div className="grid bg-surface-elevated md:grid-cols-[1fr_0.78fr]">
              <div 
                className="p-6 md:p-8"
                style={showCheckoutForm ? { paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" } : undefined}
              >
                {showCheckoutForm ? (
                  <CheckoutForm
                    planName={selectedTier.name}
                    dueOnce={selectedTier.price + oneTimeAddonTotal}
                    monthlyTotal={monthlyAddonTotal}
                    selectedAddons={selectedAddonItems.map((addon) => addon.name)}
                    onBack={() => setShowCheckoutForm(false)}
                  />
                ) : (
                  <>
                    <DialogHeader>
                      <DialogTitle className="font-display text-3xl tracking-[-0.02em]">
                        Checkout: {selectedTier.name}
                      </DialogTitle>
                      <DialogDescription>
                        Choose optional add-ons before we prepare your project invoice.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 grid gap-3">
                      {addons.map((addon) => {
                        const Icon = addon.icon;
                        const includedWithGrowth =
                          selectedTier.name === "Growth" && addon.name === "Hosting + maintenance";
                        const selected = selectedAddons.includes(addon.name) || includedWithGrowth;

                        return (
                          <button
                            key={addon.name}
                            type="button"
                            disabled={includedWithGrowth}
                            onClick={() => toggleAddon(addon.name)}
                            className={`flex items-start gap-4 rounded-3xl p-4 text-left transition-all ${selected
                                ? "bg-background ring-1 ring-foreground/15 shadow-soft"
                                : "hairline bg-surface-elevated hover:bg-background"
                              } ${includedWithGrowth ? "cursor-default" : ""}`}
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-foreground text-background">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-start justify-between gap-3">
                                <span className="font-semibold">{addon.name}</span>
                                <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold">
                                  {includedWithGrowth ? (
                                    <>
                                      <span className="mr-1 line-through opacity-50">A$19/mo</span>
                                      Free
                                    </>
                                  ) : (
                                    <>
                                      A${addon.price}
                                      {addon.cadence}
                                    </>
                                  )}
                                </span>
                              </span>
                              <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">
                                {addon.d}
                              </span>
                            </span>
                            <span
                              className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${selected ? "border-foreground bg-foreground text-background" : "border-hairline"
                                }`}
                            >
                              {selected && <Check className="h-3 w-3" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              <aside 
                className={`bg-foreground p-6 text-background md:p-8 ${showCheckoutForm ? "hidden md:block" : ""}`}
                style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
                  Order summary
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{selectedTier.name}</h3>
                <div className="mt-6 space-y-3 text-sm">
                  <SummaryRow label={`${selectedTier.name} website`} value={`A$${selectedTier.price}`} />
                  {selectedTier.features.slice(0, 4).map((item) => (
                    <SummaryRow
                      key={item.label}
                      label={item.label}
                      value={
                        <>
                          <span className="mr-1.5 line-through text-background/35">A${item.value}</span>
                          Free
                        </>
                      }
                    />
                  ))}
                  {selectedAddonItems.map((addon) => (
                    <SummaryRow
                      key={addon.name}
                      label={addon.name}
                      value={`A$${addon.price}${addon.cadence}`}
                    />
                  ))}
                </div>

                <div className="mt-6 border-t border-background/10 pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-background/45">Due once</p>
                      <p className="mt-1 font-display text-5xl font-semibold tracking-[-0.04em]">
                        A${selectedTier.price + oneTimeAddonTotal}
                      </p>
                    </div>
                    {monthlyAddonTotal > 0 && (
                      <div className="text-right">
                        <p className="text-xs text-background/45">Monthly</p>
                        <p className="mt-1 text-2xl font-semibold">A${monthlyAddonTotal}/mo</p>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowCheckoutForm(true)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
                  >
                    {showCheckoutForm ? "Complete the form" : "Continue checkout"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-4 text-center text-xs leading-relaxed text-background/45">
                    No payment is taken here. We confirm details first, then send the invoice.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-background/10 pb-3">
      <span className="text-background/65">{label}</span>
      <span className="shrink-0 font-semibold">{value}</span>
    </div>
  );
}
