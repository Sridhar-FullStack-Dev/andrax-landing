import { archivo, jetbrainsMono } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import PixelCursor from "../PixelCursor/PixelCursor";
import UnderlineAnimText from "../ui/underline-anim";

export default function Contact() {
  return (
    <section
      id="contact"
      data-theme="green"
      className="h-screen w-full bg-off-white relative"
    >
      <div className="absolute inset-0 bg-black/30 z-1"></div>
      <Image
        src={
          "https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg"
        }
        alt=""
        width={1200}
        height={1200}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 z-2 p-8">
        <section
          className={`${archivo.className} h-full w-full px-8 py-20 text-off-white`}
        >
          <h1 className={`${jetbrainsMono.className} text-8xl uppercase`}>
            Contact us
          </h1>

          <div className="flex justify-start gap-12 items-end mt-8">
            <div className="w-fit h-32 uppercase">
              <Link
                href={"mailto:info@andraxexportspvtltd.com"}
                className="text-2xl"
              >
                <UnderlineAnimText
                  text="info@andraxexportspvtltd.com"
                  lineColor="bg-off-white"
                  textColor="text-off-white"
                />
              </Link>
            </div>

            <div className="h-32 text-lg">
              <p>+1 (650) 761-9396 2565</p>
              <p className="mt-2">3rd Street, San Francisco,</p>
              <p>CA 94107, US.</p>
            </div>
          </div>
        </section>
      </div>
      <PixelCursor />
    </section>
  );
}
