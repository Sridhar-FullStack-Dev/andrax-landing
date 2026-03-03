"use client";
import { archivo, climateCrisis } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Grainient from "../Grainient";

gsap.registerPlugin(ScrollTrigger);

const TICKER_ITEMS = [
  "Coir Products",
  "Coconut Husks",
  "Cocopeat Blocks",
  "Plant Saplings",
  "Fresh Mangoes",
  "Grow Bags",
  "Coir Fiber",
  "Coconut Seedlings",
  "Potting Mix",
  "Export Packaging",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-line", {
        yPercent: 110,
        skewY: 7,
        duration: 1.2,
        stagger: 0.15,
      })
        .from(
          subRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          tickerRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );

      // Parallax image on scroll
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out hero content on scroll
      gsap.to(overlayRef.current, {
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-theme="white"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Grainient */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#1a4a30"
          color2="#0d2818"
          color3="#2a5a1a"
          timeSpeed={0.15}
          contrast={1.3}
          grainAmount={0.06}
          warpAmplitude={80}
          warpSpeed={1}
          saturation={0.9}
          zoom={1}
        />
      </div>

      {/* Background image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-[1]"
        style={{ top: "-10%", height: "120%" }}
      >
        <Image
          src="/images/coconut-seedlings-nursery.jpeg"
          alt="Coconut seedlings nursery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-main/70" />
      </div>

      {/* Content overlay */}
      <div
        ref={overlayRef}
        className="relative z-10 h-full flex flex-col justify-center items-center px-8 text-center"
      >
        {/* Heading */}
        <div ref={headingRef} className="mb-6">
          <div className="overflow-hidden">
            <h1
              className={`hero-line text-off-white text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-bold uppercase tracking-tight ${archivo.className}`}
            >
              From Indian Soil
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className={`hero-line text-secondary-accent text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-bold uppercase tracking-tight ${archivo.className}`}
            >
              To Global Growth
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subRef}
          className={`text-off-white/80 text-base md:text-lg max-w-2xl mb-10 tracking-wide uppercase ${archivo.className}`}
        >
          Coir&nbsp;&nbsp;·&nbsp;&nbsp;Coconut&nbsp;&nbsp;·&nbsp;&nbsp;Plants&nbsp;&nbsp;·&nbsp;&nbsp;Fresh
          Produce — Export Grade Quality Since 2018
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex gap-4 items-center">
          <button
            className={`group relative px-8 py-4 bg-secondary-accent text-primary-main uppercase text-sm font-bold tracking-widest overflow-hidden cursor-pointer transition-all duration-500 hover:bg-accent-main ${archivo.className}`}
          >
            <span className="relative z-10">Explore Products</span>
          </button>
          <button
            className={`group relative px-8 py-4 border-2 border-off-white/40 text-off-white uppercase text-sm font-bold tracking-widest cursor-pointer transition-all duration-500 hover:bg-off-white/10 hover:border-off-white ${archivo.className}`}
          >
            <span className="relative z-10">Request a Quote</span>
          </button>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div
        ref={tickerRef}
        className="absolute bottom-0 left-0 w-full z-20 border-t border-off-white/20 bg-primary-main/60 backdrop-blur-sm"
      >
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className={`whitespace-nowrap px-8 py-4 text-sm uppercase tracking-widest text-off-white/70 ${archivo.className}`}
              >
                {item}
                <span className="ml-8 text-secondary-accent">✦</span>
              </span>
            ))}
          </div>
          <div
            className="flex shrink-0 animate-marquee items-center"
            aria-hidden="true"
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={`dup-${i}`}
                className={`whitespace-nowrap px-8 py-4 text-sm uppercase tracking-widest text-off-white/70 ${archivo.className}`}
              >
                {item}
                <span className="ml-8 text-secondary-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
