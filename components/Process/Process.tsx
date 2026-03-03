"use client";
import { archivo, jetbrainsMono, climateCrisis } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "Sourcing",
    description:
      "Direct partnerships with farmers and cooperatives across Tamil Nadu, Kerala, and Karnataka ensure fresh, premium-quality raw materials.",
    image: "/images/raw-coconuts-pile.jpeg",
  },
  {
    number: "02",
    title: "Processing",
    description:
      "State-of-the-art processing units equipped with decorticating machines, block presses, and grading equipment for consistent output.",
    image: "/images/coconut-husk-bales.jpeg",
  },
  {
    number: "03",
    title: "Quality Check",
    description:
      "Rigorous quality testing for EC, pH levels, moisture content, and fiber length. Every batch is lab-certified before export.",
    image: "/images/cocopeat-potting-mix.jpeg",
  },
  {
    number: "04",
    title: "Packaging",
    description:
      "Export-grade packaging with branded cartons, palletized stacking, shrink-wrapping, and fumigation as per destination country norms.",
    image: "/images/export-boxes-branded.jpeg",
  },
  {
    number: "05",
    title: "Shipping",
    description:
      "FCL and LCL container shipping from Tuticorin, Chennai, and Cochin ports. Complete documentation including Bill of Lading, COO, and Phyto certificates.",
    image: "/images/bulk-sacks-loading.jpeg",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".process-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Horizontal scroll
      const container = containerRef.current;
      if (!container) return;

      const scrollWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Progress line
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-off-white overflow-hidden"
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none hidden lg:block">
        <div
          ref={progressRef}
          className="h-full bg-secondary-accent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div
        ref={containerRef}
        className="flex items-center min-h-screen"
        style={{ width: `${STEPS.length * 100}vw` }}
      >
        {/* Intro panel */}
        <div className="w-screen h-screen flex items-center px-8 lg:px-16 shrink-0">
          <div className="process-heading max-w-xl">
            <span
              className={`text-accent-main text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
            >
              Our Process
            </span>
            <h2
              className={`text-primary-main text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-none mb-6 ${archivo.className}`}
            >
              From Farm
              <br />
              <span className="text-accent-main italic">To Port</span>
            </h2>
            <p
              className={`text-primary-main/60 text-base leading-relaxed max-w-md ${archivo.className}`}
            >
              Every product passes through our meticulous 5-step process
              ensuring world-class quality at every stage.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-px bg-primary-main/30" />
              <span
                className={`text-primary-main/40 text-xs uppercase tracking-widest ${jetbrainsMono.className}`}
              >
                Scroll to explore
              </span>
              <svg
                className="w-4 h-4 text-primary-main/40 animate-bounce-right"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Step panels */}
        {STEPS.map((step, i) => (
          <div
            key={i}
            className="w-screen h-screen flex items-center shrink-0 px-8 lg:px-16"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-main/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <span
                  className={`text-secondary-accent/30 text-[8rem] font-bold leading-none block -mb-8 ${climateCrisis.className}`}
                >
                  {step.number}
                </span>
                <h3
                  className={`text-primary-main text-3xl md:text-4xl font-bold uppercase mb-4 relative z-10 ${archivo.className}`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-primary-main/60 text-base leading-relaxed max-w-md ${archivo.className}`}
                >
                  {step.description}
                </p>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mt-8">
                  {STEPS.map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 transition-all duration-300 ${
                        j <= i
                          ? "w-8 bg-secondary-accent"
                          : "w-4 bg-primary-main/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
