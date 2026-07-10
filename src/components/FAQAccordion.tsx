import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <Accordion.Root type="multiple" className="grid gap-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion.Item
            value={`faq-${i}`}
            className="rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden group data-[state=open]:border-[var(--gold)]/30 transition-colors duration-400"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer">
                <span className="font-medium text-premium-white text-sm md:text-base leading-snug">
                  {item.question}
                </span>
                <ChevronDown className="w-4 h-4 text-gold shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
              <div className="px-5 pb-5 pt-0">
                <p className="text-sm leading-relaxed text-luxury-gray">{item.answer}</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </motion.div>
      ))}
    </Accordion.Root>
  );
}
