"use client";

import { archivo } from "@/lib/fonts";
import Link from "next/link";
import UnderlineAnimText from "../ui/underline-anim";
import Logo from "../ui/logo";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  const textColor = theme === "light" ? "text-off-white" : "text-primary-main";
  const lineColor = theme === "light" ? "bg-off-white" : "bg-primary-main";
  const logoSrc = theme === "light" ? "/logo-gold.png" : "/logo-green.png";

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 flex items-center justify-between uppercase text-sm font-normal ${archivo.className} ${textColor} transition-colors duration-300 z-30`}
    >
      <Menu theme={theme} />

      <div className="w-1/3 flex items-center justify-center">
        <Logo src={logoSrc} />
      </div>

      <Link href={"/contact-us"} className="w-1/3 flex items-end justify-end">
        <UnderlineAnimText
          text="Contact us"
          lineColor={lineColor}
          textColor={textColor}
        />
      </Link>
    </nav>
  );
}
