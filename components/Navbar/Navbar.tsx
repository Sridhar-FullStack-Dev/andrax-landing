"use client";
import { lexendDeca } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef, useCallback } from "react";
import { IoChevronDown, IoClose } from "react-icons/io5";
import RollingText from "../ui/rolling-text";
import UnderlineAnimText from "../ui/underline-anim";
import TopBanner from "./TopBanner";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
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

      {/* Full Page Dropdown */}
      <div
        ref={dropdownRef}
        className="absolute top-full left-0 w-full bg-white px-8 py-16"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          height: "calc(100vh - 100%)",
        }}
      >
        <div>
          <div className="flex justify-between items-start gap-8 mb-16">
            <DropdownColumn
              title="Growing Media"
              links={[
                "Cocopeat Blocks",
                "Grow Bags",
                "Coco Discs/Coins",
                "Coco Chips",
              ]}
            />
            <DropdownColumn
              title="Horticulture"
              links={["Coir Pots", "Coir Poles", "Mulch Mats", "Weed Control"]}
            />
            <DropdownColumn
              title="Erosion Control"
              links={["Coir Geotextiles", "Coir Logs", "Coir Wattles"]}
            />
            <DropdownColumn
              title="Home & Garden"
              links={[
                "Coir Mats",
                "Coir Baskets",
                "Coir Twine/Yarn",
                "Pet Bedding",
              ]}
            />
            <DropdownColumn
              title="Industrial"
              links={["Coir Fiber", "Coir Pith", "Curled Coir", "Bristle Coir"]}
            />

            <button
              onClick={closeDropdown}
              aria-label="Close menu"
              className="text-lg px-4 pb-2 pt-3 bg-primary-main uppercase text-off-white-2 cursor-pointer"
            >
              <RollingText text="close" />
            </button>
          </div>

          <div>
            <h2 className="text-4xl my-4 text-off-white-2 px-4 py-2 w-fit flex justify-center items-center gap-2 relative">
              <div
                ref={topProductsBgRef}
                className="absolute inset-0 bg-primary-main -z-10 origin-left"
                style={{ transform: "scaleX(0)" }}
              ></div>
              Top Products
            </h2>
            <div className="grid grid-cols-4 gap-6">
              <ProductCard
                name="Coconut Husks"
                imageUrl="https://images.pexels.com/photos/27596374/pexels-photo-27596374.jpeg"
              />
              <ProductCard
                name="Coir Peat Blocks"
                imageUrl="https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg"
              />
              <ProductCard
                name="Tree Resins"
                imageUrl="https://images.pexels.com/photos/7256839/pexels-photo-7256839.jpeg"
              />
              <ProductCard
                name="Petroleum Jelly"
                imageUrl="https://images.pexels.com/photos/5450888/pexels-photo-5450888.jpeg"
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
              textColor="#143423"
              lineColor="#143423"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <div className="group cursor-pointer relative aspect-4/5 overflow-hidden">
      <Image src={imageUrl} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <p className="absolute bottom-6 left-6 text-white font-medium text-lg tracking-wide">
        {name}
      </p>
    </div>
  );
}
