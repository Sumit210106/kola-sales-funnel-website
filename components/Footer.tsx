"use client";


const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};




export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-display text-base font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-xl bg-foreground text-background">
              W
            </span>
            WebsitePro <span className="text-muted-foreground">AU</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Premium websites for Australian small businesses. Fast, affordable, and
            hassle-free.
          </p>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Services
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>One-page site ($99)</li>
            <li>Growth ($249)</li>
            <li>Scale ($499)</li>
            <li>Hosting ($19/mo)</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>hello@websitepro.com.au</li>
            <li>1800 123 456</li>
            <li>Sydney, Australia</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} WebsitePro AU. All rights reserved.</span>
        <span>Serving small businesses across Australia · ABN 12 345 678 910</span>
      </div>
    </footer>
  );
}

