"use client";
import { climateCrisis } from "@/lib/fonts";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Loader = () => {
  const comp = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const digit1Ref = useRef<HTMLDivElement>(null);
  const digit2Ref = useRef<HTMLDivElement>(null);
  const digit3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set([digit1Ref.current, digit2Ref.current, digit3Ref.current], {
        y: 0,
      });

      tl.to(
        digit1Ref.current,
        {
          y: "-1em",
          duration: 1.5,
          ease: "power2.inOut",
        },
        0,
      )
        .to(
          digit2Ref.current,
          {
            y: "-10em",
            duration: 2.5,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          digit3Ref.current,
          {
            y: "-30em",
            duration: 2.5,
            ease: "power2.inOut",
          },
          0,
        );

      tl.to(containerRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
      });

      tl.to(comp.current, {
        display: "none",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  const renderNumbers = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <div key={i} className="flex items-center justify-center h-[1em]">
        {i % 10}
      </div>
    ));
  };

  return (
    <div ref={comp} className="fixed inset-0 z-9999 pointer-events-none">
      <div
        ref={containerRef}
        className="absolute inset-0 bg-secondary-main flex items-center justify-center w-full h-full pointer-events-auto"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >

        <div
          className={`${climateCrisis.className} counter-container flex overflow-hidden text-off-white text-6xl md:text-9xl font-bold h-[1em] leading-none absolute bottom-5 left-5`}
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        >
          <div className="relative w-25 h-[1em]">
            <div ref={digit1Ref} className="absolute top-0 left-0 w-full">
              <div className="flex items-center justify-center h-[1em]">
                &nbsp;
              </div>
              <div className="flex items-center justify-center h-[1em]">1</div>
            </div>
          </div>

          <div className="relative w-38 h-[1em]">
            <div ref={digit2Ref} className="absolute top-0 left-0 w-full">
              {renderNumbers(11)}
            </div>
          </div>

          <div className="relative w-38 h-[1em]">
            <div ref={digit3Ref} className="absolute top-0 left-0 w-full">
              {renderNumbers(31)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
