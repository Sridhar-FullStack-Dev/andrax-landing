import { archivo } from "@/lib/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 left-0 w-full p-8 flex items-center justify-between text-off-white uppercase text-sm font-normal ${archivo.className}`}
    >
      <div>Menu</div>
      <div>Logo</div>
      <Link
        href={"/contact-us"}
        className="relative group cursor-pointer"
      >
        Contact us
        <span className="absolute left-0 -bottom-1 w-full h-px bg-off-white transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ease-in-out origin-left"></span>
      </Link>
    </nav>
  );
}
