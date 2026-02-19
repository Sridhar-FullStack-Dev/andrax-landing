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
    <div className="flex flex-col justify-between h-full border-l w-full">
      <div className="flex flex-col gap-3">
        {links.map((link, i) => (
          <div key={i} className="perspective-[120px] overflow-hidden">
            <motion.div
              custom={i}
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link href={link.href} className="text-5xl text-white font-light">
                {link.title}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
