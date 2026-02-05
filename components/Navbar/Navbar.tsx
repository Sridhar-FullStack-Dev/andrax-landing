import { archivo } from "@/lib/fonts";
import Link from "next/link";
import UnderlineAnimText from "../ui/underline-anim";
import Logo from "../ui/logo";

export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 left-0 w-full p-8 flex items-center justify-between text-off-white uppercase text-sm font-normal ${archivo.className}`}
    >
      <div>Menu</div>
      <div>
        <Logo color="#FFFFFF" />
      </div>

      <Link href={"/contact-us"}>
        <UnderlineAnimText
          text="Contact us"
          lineColor="bg-off-white"
          textColor="text-off-white"
        />
      </Link>
    </nav>
  );
}
