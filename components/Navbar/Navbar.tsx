"use client";

import { lexendDeca } from "@/lib/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import Logo from "../ui/logo";
import RollingText from "../ui/rolling-text";
import Menu from "./Menu/Menu";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll("[data-theme]");

      sections.forEach((section) => {
        const themeValue = section.getAttribute("data-theme");

        ScrollTrigger.create({
          trigger: section,
          start: "top 5%",
          end: "bottom top",
          onEnter: () => setTheme(themeValue === "white" ? "dark" : "light"),
          onEnterBack: () =>
            setTheme(themeValue === "white" ? "dark" : "light"),
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  const textColor =
    theme === "light" ? "text-off-white-2" : "text-primary-main";
  const logoSrc = theme === "light" ? "/logo-gold.png" : "/logo-green.png";

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 flex items-center justify-between uppercase text-base font-normal ${lexendDeca.className} ${textColor} transition-colors duration-300 z-30`}
    >
      <Menu />

      <Link href={"/"} className="w-1/3 flex items-center justify-center">
        <Logo src={logoSrc} />
      </Link>

      <Link href={"/contact-us"} className="w-1/3 flex items-end justify-end">
        <RollingText text="Contact us" textClassName="text-base font-normal" />
      </Link>
    </nav>
  );
}
