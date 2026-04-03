import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <About />
      <CTA />
    </>
  );
}
