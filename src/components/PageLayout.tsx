import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <TopBar />
      <Nav />
      {children}
      <Footer />
      <FloatingActions />
    </main>
  );
}
