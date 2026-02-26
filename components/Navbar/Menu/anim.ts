const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

export const menuExpand = {
  initial: {
    clipPath: "circle(0px at 48px 48px)",
    transition: { duration: 0.8, ease },
  },
  enter: {
    clipPath: "circle(150% at 48px 48px)",
    transition: { duration: 0.8, ease },
  },
  exit: {
    clipPath: "circle(0px at 48px 48px)",
    transition: { duration: 0.8, ease },
  },
};

export const slide = {
  initial: { x: "80px", opacity: 0 },
  enter: (i: number) => ({
    x: "0px",
    opacity: 1,
    transition: { duration: 0.8, ease, delay: 0.05 * i + 0.2 },
  }),
  exit: (i: number) => ({
    x: "80px",
    opacity: 0,
    transition: { duration: 0.8, ease, delay: 0.05 * i },
  }),
};
