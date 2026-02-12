import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="about"
        data-theme="white"
        className="h-screen w-full bg-off-white"
      >
        Hero
      </section>
      <section
        id="contact"
        data-theme="green"
        className="h-screen w-full bg-main-green"
      >
        Hero
      </section>
    </main>
  );
}
