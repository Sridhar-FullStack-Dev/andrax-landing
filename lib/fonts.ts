import { Archivo, BioRhyme, Climate_Crisis, JetBrains_Mono, Ribeye, ZCOOL_KuaiLe } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  preload: true,
});

export const galada = Climate_Crisis({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
  preload: true,
});
