"use client";
import { archivo } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import RollingText from "../ui/rolling-text";
import UnderlineAnimText from "../ui/underline-anim";

export default function Footer() {
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full h-100 bg-white text-primary-main text-base flex flex-col justify-between pt-16 pb-8 px-8 -z-10 uppercase ${archivo.className}`}
    >
      <div className="flex justify-between">
        <div className="w-1/2 flex justify-between">
          <div>
            <h6 className="text-primary-main/60 mb-1 font-medium">products</h6>
            <p>Cocopeat Blocks</p>
            <p>Coir Fiber</p>
            <p>Grow Bags</p>
            <p>Potting Mix</p>
          </div>

          <div>
            <h6 className="text-primary-main/60 mb-1 font-medium">exports</h6>
            <p>Live Plants</p>
            <p>Coconut Products</p>
            <p>Fresh Mangoes</p>
            <p>Coir Pith</p>
          </div>

          <div>
            <h6 className="text-primary-main/60 mb-1 font-medium">about</h6>
            <p>Our Story</p>
            <p>Our Team</p>
          </div>

          <div>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-between text-right">
          <p>
            if you have any questions <br /> feel free to contact us:
          </p>

          <div className="w-fit ml-auto mt-6">
            <Link
              href={"mailto:info@andraxexportspvtltd.com"}
              className="text-lg text-right font-medium"
            >
              <UnderlineAnimText
                text="info@andraxexportspvtltd.com"
                lineColor="#143423"
                textColor="#143423"
              />
            </Link>
          </div>

          <div className="w-fit ml-auto mt-4">
            <Link
              href={"https://wa.me/919876543210"}
              target="_blank"
              className="text-sm"
            >
              <UnderlineAnimText
                text="WhatsApp: +91 98765 43210"
                lineColor="#143423"
                textColor="#143423"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end text-sm">
        <div className="flex items-center justify-start gap-1 w-1/3">
          <AiOutlineCopyright /> 2026. Andrax Exports pvt. ltd.
        </div>

        <div className="flex items-center justify-center gap-1 w-1/3">
          <Image
            src={"/logo-green.png"}
            width={200}
            height={200}
            alt="Andrax Pvt Ltd."
            className="size-20 object-contain"
          />
        </div>

        <div className="flex items-center justify-end gap-6 w-1/3">
          <Link href={"/privacy-policy"}>
            <UnderlineAnimText
              text="Privacy Policy"
              lineColor="#143423"
              textColor="#143423"
            />
          </Link>

          <Link href={"/terms-of-use"}>
            <UnderlineAnimText
              text="Terms Of Use"
              lineColor="#143423"
              textColor="#143423"
            />
          </Link>

          <Link href={"https://portfolio-sridhar.vercel.app/"} target="_blank">
            <RollingText
              text="Designed by Sridhar"
              textClassName="opacity-50 mt-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
