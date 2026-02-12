import { archivo } from "@/lib/fonts";
import Link from "next/link";
import UnderlineAnimText from "../ui/underline-anim";
import Logo from "../ui/logo";

export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between text-off-white uppercase text-sm font-normal ${archivo.className}`}
    >
      <div className="w-1/3 flex items-start justify-start">Menu</div>
      <div className="w-1/3 flex items-center justify-center">
        <Logo src="/logo-gold.png" />
      </div>

      <Link href={"/contact-us"} className="w-1/3 flex items-end justify-end">
        <UnderlineAnimText
          text="Contact us"
          lineColor="bg-off-white"
          textColor="text-off-white"
        />
      </Link>
    </nav>
  );
}
