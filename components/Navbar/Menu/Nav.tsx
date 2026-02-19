import { motion } from "motion/react";
import Link from "next/link";
import { slide } from "./anim";

const links = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/#work" },
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
];

export default function Nav() {
  return (
    <div className="py-8 h-full w-full">
      <div className="flex flex-col justify-between relative h-full">
        <div className="flex flex-col gap-3 px-8">
          {links.map((link, i) => (
            <div
              key={i}
              className="perspective-distant perspective-origin-bottom overflow-hidden"
            >
              <motion.div
                custom={i}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="origin-bottom"
                whileHover={{ x: 30 }}
                transition={{ ease: "easeInOut" }}
              >
                <Link
                  href={link.href}
                  className="text-5xl text-off-white hover:text-accent-main transition-colors font-bold"
                >
                  {link.title}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-px py-8 bg-off-white-2/50" />
      </div>
    </div>
  );
}
