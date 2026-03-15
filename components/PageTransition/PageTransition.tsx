"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const stairsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, lenis]);

  useGSAP(
    () => {
      if (pathname === "/") return;

      const tl = gsap.timeline();

      gsap.set(container.current, {
        y: 40,
        opacity: 0,
      });

      tl.to(stairsRef.current, {
        yPercent: 100,
        duration: 0.6,
        ease: "power3.inOut",
        stagger: 0.08,
      }).to(
        container.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.4",
      );
    },
    { revertOnUpdate: true, dependencies: [pathname] },
  );

  if (pathname === "/") {
    return <>{children}</>;
  }

  const stairColumns = 5;

  return (
    <>
      <div className="fixed inset-0 z-100 pointer-events-none flex">
        {[...Array(stairColumns)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              stairsRef.current[i] = el;
            }}
            className="h-full w-1/5 bg-primary-main"
          />
        ))}
      </div>

      <div ref={container} className="w-full">
        {children}
      </div>
    </>
  );
}
