import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NA</span>
            </div>
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              NanoApps
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#popular-tools-heading"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              All Tools
            </Link>
            <span
              className="text-sm text-muted-foreground cursor-default"
              aria-disabled="true"
              title="Coming soon"
            >
              About
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
