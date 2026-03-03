"use client";
import { archivo, climateCrisis, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
  IoEarth,
  IoShieldCheckmark,
  IoCube,
  IoRocket,
} from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const USPS = [
  {
    icon: IoEarth,
    number: "01",
    title: "Global Reach",
    description:
      "Exporting to 15+ countries across the Middle East, Southeast Asia, Europe, and Africa with established trade partnerships.",
  },
  {
    icon: IoShieldCheckmark,
    number: "02",
    title: "Certified Quality",
    description:
      "Full phytosanitary certification, APEDA registered, and compliance with international agricultural import regulations.",
  },
  {
    icon: IoCube,
    number: "03",
    title: "Secure Packaging",
    description:
      "Custom packaging solutions including compressed blocks, branded cartons, foam-netted produce, and fumigated wooden pallets.",
  },
  {
    icon: IoRocket,
    number: "04",
    title: "Timely Delivery",
    description:
      "End-to-end logistics management with port-to-port and door-to-door delivery options. Cold chain for perishables.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".whyus-heading", {
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

      gsap.from(".usp-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".usp-card",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-32 px-8 bg-primary-main relative overflow-hidden"
    >
      {/* Decorative large text in background */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] whitespace-nowrap uppercase pointer-events-none select-none ${climateCrisis.className}`}
      >
        ANDRAX
      </div>

      {/* Heading */}
      <div className="whyus-heading mb-20 relative z-10">
        <span
          className={`text-secondary-accent text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
        >
          Why Choose Us
        </span>
        <h2
          className={`text-off-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none ${archivo.className}`}
        >
          Built for{" "}
          <span className="text-secondary-accent italic">Excellence</span>
        </h2>
      </div>

      {/* USP Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {USPS.map((usp, i) => {
          const IconComp = usp.icon;
          return (
            <div
              key={i}
              className="usp-card group border border-off-white/10 p-8 flex flex-col justify-between min-h-[320px] hover:bg-off-white/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Number */}
              <span
                className={`text-off-white/10 text-6xl font-bold absolute top-4 right-4 ${climateCrisis.className}`}
              >
                {usp.number}
              </span>

              {/* Icon */}
              <div className="mb-8">
                <div className="w-14 h-14 bg-secondary-accent/10 border border-secondary-accent/30 flex items-center justify-center group-hover:bg-secondary-accent/20 transition-colors duration-500">
                  <IconComp className="w-6 h-6 text-secondary-accent" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3
                  className={`text-off-white text-xl font-bold uppercase mb-3 ${archivo.className}`}
                >
                  {usp.title}
                </h3>
                <p
                  className={`text-off-white/50 text-sm leading-relaxed ${archivo.className}`}
                >
                  {usp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
