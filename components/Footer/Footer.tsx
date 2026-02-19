"use client";
import { archivo } from "@/lib/fonts";
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import Logo from "../ui/logo";
import UnderlineAnimText from "../ui/underline-anim";
import RollingText from "../ui/rolling-text";

export default function Footer() {
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full h-100 bg-beige text-primary-main flex flex-col justify-between pt-16 pb-8 px-8 -z-10 uppercase ${archivo.className}`}
    >
      <div className="flex justify-between">
        <div className="w-1/2 flex justify-between">
          <div>
            <h6 className="text-primary-main/60 mb-1 font-medium">products</h6>
            <p>Macronutrient Fertilizers</p>
            <p>Macronutrient Fertilizers</p>
            <p>Feed Additives</p>
          </div>

          <div>
            <h6 className="text-primary-main/60 mb-1 font-medium">science</h6>
            <p>CropTab™ NPK</p>
            <p>Nutripeak™ Micros</p>
            <p>ElevateFeed™</p>
            <p>Food Safety</p>
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
                lineColor="bg-primary-main"
                textColor="text-primary-main"
              />
            </Link>
          </div>

          <div className="w-fit ml-auto mt-4">
            <Link href={"mailto:info@andraxexportspvtltd.com"}>external</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end text-sm">
        <div className="flex items-center justify-start gap-1 w-1/3">
          <AiOutlineCopyright /> 2026. Andrax Exports pvt. ltd.
        </div>

        <div className="flex items-center justify-center gap-1 w-1/3">
          <Logo src="/logo-green.png" />
        </div>

        <div className="flex items-center justify-end gap-6 w-1/3">
          <Link href={"/privacy-policy"}>
            <UnderlineAnimText
              text="Privacy Policy"
              lineColor="bg-primary-main"
              textColor="text-primary-main"
            />
          </Link>

          <Link href={"/terms-of-use"}>
            <UnderlineAnimText
              text="Terms Of Use"
              lineColor="bg-primary-main"
              textColor="text-primary-main"
            />
          </Link>

          <Link href={"https://portfolio-sridhar.vercel.app/"} target="_blank">
            <RollingText
              text="Website by Sridhar"
              textClassName="opacity-50 mt-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
