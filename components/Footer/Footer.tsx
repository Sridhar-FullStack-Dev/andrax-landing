"use client";
import { AiOutlineCopyright } from "react-icons/ai";
import { archivo } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full h-96 bg-beige text-main-green flex flex-col justify-between py-16 px-8 -z-10 uppercase ${archivo.className}`}
    >
      <div className="flex justify-between items-start">
        <div className="w-1/2">
          <h6 className="text-main-green/60 mb-1">products</h6>
          <p>Macronutrient Fertilizers</p>
          <p>Macronutrient Fertilizers</p>
          <p>Feed Additives</p>
        </div>
        <div className="w-1/2"></div>
      </div>

      <div>
        <div className="flex items-center gap-1">
          <AiOutlineCopyright /> 2026. Andrax Exports pvt. ltd.
        </div>
      </div>
    </footer>
  );
}
