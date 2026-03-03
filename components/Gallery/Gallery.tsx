"use client";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GALLERY_IMAGES = [
  {
    src: "/images/coconut-seedlings-nursery.jpeg",
    alt: "Coconut seedlings nursery",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/founder-with-truck.jpeg",
    alt: "Founder overseeing operations",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/export-boxes-branded.jpeg",
    alt: "Branded export boxes",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/coconut-sprouts-loading.jpeg",
    alt: "Loading coconut sprouts",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/coir-peat-blocks.jpeg",
    alt: "Coir peat blocks in warehouse",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/plants-under-palm.jpeg",
    alt: "Plants ready for export",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/plant-saplings-packed.jpeg",
    alt: "Plant saplings being packed",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/coconut-sprouts-nursery.jpeg",
    alt: "Coconut sprouts nursery",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/cocopeat-mix-closeup.jpeg",
    alt: "Cocopeat mix closeup",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".gallery-heading", {
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

      gsap.from(".gallery-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-item",
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
      id="gallery"
      className="py-32 px-8 bg-white"
    >
      {/* Heading */}
      <div className="gallery-heading mb-16 flex justify-between items-end">
        <div>
          <span
            className={`text-accent-main text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
          >
            Behind the Scenes
          </span>
          <h2
            className={`text-primary-main text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none ${archivo.className}`}
          >
            Our Story in
            <br />
            <span className="text-accent-main italic">Pictures</span>
          </h2>
        </div>
        <p
          className={`hidden md:block text-primary-main/50 text-sm max-w-xs text-right leading-relaxed ${archivo.className}`}
        >
          From the farms of South India to shipping ports — a glimpse into our
          daily operations.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`gallery-item group relative overflow-hidden cursor-pointer ${img.span}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-primary-main/20 group-hover:bg-transparent transition-colors duration-500" />

            {/* Caption on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p
                className={`text-white text-xs uppercase tracking-wider ${archivo.className}`}
              >
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
