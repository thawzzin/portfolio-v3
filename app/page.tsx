import { AboutSection } from "./_components/about-section";
import { ContactSection } from "./_components/contact-section";
import { HeroSection } from "./_components/hero-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { StackSection } from "./_components/stack-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { WorkSection } from "./_components/work-section";
import { ScrollMotion } from "./scroll-motion";

export default function Home() {
  return (
    <>
      <a className="fixed top-3 left-3 z-[100] -translate-y-[180%] bg-[var(--foreground)] px-4 py-[0.7rem] font-bold text-[var(--inverse)] focus:translate-y-0" href="#main-content">
        Skip to content
      </a>
      <ScrollMotion />
      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <TestimonialsSection />
        <StackSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
