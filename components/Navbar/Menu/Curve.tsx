import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Curve() {
  const [dimensions, setDimensions] = useState({ height: 0 });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const initialPath = `M0 0 L0 ${dimensions.height} Q100 ${
    dimensions.height / 2
  } 0 0`;
  const targetPath = `M0 0 L0 ${dimensions.height} Q0 ${
    dimensions.height / 2
  } 0 0`;

  const curveUser = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return dimensions.height > 0 ? (
    <svg className="absolute top-0 -right-[99px] w-[100px] h-full fill-primary-main stroke-none">
      <motion.path
        variants={curveUser}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  ) : null;
}
