"use client";
import RollingText from "@/components/ui/rolling-text";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { menuSlide } from "./anim";
import Curve from "./Curve";
import Nav from "./Nav";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer uppercase w-1/3 flex justify-start items-center"
      >
        <RollingText text="Menu" />
      </button>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed top-0 left-0 h-screen w-1/2 bg-secondary-main z-30 text-secondary-accent flex items-start"
          >
            <Curve />

            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className="cursor-pointer uppercase flex justify-start items-center mt-8 px-8"
            >
              <RollingText text="Close" />
            </button>

            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
