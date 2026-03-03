"use client";
import { archivo } from "@/lib/fonts";

const MARKETS = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Bahrain",
  "Kuwait",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "South Korea",
  "Japan",
  "Netherlands",
  "Germany",
  "United Kingdom",
  "Nigeria",
  "Kenya",
  "South Africa",
];

export default function Marquee() {
  return (
    <section className="py-16 bg-off-white overflow-hidden border-y border-primary-main/10">
      <div className="flex">
        <div className="flex shrink-0 animate-marquee-slow items-center">
          {[...MARKETS, ...MARKETS].map((market, i) => (
            <span
              key={i}
              className={`whitespace-nowrap px-6 text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-bold uppercase text-primary-main/[0.06] hover:text-primary-main/20 transition-colors duration-500 cursor-default ${archivo.className}`}
            >
              {market}
              <span className="text-secondary-accent/20 mx-6">·</span>
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee-slow items-center"
          aria-hidden="true"
        >
          {[...MARKETS, ...MARKETS].map((market, i) => (
            <span
              key={`dup-${i}`}
              className={`whitespace-nowrap px-6 text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-bold uppercase text-primary-main/[0.06] hover:text-primary-main/20 transition-colors duration-500 cursor-default ${archivo.className}`}
            >
              {market}
              <span className="text-secondary-accent/20 mx-6">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
