"use client";

import { archivo, jetbrainsMono } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaCottonBureau } from "react-icons/fa";
import { GiCoconuts } from "react-icons/gi";
import { LuNut } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiCarrot, PiCowLight, PiFlowerLotus } from "react-icons/pi";
import { TfiArrowTopRight } from "react-icons/tfi";

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
    <section className="bg-white py-20 px-6 overflow-hidden">
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
        {/* Animated GSAP Background Indicator */}
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
        key={activeTab} // Using key forces React to fully remount the grid on tab change to reset animations
        className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {products[activeTab].items?.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer w-full"
          >
            <div className="product-image-wrap w-full aspect-3/4 bg-gray-50 flex items-center justify-center relative shadow-sm border border-gray-100 overflow-hidden rounded-none">
              <Image
                src={item.image}
                alt={item.name}
                height={512}
                width={512}
                className="size-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="flex justify-between items-center">
                  <div
                    className={`flex justify-start items-center gap-2 product-text text-left text-secondary-accent uppercase font-semibold text-lg ${jetbrainsMono.className} bg-primary-main w-fit px-4 py-2`}
                  >
                    {item.name}

                    <TfiArrowTopRight />
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

const products = [
  {
    name: "Coir Products",
    icon: <GiCoconuts className="size-5" />,
    items: [
      {
        name: "Coir Mulch Mats",
        image: "/products/andrax-coir-mulch-mat.png",
      },
      {
        name: "Coconut Shell Biochar",
        image: "/products/andrax-coconut-shell-biochar.png",
      },
      {
        name: "Coir Pith",
        image: "/products/andrax-coir-pith.png",
      },
      {
        name: "Coco Peat",
        image: "/products/andrax-coco-peat.png",
      },
      {
        name: "Coconut milk",
        image: "/products/andrax-coconut-milk.png",
      },
      {
        name: "Desiccated Coconut Powder",
        image: "/products/andrax-desiccated-coconut-powder.png",
      },
      {
        name: "Coconut Chips",
        image: "/products/andrax-coconut-chips.png",
      },
      {
        name: "Coco Husk Chips",
        image: "/products/andrax-coco-husk-chips.png",
      },
      {
        name: "Coir Mats",
        image: "/products/andrax-coir-mats.png",
      },
    ],
  },
  {
    name: "Chemical Products",
    icon: <AiOutlineExperiment className="size-5" />,
    items: [
      {
        name: "Sodium Carbonate",
        image: "/products/andrax-sodium-carbonate.png",
      },
      {
        name: "Sulphuric Acid",
        image: "/products/andrax-sulphuric-acid.png",
      },
      {
        name: "Caustic Soda",
        image: "/products/andrax-caustic-soda.png",
      },
      {
        name: "Potassium",
        image: "/products/andrax-potassium.png",
      },
      {
        name: "Potassium Sulphate",
        image: "/products/andrax-potassium-sulphate.png",
      },
      {
        name: "Ammonium",
        image: "/products/andrax-ammonium.png",
      },
      {
        name: "Ethanol alcohol",
        image: "/products/andrax-ethanol-alcohol.png",
      },
    ],
  },
  {
    name: "Fruits & Vegetables",
    icon: <PiCarrot className="size-5" />,
    items: [
      {
        name: "Apple",
        image: "/products/andrax-apple.png",
      },
      { name: "Strawberry", image: "" },
      { name: "Pumpkin", image: "" },
      { name: "Green Beans", image: "" },
      { name: "Onion big", image: "" },
      { name: "Small onion", image: "" },
      { name: "Broccoli", image: "" },
      { name: "Drumstick", image: "" },
    ],
  },
  {
    name: "Imported Nuts",
    icon: <LuNut className="size-5" />,
    items: [
      { name: "Cashewnut", image: "" },
      { name: "Dates", image: "" },
      { name: "Pistachio", image: "" },
    ],
  },
  {
    name: "Scrap Products",
    icon: <FaCottonBureau className="size-5" />,
    items: [
      { name: "Copper scrap", image: "" },
      { name: "Aluminum scrap", image: "" },
      { name: "Plastic granules", image: "" },
      { name: "Cotton box", image: "" },
    ],
  },
  {
    name: "Animal Feeds",
    icon: <PiCowLight className="size-5" />,
    items: [
      { name: "soyabean", image: "" },
      { name: "corn", image: "" },
      { name: "Alfalfa Hay", image: "" },
    ],
  },
  {
    name: "Plants & Nursing",
    icon: <PiFlowerLotus className="size-5" />,
    items: [
      {
        name: "Coconut Seedlings (Tall / Dwarf / Hybrid)",
        image: "/products/andrax-coconut-seedlings.png",
      },
      {
        name: "Tissue Culture Plants",
        image: "/products/andrax-tissue-culture-plants.png",
      },
      { name: "Seed Nuts", image: "" },
      { name: "Nursery Polybag Plants", image: "" },
    ],
  },
  {
    name: "Petroleum Products",
    icon: <MdOutlineWaterDrop className="size-5" />,
    items: [
      {
        name: "Petroleum Jelly",
        image: "/products/andrax-petroleum-jelly.png",
      },
      {
        name: "Synthetic Fibers (Polyester, Nylon)",
        image: "/products/andrax-synthetic-fibers.png",
      },
      {
        name: "Paraffin Wax (Candles)",
        image: "/products/andrax-paraffin-wax.png",
      },
      {
        name: "Detergent Raw Materials",
        image: "/products/andrax-detergent-raw-materials.png",
      },
    ],
  },
];
