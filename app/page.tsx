import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="about"
        data-theme="white"
        className="h-screen w-full bg-off-white px-8 pt-20"
      ></section>
      <Contact />
    </main>
  );
}
