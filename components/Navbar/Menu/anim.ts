export const menuSlide = {
  initial: { x: "calc(-100% - 100px)" },
  enter: {
    x: "0",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    x: "calc(-100% - 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 0.6,
    },
  },
};

export const slide = {
  initial: { y: 80 },
  enter: (i: number) => ({
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 0.05 * i,
    },
  }),
  exit: (i: number) => ({
    y: 80,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 0.05 * i,
    },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.3 } },
};
