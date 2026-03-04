import Grainient from "@/components/Grainient";
import { archivo, jetbrainsMono } from "@/lib/fonts";

export default function About() {
  return (
    <section id="about" className="relative py-20 px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#143423"
          color2="#1a3a28"
          color3="#0d2818"
          timeSpeed={0.1}
          contrast={1.2}
          grainAmount={0.08}
          warpAmplitude={100}
          warpSpeed={0.5}
          saturation={0.8}
          zoom={1}
        />
      </div>
      <div className="relative z-10">
        {/* Heading */}
        <div className="contact-heading mb-20">
          <span
            className={`text-secondary-accent text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
          >
            About Us
          </span>
          <h2
            className={`text-off-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none mb-4 ${archivo.className}`}
          >
            Who We
            <span className="text-secondary-accent italic"> Are</span>
          </h2>
          <p
            className={`text-off-white/50 text-sm text-left w-105 ${archivo.className}`}
          >
            At Andrax, we specialize in exporting premium coir products, coco
            peat, plants, and fresh produce to clients worldwide. Built on
            trust, sustainability, and uncompromising quality, we deliver
            natural products that meet international standards while supporting
            eco-friendly agriculture and responsible sourcing practices.
          </p>
        </div>
      </div>
    </section>
  );
}
