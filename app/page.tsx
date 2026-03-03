import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Process from "@/components/Process/Process";
import Products from "@/components/Products/Products";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Process />
      <Gallery />
      <Marquee />
      <Contact />
    </main>
  );
}
