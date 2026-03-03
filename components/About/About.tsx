"use client";
import { archivo, climateCrisis, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { number: 15, suffix: "+", label: "Countries Served" },
  { number: 500, suffix: "+", label: "Shipments Completed" },
  { number: 10000, suffix: "+", label: "Tons Exported" },
  { number: 6, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = counterRef.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent =
          Math.floor(obj.val).toLocaleString("en-IN") + suffix;
      },
    });
  });

  return (
    <span ref={counterRef} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-quote-line", {
        xPercent: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stat-card",
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 px-8 bg-off-white"
    >
      {/* Quote + Description */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
        <div className="lg:w-3/5">
          <div className="overflow-hidden">
            <h2
              className={`about-quote-line text-primary-main text-4xl md:text-5xl lg:text-6xl font-bold leading-tight italic ${archivo.className}`}
            >
              Rooted in Tradition.
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              className={`about-quote-line text-accent-main text-4xl md:text-5xl lg:text-6xl font-bold leading-tight italic ${archivo.className}`}
            >
              Growing Globally.
            </h2>
          </div>
        </div>

        <div className="lg:w-2/5 flex flex-col justify-end">
          <p
            className={`about-text text-primary-main/70 text-base leading-relaxed mb-4 ${archivo.className}`}
          >
            Founded in the heart of Tamil Nadu, Andrax Exports Pvt Ltd has
            been bridging the gap between India&apos;s rich agricultural
            heritage and global markets. We specialize in export-grade coir
            products, coconut derivatives, nursery plants, and fresh tropical
            produce.
          </p>
          <p
            className={`about-text text-primary-main/70 text-base leading-relaxed ${archivo.className}`}
          >
            From sourcing raw materials directly from local farmers to
            ensuring certified packaging and phytosanitary compliance, every
            step of our process reflects our commitment to quality and
            sustainability.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="stat-card bg-primary-main p-8 flex flex-col justify-between min-h-[180px] group hover:bg-secondary-main transition-colors duration-500"
          >
            <span
              className={`text-secondary-accent text-4xl md:text-5xl font-bold ${climateCrisis.className}`}
            >
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
            </span>
            <span
              className={`text-off-white/70 text-xs uppercase tracking-widest mt-4 ${jetbrainsMono.className}`}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
