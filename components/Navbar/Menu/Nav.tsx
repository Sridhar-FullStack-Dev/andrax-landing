import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { slide } from "./anim";
import { useLenis } from "lenis/react";

const links = [
  {
    title: "Products",
    href: "/",
    subLinks: [
      { title: "Indoor Plants", href: "/products/indoor" },
      { title: "Outdoor Trees", href: "/products/outdoor" },
      { title: "Succulents", href: "/products/succulents" },
      { title: "Planters", href: "/products/planters" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/#contact" },
];

export default function Nav({
  setIsActive,
}: {
  setIsActive: (value: boolean) => void;
}) {
  const lenis = useLenis();
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <div className="py-8 h-full w-full">
      <div className="flex flex-col justify-between relative h-full">
        <div className="flex flex-col gap-3 px-8">
          {links.map((link, i) => (
            <div
              key={i}
              className="perspective-distant perspective-origin-bottom overflow-hidden flex flex-col"
            >
              <motion.div
                custom={i}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="origin-bottom"
              >
                <div
                  className="flex flex-col cursor-pointer w-fit"
                  onMouseEnter={() => {
                    setSelectedLink({
                      isActive: true,
                      index: i,
                    });
                  }}
                  onMouseLeave={() => {
                    setSelectedLink({
                      isActive: false,
                      index: i,
                    });
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.subLinks) e.preventDefault();
                      else {
                        lenis?.scrollTo("#contact"); // Default scrolling behavior for contact
                        setIsActive(false);
                      }
                    }}
                    className="text-5xl text-white hover:text-off-white transition-colors font-bold"
                  >
                    {link.title}
                  </Link>
                  <AnimatePresence mode="wait">
                    {link.subLinks &&
                      selectedLink.isActive &&
                      selectedLink.index === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden flex flex-col gap-2 mt-2 ml-4"
                        >
                          {link.subLinks.map((subLink, j) => (
                            <Link
                              key={j}
                              href={subLink.href}
                              onClick={() => setIsActive(false)}
                              className="text-2xl text-off-white/70 hover:text-accent-main transition-colors font-normal"
                            >
                              {subLink.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-px py-8 bg-off-white-2/20" />
      </div>
    </div>
  );
}
