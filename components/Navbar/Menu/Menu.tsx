"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { menuExpand } from "./anim";
import Nav from "./Nav";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className={`cursor-pointer uppercase w-1/3 flex justify-start items-center relative z-50 ${
          isActive ? "text-white" : ""
        }`}
      >
        <div className="relative overflow-hidden w-[60px] h-[24px]">
          <AnimatePresence mode="wait">
            {!isActive ? (
              <motion.div
                key="menu"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-start"
              >
                Menu
              </motion.div>
            ) : (
              <motion.div
                key="close"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-start"
              >
                Close
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuExpand}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed top-0 left-0 w-1/2 h-screen bg-black text-white z-40 overflow-hidden"
          >
            <div className="h-full w-full pt-[100px] px-8">
              <Nav setIsActive={setIsActive} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
