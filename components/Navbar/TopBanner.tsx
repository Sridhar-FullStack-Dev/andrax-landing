"use client";
import Link from "next/link";
import UnderlineAnimText from "../ui/underline-anim";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hideBanner = sessionStorage.getItem("hideTopBanner");
    if (!hideBanner) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("hideTopBanner", "true");
    setIsVisible(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <section className="bg-primary-main text-center text-white py-2 text-xs relative">
      <div className="flex justify-center items-center gap-2">
        <h1 className="flex items-center justify-center gap-1">
          Don't Miss Out! Coco Peet Special Offer Live Now.
        </h1>

        <Link href={"/"} className="text-secondary-accent">
          <UnderlineAnimText
            text="Contact Now"
            lineColor="#E9B94A"
            textColor="#E9B94A"
          />
        </Link>
      </div>

      <button
        type="button"
        onClick={handleClose}
        className="absolute top-1.5 right-4 cursor-pointer"
      >
        <IoClose className="size-4" />
      </button>
    </section>
  );
}
