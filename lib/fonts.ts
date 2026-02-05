import { Archivo } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
});
