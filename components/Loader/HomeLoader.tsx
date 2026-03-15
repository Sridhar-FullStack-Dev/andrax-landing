"use client";

import { archivo, lexendDeca } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function HomeLoader() {
  const container = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const counterRef = useRef<HTMLDivElement>(null);

  const [isFinished, setIsFinished] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsFinished(true);
        },
      });

      // Initial state
      gsap.set(container.current, {
        autoAlpha: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      });
      gsap.set(lettersRef.current, { yPercent: 110 });
      gsap.set(textContainer.current, { scale: 1 });

      const counter = { val: 0 };

      // 1. Letters slide up in stagger
      tl.to(lettersRef.current, {
        yPercent: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
      })
        // 2. Counter ticks up alongside
        .to(
          counter,
          {
            val: 100,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.innerText = Math.round(counter.val) + "%";
              }
            },
          },
          "-=1",
        )
        // 3. Background wipe / Slice out
        .to(
          container.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1,
            ease: "power4.inOut",
          },
          "-=0.9",
        );
    },
    { revertOnUpdate: true },
  );

  if (isFinished) return null;

  const brandName = "ANDRAX".split("");

  return (
    <div
      ref={container}
      className="fixed inset-0 z-100 bg-primary-main flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      <div
        ref={textContainer}
        className={cn(
          "flex flex-col items-center relative",
          lexendDeca.className,
        )}
      >
        <div
          className={`flex overflow-hidden text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-2 pb-2 ${archivo.className}`}
        >
          {brandName.map((letter, i) => (
            <span
              key={i}
              ref={(el) => {
                lettersRef.current[i] = el;
              }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </div>

        <span className="text-secondary-accent text-sm md:text-lg tracking-[0.6em] uppercase font-medium">
          Exports
        </span>
      </div>

      <div
        ref={counterRef}
        className={cn(
          "absolute bottom-12 right-12 text-5xl md:text-7xl lg:text-8xl font-black text-white/10 mix-blend-screen",
          lexendDeca.className,
        )}
      >
        0%
      </div>
    </div>
  );
}
