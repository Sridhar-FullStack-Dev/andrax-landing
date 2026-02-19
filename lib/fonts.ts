import {
  Archivo,
  Climate_Crisis,
  JetBrains_Mono,
  Lexend_Deca,
} from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "800", "900"],
  style: ["normal"],
  preload: true,
});

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "800", "900"],
  style: ["normal"],
  preload: true,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  preload: true,
});

export const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
  preload: true,
});
