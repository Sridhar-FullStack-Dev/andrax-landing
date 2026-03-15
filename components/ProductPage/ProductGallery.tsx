"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function ProductGallery({
  productName,
  productImage,
}: {
  productName: string;
  productImage: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrappers = gsap.utils.toArray(".anim-image-wrap");
      const images = gsap.utils.toArray(".anim-image");

      gsap.fromTo(
        images,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power4.inOut",
          stagger: 0.2,
          delay: 0.2,
        },
      );

      gsap.fromTo(
        images,
        {
          scale: 1.3,
        },
        {
          scale: 1,
          duration: 1.5,
          ease: "power4.inOut",
          stagger: 0.2,
          delay: 0.2,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex justify-center items-center gap-4">
      <div className="anim-image-wrap border border-dotted p-5 overflow-hidden transition-colors border-secondary-accent">
        <Image
          src={productImage}
          alt={productName}
          width={512}
          height={512}
          priority
          className="anim-image w-full h-120 object-cover "
        />
      </div>
    </div>
  );
}
