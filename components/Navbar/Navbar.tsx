"use client";
import { jetbrainsMono, lexendDeca } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import RollingText from "../ui/rolling-text";
import UnderlineAnimText from "../ui/underline-anim";
import TopBanner from "./TopBanner";
import { IoClose } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const lenis = useLenis();
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const topProductsBgRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      const showNav = gsap.to(navRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power1.inOut",
        paused: true,
      });

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.scroll() <= 0) {
            showNav.reverse();
          } else if (self.direction === 1) {
            showNav.play();
            gsap.to(dropdownRef.current, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: 0.4,
              ease: "power3.inOut",
              overwrite: "auto",
            });
            gsap.to(lineRef.current, {
              scaleX: 0,
              duration: 0.4,
              ease: "power3.inOut",
              overwrite: "auto",
            });
            gsap.to(topProductsBgRef.current, {
              scaleX: 0,
              duration: 0.4,
              ease: "power3.inOut",
              overwrite: "auto",
            });
          } else if (self.direction === -1) {
            showNav.reverse();
          }
        },
      });
    },
    { scope: navRef },
  );

  const openDropdown = useCallback(() => {
    contextSafe(() => {
      gsap.to(dropdownRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.6,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.fromTo(
        topProductsBgRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        },
      );
    })();
  }, [contextSafe]);

  const closeDropdown = useCallback(() => {
    contextSafe(() => {
      gsap.to(dropdownRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.4,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(lineRef.current, {
        scaleX: 0,
        duration: 0.4,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(topProductsBgRef.current, {
        scaleX: 0,
        duration: 0.4,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    })();
  }, [contextSafe]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full uppercase text-sm font-medium ${lexendDeca.className} text-primary-main transition-colors duration-300 z-30 bg-white`}
      onMouseLeave={closeDropdown}
    >
      <TopBanner />

      <div className="flex items-center justify-between px-8 bg-white relative z-20 shadow">
        <div className="w-1/3 flex items-center justify-start gap-6">
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="Home" />
          </div>
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="About" />
          </div>
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="Services" />
          </div>

          <div
            className="cursor-pointer flex items-center gap-1"
            onMouseEnter={openDropdown}
          >
            <RollingText text="Products" />
            <IoChevronDown className="size-4" />
          </div>
        </div>

        <Link
          href={"/"}
          className="w-1/3 flex items-center justify-center"
          onMouseEnter={closeDropdown}
        >
          <Image
            src={"/logo-green.png"}
            width={200}
            height={200}
            priority
            alt="Andrax Pvt Ltd."
            className="size-15 object-contain"
          />
        </Link>

        <div className="w-1/3 flex items-center justify-end gap-6">
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="blog" />
          </div>
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="Contact us" />
          </div>
        </div>

        <div
          ref={lineRef}
          className="h-[3px] w-full bg-primary-main absolute bottom-0 left-0 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div
        ref={dropdownRef}
        data-lenis-prevent
        className="absolute top-full left-0 w-full bg-white px-8 py-16"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          height: "calc(100vh - 100%)",
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 justify-between items-start mb-16 relative">
            <DropdownColumn
              title="Coir Products"
              links={[
                "Coir Mulch Mats",
                "Coconut Shell Biochar",
                "Coco Peat (Coir Pith)",
                "Coco Peat",
                "Coconut milk",
              ]}
            />
            <DropdownColumn
              title="Chemical Products"
              links={[
                "Sodium Carbonate",
                "Sulphuric Acid",
                "Caustic Soda",
                "Potassium",
                "Potassium Sulphate",
              ]}
            />
            <DropdownColumn
              title="Fruits & Vegetable"
              links={[
                "Apple",
                "Strawberry",
                "Pumpkin",
                "Green Beans",
                "Onion big",
              ]}
            />
            <DropdownColumn
              title="Scrap Products"
              links={[
                "Copper scrap",
                "Aluminum scrap",
                "Plastic granules",
                "Cotton box",
              ]}
            />
            <DropdownColumn
              title="Animals Feed"
              links={["soyabean", "corn", "Alfalfa Hay"]}
            />
            <DropdownColumn
              title="Plant & Nursing"
              links={[
                "Coconut Seedlings",
                "Tissue Culture Plants",
                "Seed Nuts",
                "Nursery Polybag Plants",
              ]}
            />
            <DropdownColumn
              title="Petroleum Base"
              links={[
                "Petroleum Jelly",
                "Synthetic Fibers",
                "Paraffin Wax",
                "Detergent Raw Materials",
              ]}
            />
          </div>

          <div>
            <div className="flex justify-between gap-4 items-center">
              <div className="text-xl my-4 text-off-white-2 px-4 py-3 w-fit flex justify-center items-center gap-2 relative">
                <div
                  ref={topProductsBgRef}
                  className="absolute inset-0 bg-primary-main -z-10 origin-left"
                  style={{ transform: "scaleX(0)" }}
                ></div>
                Top Products
              </div>

              <div className="flex justify-end items-center gap-4">
                <button
                  onClick={() => lenis?.scrollTo("#products")}
                  className="text-lg px-4 py-2 flex items-center justify-center gap-1 bg-white border border-primary-main uppercase text-primary-main cursor-pointer w-fit"
                >
                  Show All Products
                </button>

                <button
                  onClick={closeDropdown}
                  aria-label="Close menu"
                  className="text-lg px-4 py-2 flex items-center justify-center gap-1 bg-primary-main border border-primary-main uppercase text-off-white-2 cursor-pointer w-fit"
                >
                  <RollingText text="close" />
                  <IoClose className="size-6" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <ProductCard
                name="Coir Mulch Mats"
                imageUrl="/products/andrax-coir-mulch-mat.png"
              />
              <ProductCard
                name="Fresh Fruits & Vegetables"
                imageUrl="/products/andrax-strawberry.png"
              />
              <ProductCard
                name="Chemical Products"
                imageUrl="/products/andrax-ethanol-alcohol.png"
              />
              <ProductCard
                name="Petroleum Jelly"
                imageUrl="/products/andrax-petroleum-jelly.png"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function DropdownColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-lg mb-2">{title}</h3>
      <ul className="space-y-1 text-sm">
        {links.map((link, i) => (
          <li key={i} className="cursor-pointer">
            <UnderlineAnimText
              text={link}
              textColor="#14342399"
              lineColor="#43522B"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <div className="group cursor-pointer relative aspect-4/5 overflow-hidden h-full">
      <Image
        src={imageUrl}
        alt={name}
        height={512}
        width={512}
        priority
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-0 flex flex-col justify-end p-2 z-20">
        <div className="flex justify-between items-center">
          <p
            className={`flex justify-start items-center gap-2 product-text text-left text-white uppercase font-semibold text-lg ${jetbrainsMono.className} w-fit px-4 py-2`}
          >
            {name}
          </p>
          <div className="size-11 flex justify-center items-center gap-2 product-text text-left text-primary-main uppercase font-semibold text-lg bg-white">
            <GoArrowUpRight className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
