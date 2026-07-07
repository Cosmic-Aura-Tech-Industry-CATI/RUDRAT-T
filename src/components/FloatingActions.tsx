import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import { BRAND } from "@/lib/brand";

type Msg = { role: "bot" | "user"; text: string };

const QUICK_REPLIES = ["Tour packages", "Vehicle rentals", "Wedding cars", "Talk to a human"];

function botReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("tour") || q.includes("package"))
    return "We plan trips across Kashmir, Himachal, Uttarakhand, Rajasthan, Goa, Kerala, Ladakh, Maharashtra and all major yatra circuits. Bas share your destination and dates — I'll connect you to a travel expert.";
  if (q.includes("vehicle") || q.includes("rent") || q.includes("car"))
    return "Our fleet has Innova Crysta, Ertiga, Tempo Traveller, luxury sedans, mini bus and luxury coach. Tell me your dates, route and how many seats — I'll get you a quick quote.";
  if (q.includes("wedding"))
    return "We handle full wedding travel — decorated cars, guest pickups, luxury fleet and smooth routing. Share the venue, date and guest count to start.";
  if (q.includes("contact") || q.includes("human") || q.includes("call"))
    return `Sure — call us at ${BRAND.phone}, WhatsApp us, or open Plan My Trip and our team will reach out within 1 business hour.`;
  if (q.includes("price") || q.includes("cost"))
    return "Pricing depends on route, season, vehicle and inclusions. Share your trip details on the Plan My Trip page — bilkul honest quote, no hidden charges.";
  return "I can help with tours, vehicles, wedding cars, pricing or connect you to a real human. What would you like to explore?";
}

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Namaste 🙏 I'm Rudra Assistant. Chaliye, let's plan your next trip — how can I help?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, chatOpen]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: botReply(text) }]), 600);
  };

  return (
    <>
      {/* Right-side floating stack */}
      <div className="fixed right-4 md:right-5 bottom-14 md:bottom-16 z-[70] flex flex-col items-end gap-3">
        {/* WhatsApp */}
        <motion.a
          href={BRAND.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          <span className="relative grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl border border-white/20 group-hover:scale-110 transition-transform duration-500">
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
              <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.5 31.5l8-2.1c2.2 1.2 4.8 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.4c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3 0-7.3 6-13.3 13.3-13.3s13.3 6 13.3 13.3-6 13.4-13.3 13.4zm7.6-9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2s-1.1 1.3-1.4 1.6c-.3.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3 0-.5-.1-.7-.1-.2-1-2.4-1.3-3.3-.4-.9-.7-.8-1-.8h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.9 4.5 7.1 6.3 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
            </svg>
          </span>
        </motion.a>

        {/* Chatbot */}
        <motion.button
          onClick={() => setChatOpen((o) => !o)}
          aria-label="Open Rudra Assistant"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="relative group"
        >
          <span
            className="absolute inset-0 rounded-full opacity-50 blur-lg group-hover:opacity-80 transition-opacity"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <span className="relative grid place-items-center w-14 h-14 rounded-full glass-strong border border-[var(--gold)]/40 text-gold group-hover:scale-110 transition-transform">
            {chatOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-5 bottom-[300px] z-[69] w-[min(380px,calc(100vw-2.5rem))] h-[480px] flex flex-col glass-strong rounded-3xl overflow-hidden border border-[var(--gold)]/30 shadow-2xl"
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
              <span
                className="grid place-items-center w-10 h-10 rounded-full"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Bot className="w-5 h-5 text-[var(--primary-foreground)]" />
              </span>
              <div>
                <div className="font-display text-lg">Rudra Assistant</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] pulse-gold" /> Online
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[var(--gold)] text-[var(--primary-foreground)] rounded-br-sm"
                        : "glass text-premium-white rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/10">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="px-3 py-1 rounded-full text-[11px] glass text-luxury-gray hover:text-gold transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="p-3 border-t border-white/10 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about tours, cars, weddings…"
                className="flex-1 bg-transparent text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none px-3 py-2"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid place-items-center w-10 h-10 rounded-full btn-gold"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
