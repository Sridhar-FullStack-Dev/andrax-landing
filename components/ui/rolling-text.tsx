"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface RollingTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  duration?: number;
}

export default function RollingText({
  text,
  className = "",
  textClassName = "",
  duration = 0.3,
}: RollingTextProps) {
  const container = useRef<HTMLSpanElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const onMouseEnter = contextSafe(() => {
    gsap.to(".original-text", {
      y: "-100%",
      skewX: -10,
      duration: duration,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      ".hover-text",
      {
        y: "100%",
        skewX: -10,
      },
      {
        y: "0%",
        skewX: 0,
        duration: duration,
        ease: "power1.inOut",
      },
    );
  });

  const onMouseLeave = contextSafe(() => {
    gsap.fromTo(
      ".original-text",
      {
        y: "-100%",
        skewX: -10,
      },
      {
        y: "0%",
        skewX: 0,
        duration: duration,
        ease: "power1.inOut",
      },
    );
    gsap.to(".hover-text", {
      y: "100%",
      skewX: -10,
      duration: duration,
      ease: "power1.inOut",
    });
  });

  return (
    <span
      ref={container}
      className={`relative inline-block overflow-hidden cursor-pointer group ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="sr-only">{text}</span>
      <span
        className={`original-text flex relative ${textClassName}`}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className={`hover-text flex absolute top-0 left-0 w-full h-full translate-y-full ${textClassName}`}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}
