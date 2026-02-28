"use client";
import { lexendDeca } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import RollingText from "../ui/rolling-text";
import TopBanner from "./TopBanner";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let lastScrollY = window.scrollY;

      const showNav = gsap.fromTo(
        navRef.current,
        { y: 0 },
        {
          y: () => -(navRef.current?.offsetHeight || 100),
          duration: 0.3,
          ease: "power2.inOut",
          paused: true,
        },
      );

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          const currentScrollY = window.scrollY;

          if (currentScrollY <= 0) {
            showNav.reverse();
          } else if (
            self.direction === 1 &&
            currentScrollY > lastScrollY + 10
          ) {
            showNav.play();
          } else if (
            self.direction === -1 &&
            currentScrollY < lastScrollY - 10
          ) {
            showNav.reverse();
          }

          lastScrollY = currentScrollY;
        },
      });
    },
    { scope: navRef },
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full uppercase text-sm font-normal ${lexendDeca.className} text-primary-main transition-colors duration-300 z-30 bg-white`}
    >
      <TopBanner />

      <div className="flex items-center justify-between px-8 bg-white shadow-sm">
        <div className="w-1/3">
          <RollingText text="Menu" />
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
        <Link href={"/contact-us"} className="w-1/3 flex items-end justify-end">
          <RollingText text="Contact us" />
        </Link>
      </div>
    </nav>
  );
}
