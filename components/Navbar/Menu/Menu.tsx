"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./Menu.scss";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/contact-us", label: "Contact" },
];

interface MenuProps {
  theme?: "light" | "dark";
}

export default function Menu({ theme = "light" }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      gsap.set(".bar", { transformOrigin: "top", scaleY: 0 });
      gsap.set(".menu-nav-link", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        y: 30,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(".bar", {
        duration: 1,
        scaleY: 1,
        stagger: 0.1,
        ease: "power4.inOut",
      });

      tl.to(
        ".menu-nav-link",
        {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
        },
        "-=0.7",
      );

      tlRef.current = tl;
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (tlRef.current) {
      if (isOpen) {
        tlRef.current.play();
      } else {
        tlRef.current.reverse();
      }
    }
  }, [isOpen]);

  const toggleColor = isOpen
    ? "bg-off-white"
    : theme === "light"
      ? "bg-off-white"
      : "bg-off-green";

  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(topBarRef.current, {
        rotation: 45,
        y: 4,
        duration: 0.3,
        backgroundColor: "#F8FAF8",
      });
      gsap.to(bottomBarRef.current, {
        rotation: -45,
        y: -4,
        duration: 0.3,
        backgroundColor: "#F8FAF8",
      });
    } else {
      gsap.to(topBarRef.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        backgroundColor: theme === "light" ? "#F8FAF8" : "#404f1d",
      });
      gsap.to(bottomBarRef.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        backgroundColor: theme === "light" ? "#F8FAF8" : "#404f1d",
      });
    }
  }, [isOpen, theme]);

  return (
    <div ref={containerRef} className="w-1/3 flex items-start justify-start">
      {/* Toggle Button */}
      <div className="menu-toggle z-50 relative" onClick={toggleMenu}>
        <div ref={topBarRef} className={`menu-toggle-bar ${toggleColor}`}></div>
        <div
          ref={bottomBarRef}
          className={`menu-toggle-bar ${toggleColor}`}
        ></div>
      </div>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`} ref={overlayRef}>
        {/* Background Columns */}
        <div className="menu-overlay-bar">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <div className="menu-nav-container">
          {menuLinks.map((link, index) => (
            <div key={index} className="menu-nav-item">
              <Link
                href={link.path}
                className="menu-nav-link"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Footer info or extra polish can go here if needed */}
        <div
          className="flex justify-between items-end text-off-white opacity-0 animate-in fade-in duration-1000 delay-500"
          style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.5s 0.5s" }}
        >
          <p className="text-sm">Andrax Exports Pvt Ltd</p>
          <p className="text-sm">Est. 2024</p>
        </div>
      </div>
    </div>
  );
}
