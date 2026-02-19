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
            initial={{ backgroundColor: "transparent" }}
            animate={{
              backgroundColor: "#00000020",
              transition: { duration: 0.5, delay: 0.8 },
            }}
            exit={{
              backgroundColor: "transparent",
              transition: { duration: 0.5, delay: 1.5 },
            }}
            className="w-screen h-screen fixed top-0 left-0 z-30 flex"
          >
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="h-full w-1/2 bg-secondary-main text-secondary-accent flex items-start"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
