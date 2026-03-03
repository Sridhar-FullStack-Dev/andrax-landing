"use client";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: "Cocopeat Blocks",
    category: "Growing Media",
    description:
      "Premium compressed coir pith blocks, ideal for horticulture and hydroponics. Excellent water retention and aeration properties.",
    image: "/images/coir-peat-blocks.jpeg",
    size: "large",
  },
  {
    name: "Raw Coconuts",
    category: "Coconut Products",
    description:
      "Bulk semi-husked and fully husked coconuts sourced directly from farms across South India.",
    image: "/images/raw-coconuts-pile.jpeg",
    size: "medium",
  },
  {
    name: "Plant Saplings",
    category: "Live Plants",
    description:
      "Export-certified nursery saplings including coconut, palm, and ornamental plants with phytosanitary compliance.",
    image: "/images/coconut-seedlings-nursery.jpeg",
    size: "medium",
  },
  {
    name: "Fresh Mangoes",
    category: "Fresh Produce",
    description:
      "Hand-selected Alphonso & Banganapalli mangoes, foam-netted and cold chain managed for international markets.",
    image: "/images/mangoes-packed.jpeg",
    size: "small",
  },
  {
    name: "Coir Fiber",
    category: "Industrial Coir",
    description:
      "Raw and processed coconut fiber for mattress manufacturing, erosion control, and geotextile applications.",
    image: "/images/coir-fiber-raw.jpeg",
    size: "small",
  },
  {
    name: "Potting Mix",
    category: "Growing Media",
    description:
      "Custom-blended cocopeat with perlite, optimized for professional nurseries and home gardening.",
    image: "/images/cocopeat-mix-hand.jpeg",
    size: "small",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".products-heading", {
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

      gsap.from(".product-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-card",
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
      id="products"
      className="py-32 px-8 bg-white"
    >
      {/* Section header */}
      <div className="products-heading flex justify-between items-end mb-16">
        <div>
          <span
            className={`text-accent-main text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
          >
            What We Export
          </span>
          <h2
            className={`text-primary-main text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none ${archivo.className}`}
          >
            Our Products
          </h2>
        </div>
        <button
          className={`hidden md:block px-6 py-3 border-2 border-primary-main text-primary-main text-xs uppercase tracking-widest font-bold hover:bg-primary-main hover:text-off-white transition-all duration-400 cursor-pointer ${archivo.className}`}
        >
          View All Products
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
        {PRODUCTS.map((product, i) => {
          const spanClasses =
            product.size === "large"
              ? "lg:col-span-2 lg:row-span-2"
              : product.size === "medium"
                ? "lg:col-span-2"
                : "";

          return (
            <div
              key={i}
              className={`product-card group relative overflow-hidden cursor-pointer ${spanClasses}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Category tag */}
              <span
                className={`absolute top-4 left-4 z-10 text-[10px] uppercase tracking-[0.2em] text-secondary-accent bg-primary-main/80 px-3 py-1 backdrop-blur-sm ${jetbrainsMono.className}`}
              >
                {product.category}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3
                  className={`text-white text-xl md:text-2xl font-bold uppercase mb-2 ${archivo.className}`}
                >
                  {product.name}
                </h3>
                <p
                  className={`text-white/60 text-sm leading-relaxed max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ${archivo.className}`}
                >
                  {product.description}
                </p>
              </div>

              {/* Corner arrow */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 rotate-45">
                <svg
                  className="w-4 h-4 text-white -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
