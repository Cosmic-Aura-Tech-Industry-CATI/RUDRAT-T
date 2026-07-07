import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  to: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="px-6 pt-4">
      <div className="mx-auto max-w-7xl">
        <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-luxury-gray">
          <li>
            <Link to="/" className="inline-flex items-center gap-1 hover:text-premium-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.to} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-gold/70" />
              <Link to={item.to} className="hover:text-premium-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
