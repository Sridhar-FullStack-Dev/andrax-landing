"use client";

import Grainient from "@/components/Grainient";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "center center",
          scrub: true,
          once: true,
        },
      });

      tl.fromTo(
        imageRef.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power1.inOut",
        },
      ).fromTo(
        borderContainerRef.current,
        { borderColor: "transparent" },
        {
          borderColor: "var(--color-secondary-accent)",
          duration: 0.1,
          ease: "power1.inOut",
        },
        ">",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-8 overflow-hidden"
    >
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

        <div
          ref={borderContainerRef}
          className="border p-6 rounded-tr-[230px] rounded-bl-[230px] overflow-hidden transition-colors"
          style={
            { "--color-secondary-accent": "#CFA849" } as React.CSSProperties
          }
        >
          <Image
            ref={imageRef}
            src={
              "https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg"
            }
            alt="about us"
            width={1200}
            height={512}
            priority
            className="w-full h-120 object-cover rounded-tr-[210px] rounded-bl-[210px] grayscale opacity-80 hover:opacity-100 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
