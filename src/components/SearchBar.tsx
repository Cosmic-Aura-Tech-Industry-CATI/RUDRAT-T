import { motion } from "framer-motion";
import { MapPin, Calendar as CalendarIcon, Clock, Users, Search, Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { format, differenceInCalendarDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

// Build destination index from packages.
type DestEntry = { label: string; slug: string; pkgName: string };
const DEST_INDEX: DestEntry[] = (() => {
  const seen = new Map<string, DestEntry>();
  for (const p of packages) {
    for (const d of p.destinations) {
      const key = d.toLowerCase();
      if (!seen.has(key)) seen.set(key, { label: d, slug: p.slug, pkgName: p.name });
    }
    const nameKey = p.name.toLowerCase();
    if (!seen.has(nameKey)) seen.set(nameKey, { label: p.name, slug: p.slug, pkgName: p.name });
  }
  return Array.from(seen.values()).sort((a, b) => a.label.localeCompare(b.label));
})();

const PLACEHOLDER_ROTATION = [
  "Ayodhya", "Varanasi", "Prayagraj", "Lucknow", "Agra", "Mathura", "Vrindavan",
  "Nainital", "Mussoorie", "Haridwar", "Rishikesh", "Delhi", "Jaipur",
  "Shimla", "Manali", "Kedarnath", "Badrinath",
];

function resolveSlug(query: string): string | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  const exact = DEST_INDEX.find((d) => d.label.toLowerCase() === q);
  if (exact) return exact.slug;
  const starts = DEST_INDEX.find((d) => d.label.toLowerCase().startsWith(q));
  if (starts) return starts.slug;
  const includes = DEST_INDEX.find(
    (d) => d.label.toLowerCase().includes(q) || d.pkgName.toLowerCase().includes(q),
  );
  return includes?.slug ?? null;
}

function filterDestinations(query: string): DestEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return DEST_INDEX;
  const starts = DEST_INDEX.filter((d) => d.label.toLowerCase().startsWith(q));
  const includes = DEST_INDEX.filter(
    (d) =>
      !d.label.toLowerCase().startsWith(q) &&
      (d.label.toLowerCase().includes(q) || d.pkgName.toLowerCase().includes(q)),
  );
  return [...starts, ...includes].slice(0, 12);
}

export function SearchBar() {
  const navigate = useNavigate();

  // Destination state
  const [destQuery, setDestQuery] = useState("");
  const [destOpen, setDestOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const destInputRef = useRef<HTMLInputElement>(null);

  // Rotating placeholder
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  useEffect(() => {
    if (destQuery) return;
    const id = window.setInterval(
      () => setPlaceholderIdx((i) => (i + 1) % PLACEHOLDER_ROTATION.length),
      2500,
    );
    return () => window.clearInterval(id);
  }, [destQuery]);

  // Date range state
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [dateOpen, setDateOpen] = useState(false);

  // Travellers state
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travOpen, setTravOpen] = useState(false);

  const suggestions = useMemo(() => filterDestinations(destQuery), [destQuery]);

  const dateLabel = useMemo(() => {
    if (range?.from && range?.to)
      return `${format(range.from, "dd MMM yyyy")} → ${format(range.to, "dd MMM yyyy")}`;
    if (range?.from) return format(range.from, "dd MMM yyyy");
    return "";
  }, [range]);

  const durationLabel = useMemo(() => {
    if (range?.from && range?.to) {
      const days = differenceInCalendarDays(range.to, range.from) + 1;
      const nights = Math.max(0, days - 1);
      return `${days} Days / ${nights} Nights`;
    }
    return "";
  }, [range]);

  const travLabel = useMemo(() => {
    const a = `${adults} ${adults === 1 ? "Adult" : "Adults"}`;
    if (children === 0) return a;
    return `${a} • ${children} ${children === 1 ? "Child" : "Children"}`;
  }, [adults, children]);

  const handleSearch = () => {
    const slug = selectedSlug ?? resolveSlug(destQuery);
    const search: Record<string, string> = {};
    if (range?.from) search.start = range.from.toISOString().slice(0, 10);
    if (range?.to) search.end = range.to.toISOString().slice(0, 10);
    search.adults = String(adults);
    search.children = String(children);
    const q = destQuery.trim();
    if (q) search.q = q;
    if (slug) {
      navigate({ to: "/tours", search, hash: slug });
    } else {
      navigate({ to: "/tours", search });
    }
  };

  const onDestKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setDestOpen(true);
      setHighlight((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (destOpen && suggestions[highlight]) {
        const s = suggestions[highlight];
        setDestQuery(s.label);
        setSelectedSlug(s.slug);
        setDestOpen(false);
      } else {
        handleSearch();
      }
    } else if (e.key === "Escape") {
      setDestOpen(false);
    }
  };

  return (
    <section className="relative -mt-2 z-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl glass-strong rounded-2xl p-3 md:p-4 shadow-[var(--shadow-luxe)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2">
          {/* Destination */}
          <div className="relative group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">Destination</div>
              <input
                ref={destInputRef}
                value={destQuery}
                onChange={(e) => {
                  setDestQuery(e.target.value);
                  setSelectedSlug(null);
                  setDestOpen(true);
                  setHighlight(0);
                }}
                onFocus={() => setDestOpen(true)}
                onBlur={() => window.setTimeout(() => setDestOpen(false), 150)}
                onKeyDown={onDestKeyDown}
                className="w-full bg-transparent outline-none text-sm text-premium-white placeholder:text-luxury-gray/60 mt-0.5"
                placeholder={PLACEHOLDER_ROTATION[placeholderIdx]}
                autoComplete="off"
              />
            </div>
            {destOpen && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 z-30 glass-strong rounded-xl border border-white/10 max-h-72 overflow-auto shadow-[var(--shadow-luxe)]">
                {suggestions.map((s, i) => (
                  <button
                    key={`${s.slug}-${s.label}`}
                    type="button"
                    onMouseEnter={() => setHighlight(i)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setDestQuery(s.label);
                      setSelectedSlug(s.slug);
                      setDestOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors",
                      i === highlight ? "bg-white/[0.06] text-premium-white" : "text-luxury-gray hover:text-premium-white",
                    )}
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="flex-1 truncate">{s.label}</span>
                    {s.label !== s.pkgName && (
                      <span className="text-[10px] uppercase tracking-[0.15em] text-luxury-gray/70 truncate">
                        {s.pkgName}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Travel Date — range picker */}
          <Popover open={dateOpen} onOpenChange={setDateOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors text-left"
              >
                <CalendarIcon className="w-4 h-4 text-gold shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">Travel Date</div>
                  <div
                    className={cn(
                      "w-full bg-transparent text-sm mt-0.5 truncate",
                      dateLabel ? "text-premium-white" : "text-luxury-gray/60",
                    )}
                  >
                    {dateLabel || "Pick your dates"}
                  </div>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 pointer-events-auto border-[var(--gold)]/25 bg-[oklch(0.16_0.02_258/0.92)] backdrop-blur-2xl rounded-[20px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(212,175,55,0.15)] overflow-hidden"
              align="start"
              sideOffset={12}
            >
              <div className="p-4 md:p-5 bg-gradient-to-br from-[oklch(0.18_0.025_258/0.6)] to-[oklch(0.13_0.02_260/0.4)]">
                <Calendar
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  numberOfMonths={2}
                  disabled={{ before: new Date() }}
                  initialFocus
                  showOutsideDays={false}
                  className="luxury-calendar p-0 pointer-events-auto bg-transparent [--cell-size:2.5rem]"
                  classNames={{
                    months: "relative flex flex-col gap-6 md:flex-row md:gap-8",
                    month: "flex w-full flex-col gap-4",
                    month_caption:
                      "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size) text-[15px] font-display tracking-wide text-premium-white",
                    caption_label: "select-none font-medium text-premium-white",
                    nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
                    button_previous:
                      "h-9 w-9 rounded-full grid place-items-center border border-[var(--gold)]/30 text-luxury-gray hover:text-[var(--gold)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all duration-200",
                    button_next:
                      "h-9 w-9 rounded-full grid place-items-center border border-[var(--gold)]/30 text-luxury-gray hover:text-[var(--gold)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all duration-200",
                    weekdays: "flex",
                    weekday:
                      "flex-1 select-none text-[10px] font-medium uppercase tracking-[0.18em] text-luxury-gray/70 pb-2",
                    week: "mt-1 flex w-full",
                  }}
                />
              </div>
            </PopoverContent>
          </Popover>

          {/* Duration — read-only computed */}
          <div className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors">
            <Clock className="w-4 h-4 text-gold shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">Duration</div>
              <div
                className={cn(
                  "w-full bg-transparent text-sm mt-0.5 truncate",
                  durationLabel ? "text-premium-white" : "text-luxury-gray/60",
                )}
              >
                {durationLabel || "Auto"}
              </div>
            </div>
          </div>

          {/* Travellers */}
          <Popover open={travOpen} onOpenChange={setTravOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors text-left"
              >
                <Users className="w-4 h-4 text-gold shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">Travellers</div>
                  <div className="w-full bg-transparent text-sm text-premium-white mt-0.5 truncate">
                    {travLabel}
                  </div>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4 pointer-events-auto" align="end">
              <div className="space-y-4">
                <Stepper
                  label="Adults"
                  hint="Age 13+"
                  value={adults}
                  min={1}
                  max={20}
                  onChange={setAdults}
                />
                <Stepper
                  label="Children"
                  hint="Age 0–12"
                  value={children}
                  min={0}
                  max={20}
                  onChange={setChildren}
                />
              </div>
            </PopoverContent>
          </Popover>

          <button
            onClick={handleSearch}
            className="btn-gold px-6 py-4 rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-[0.2em] font-medium"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Stepper({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-sm text-premium-white">{label}</div>
        <div className="text-[11px] text-luxury-gray">{hint}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-8 h-8 rounded-full glass flex items-center justify-center text-premium-white disabled:opacity-30 disabled:cursor-not-allowed hover:text-gold transition-colors"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="w-6 text-center text-sm text-premium-white tabular-nums">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-8 h-8 rounded-full glass flex items-center justify-center text-premium-white disabled:opacity-30 disabled:cursor-not-allowed hover:text-gold transition-colors"
          aria-label={`Increase ${label}`}
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
