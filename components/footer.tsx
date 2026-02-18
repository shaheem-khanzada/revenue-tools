import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";
import { TOOLS } from "@/lib/tools-config";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NA</span>
              </div>
              <span className="text-xl font-semibold text-foreground">NanoApps</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Simple, powerful online tools for everyday tasks. Compress images, convert text, and
              calculate anything—all for free.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-foreground">Tools</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={tool.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <span
                  className="text-sm text-muted-foreground cursor-default"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className="text-sm text-muted-foreground cursor-default"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  Privacy
                </span>
              </li>
              <li>
                <span
                  className="text-sm text-muted-foreground cursor-default"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  Terms
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NanoApps. All rights reserved.
          </p>

          <div className="flex items-center gap-4" aria-label="Social links coming soon">
            <span
              className="text-muted-foreground cursor-default"
              aria-label="Twitter"
              title="Coming soon"
            >
              <Twitter className="size-5" />
            </span>
            <span
              className="text-muted-foreground cursor-default"
              aria-label="GitHub"
              title="Coming soon"
            >
              <Github className="size-5" />
            </span>
            <span
              className="text-muted-foreground cursor-default"
              aria-label="Email"
              title="Coming soon"
            >
              <Mail className="size-5" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
