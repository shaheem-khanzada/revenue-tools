import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  href: string;
  featured?: boolean;
}

export function ToolCard({
  title,
  description,
  icon,
  category,
  href,
  featured,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
    >
      <Card
        className={cn(
          "h-full transition-all duration-200 hover:bg-primary/5 hover:border-primary/30 hover:shadow-md",
          featured && "ring-1 ring-primary/10"
        )}
      >
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
            {icon}
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">{category}</span>
            </div>
            <h3 className="text-lg font-medium text-foreground leading-tight">{title}</h3>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
