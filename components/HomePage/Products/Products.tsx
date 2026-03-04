"use client";
import { products } from "@/lib/const";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

gsap.registerPlugin(useGSAP);

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  // Update animated indicator position and size
  useGSAP(() => {
    const activeElement = tabsRef.current[activeTab];
    if (activeElement && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        x: activeElement.offsetLeft,
        y: activeElement.offsetTop,
        width: activeElement.offsetWidth,
        height: activeElement.offsetHeight,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [activeTab]);

  // Handle window resize to reposition indicator smoothly
  useEffect(() => {
    const handleResize = () => {
      const activeElement = tabsRef.current[activeTab];
      if (activeElement && indicatorRef.current) {
        gsap.set(indicatorRef.current, {
          x: activeElement.offsetLeft,
          y: activeElement.offsetTop,
          width: activeElement.offsetWidth,
          height: activeElement.offsetHeight,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  // Handle Image Grid Animations on Tab Change
  useGSAP(() => {
    if (gridRef.current) {
      const images = gsap.utils.toArray(
        gridRef.current.querySelectorAll(".product-image-wrap"),
      );
      const texts = gsap.utils.toArray(
        gridRef.current.querySelectorAll(".product-text"),
      );

      // Kill any ongoing animations to prevent clipping glitches
      gsap.killTweensOf([...images, ...texts]);

      const tl = gsap.timeline();

      // Set initial states for clip-path and text
      gsap.set(images, {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 0.95,
      });
      gsap.set(texts, { opacity: 0, y: 15 });

      // Build the stagger reveal timeline
      tl.to(images, {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1.2,
        ease: "power4.inOut",
        stagger: 0.1,
      }).to(
        texts,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.8",
      );
    }
  }, [activeTab]);

  return (
    <section id="products" className="bg-white py-20 px-8 overflow-hidden">
      <div className="products-heading flex justify-between items-end">
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
      </div>

      <div className="relative flex justify-start items-center gap-2 my-6 z-10 w-full overflow-x-auto no-scrollbar pb-2">
        <div
          ref={indicatorRef}
          className="absolute left-0 top-0 bg-primary-main rounded-full pointer-events-none z-0"
          style={{ width: 0, height: 0 }}
        />

        {products.map((product, index) => {
          const isActive = activeTab === index;
          return (
            <div
              key={index}
              ref={(el) => {
                if (el) tabsRef.current[index] = el;
              }}
              onClick={() => setActiveTab(index)}
              className={`relative shrink-0 cursor-pointer border rounded-full px-4 py-2 w-fit uppercase flex items-center gap-2 transition-colors duration-300 z-10 ${
                archivo.className
              } ${
                isActive
                  ? "text-off-white border-transparent"
                  : "text-primary-main border-gray-300 hover:border-primary-main"
              }`}
            >
              <div
                className={`${isActive ? "text-secondary-accent" : "text-primary-main"}`}
              >
                {product.icon}
              </div>
              <p className="text-sm tracking-wide">{product.name}</p>
            </div>
          );
        })}
      </div>

      <div
        ref={gridRef}
        key={activeTab}
        className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {products[activeTab].items?.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer w-full overflow-hidden"
          >
            <div className="product-image-wrap w-full aspect-3/4 bg-gray-50 flex items-center justify-center relative shadow-sm border border-gray-100 overflow-hidden rounded-none">
              <Image
                src={item.image}
                alt={item.name}
                height={512}
                width={512}
                className="size-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="flex justify-between items-center">
                  <div
                    className={`flex justify-start items-center gap-2 product-text text-left text-secondary-accent uppercase font-semibold text-lg ${jetbrainsMono.className} bg-primary-main w-fit px-4 py-2`}
                  >
                    {item.name}
                  </div>

                  <div className="size-11 flex justify-center items-center gap-2 product-text text-left text-primary-main uppercase font-semibold text-lg bg-white">
                    <GoArrowUpRight className="size-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
