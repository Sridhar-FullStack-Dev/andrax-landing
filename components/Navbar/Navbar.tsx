"use client";
import { archivo } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import RollingText from "../ui/rolling-text";
import TopBanner from "./TopBanner";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
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
          } else if (self.direction === -1) {
            showNav.reverse();
          }
        },
      });
    },
    { scope: navRef },
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full uppercase text-sm font-medium ${archivo.className} text-primary-main transition-colors duration-300 z-30 bg-white`}
    >
      <TopBanner />

      <div className="flex items-center justify-between px-8 bg-white shadow">
        <div className="w-1/3 flex items-center justify-start gap-6">
          <RollingText text="Home" />
          <RollingText text="About" />
          <RollingText text="Services" />

          <div>
            <div className="flex justify-between items-center gap-1">
              <RollingText text="Products" />
              <IoChevronDown className="size-4" />
            </div>
          </div>
        </div>

        <Link href={"/"} className="w-1/3 flex items-center justify-center">
          <Image
            src={"/logo-green.png"}
            width={200}
            height={200}
            alt="Andrax Pvt Ltd."
            className="size-15 object-contain"
          />
        </Link>

        <div className="w-1/3 flex items-center justify-end gap-6">
          <RollingText text="blog" />
          <RollingText text="Contact us" />
        </div>
      </div>
    </nav>
  );
}
