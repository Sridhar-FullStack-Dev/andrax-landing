import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => {
      setMounted(true);
      const hideBanner = sessionStorage.getItem("hideTopBanner");
      if (!hideBanner) {
        setIsVisible(true);
      }
    });
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("hideTopBanner", "true");
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-primary-main text-center text-white text-xs relative overflow-hidden"
        >
          <div className="py-2">
            <div className="flex justify-center items-center gap-2">
              <h1 className="flex justify-center items-center gap-1">
                <LuBadgePercent className="size-4" />
                Don&apos;t Miss Out! Coco Peet Special Offer Live Now.
              </h1>

              <Link
                href={"/"}
                className="text-secondary-accent underline underline-offset-1"
              >
                Contact Now
              </Link>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="absolute top-1.5 right-4 cursor-pointer"
            >
              <IoClose className="size-4" />
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
