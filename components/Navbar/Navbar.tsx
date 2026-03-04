"use client";
import { lexendDeca } from "@/lib/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import RollingText from "../ui/rolling-text";
import UnderlineAnimText from "../ui/underline-anim";
import TopBanner from "./TopBanner";
import { IoClose } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const topProductsBgRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      const showNav = gsap.to(navRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power1.inOut",
        paused: true,
      });

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.scroll() <= 0) {
            showNav.reverse();
          } else if (self.direction === 1) {
            showNav.play();
            gsap.to(dropdownRef.current, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: 0.4,
              ease: "power3.inOut",
              overwrite: "auto",
            });
            gsap.to(lineRef.current, {
              scaleX: 0,
              duration: 0.4,
              ease: "power3.inOut",
              overwrite: "auto",
            });
            gsap.to(topProductsBgRef.current, {
              scaleX: 0,
              duration: 0.4,
              ease: "power3.inOut",
              overwrite: "auto",
            });
          } else if (self.direction === -1) {
            showNav.reverse();
          }
        },
      });
    },
    { scope: navRef },
  );

  const openDropdown = useCallback(() => {
    contextSafe(() => {
      gsap.to(dropdownRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.6,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.fromTo(
        topProductsBgRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        },
      );
    })();
  }, [contextSafe]);

  const closeDropdown = useCallback(() => {
    contextSafe(() => {
      gsap.to(dropdownRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.4,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(lineRef.current, {
        scaleX: 0,
        duration: 0.4,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(topProductsBgRef.current, {
        scaleX: 0,
        duration: 0.4,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    })();
  }, [contextSafe]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full uppercase text-sm font-medium ${lexendDeca.className} text-primary-main transition-colors duration-300 z-30 bg-white`}
      onMouseLeave={closeDropdown}
    >
      <TopBanner />

      <div className="flex items-center justify-between px-8 bg-white relative z-20 shadow">
        <div className="w-1/3 flex items-center justify-start gap-6">
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="Home" />
          </div>
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="About" />
          </div>
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="Services" />
          </div>

          <div
            className="cursor-pointer flex items-center gap-1"
            onMouseEnter={openDropdown}
          >
            <RollingText text="Products" />
            <IoChevronDown className="size-4" />
          </div>
        </div>

        <Link
          href={"/"}
          className="w-1/3 flex items-center justify-center"
          onMouseEnter={closeDropdown}
        >
          <Image
            src={"/logo-green.png"}
            width={200}
            height={200}
            priority
            alt="Andrax Pvt Ltd."
            className="size-15 object-contain"
          />
        </Link>

        <div className="w-1/3 flex items-center justify-end gap-6">
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="blog" />
          </div>
          <div onMouseEnter={closeDropdown} className="cursor-pointer flex">
            <RollingText text="Contact us" />
          </div>
        </div>

        <div
          ref={lineRef}
          className="h-[3px] w-full bg-primary-main absolute bottom-0 left-0 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div
        ref={dropdownRef}
        data-lenis-prevent
        className="absolute top-full left-0 w-full bg-white px-8 py-16"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          height: "calc(100vh - 100%)",
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 justify-between items-start mb-16 relative">
            <DropdownColumn
              title="Coir Products"
              links={[
                "Coir Mulch Mats",
                "Coconut Shell Biochar",
                "Coco Peat (Coir Pith)",
                "Coco Peat",
                "Coconut milk",
              ]}
            />
            <DropdownColumn
              title="Chemical Products"
              links={[
                "Sodium Carbonate",
                "Sulphuric Acid",
                "Caustic Soda",
                "Potassium",
                "Potassium Sulphate",
              ]}
            />
            <DropdownColumn
              title="Fruits & Vegetable"
              links={[
                "Apple",
                "Strawberry",
                "Pumpkin",
                "Green Beans",
                "Onion big",
              ]}
            />
            <DropdownColumn
              title="Scrap Products"
              links={[
                "Copper scrap",
                "Aluminum scrap",
                "Plastic granules",
                "Cotton box",
              ]}
            />
            <DropdownColumn
              title="Animals Feed"
              links={["soyabean", "corn", "Alfalfa Hay"]}
            />
            <DropdownColumn
              title="Plant & Nursing"
              links={[
                "Coconut Seedlings",
                "Tissue Culture Plants",
                "Seed Nuts",
                "Nursery Polybag Plants",
              ]}
            />
            <DropdownColumn
              title="Petroleum Base"
              links={[
                "Petroleum Jelly",
                "Synthetic Fibers",
                "Paraffin Wax",
                "Detergent Raw Materials",
              ]}
            />
          </div>

          <div>
            <div className="flex justify-between gap-4 items-center">
              <div className="text-xl my-4 text-off-white-2 px-4 py-3 w-fit flex justify-center items-center gap-2 relative">
                <div
                  ref={topProductsBgRef}
                  className="absolute inset-0 bg-primary-main -z-10 origin-left"
                  style={{ transform: "scaleX(0)" }}
                ></div>
                Top Products
              </div>

              <div className="flex justify-end items-center gap-4">
                <button className="text-lg px-4 py-2 flex items-center justify-center gap-1 bg-white border border-primary-main uppercase text-primary-main cursor-pointer w-fit">
                  Show All Products
                </button>

                <button
                  onClick={closeDropdown}
                  aria-label="Close menu"
                  className="text-lg px-4 py-2 flex items-center justify-center gap-1 bg-primary-main border border-primary-main uppercase text-off-white-2 cursor-pointer w-fit"
                >
                  <RollingText text="close" />
                  <IoClose className="size-6" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <ProductCard
                name="Coir Mulch Mats"
                imageUrl="https://lh3.googleusercontent.com/rd-d/ALs6j_Fk1Tn39yXweu4EKazjVgiUQF4_qFK-wtE5B8Bop-yeccyeqYxq00f2BPWo2w0fzdaEPuUkBx28zpfo3Oo2he1N0ByKEt_S189zB_WtQiGjP69lmeLD256B7EKupZFMlZS28NfJ4kkOWmDGN5VdTFbQqQaI5WjXFERvN-Ua_eMilmjmTIk7z7iL3A94KJTPXvYz3LrL29TVrnM4OhoE4ryZ44ywCmJO6nO0wDsFX3aoGrDESK4exdF6AUBuBGR9bX22Yp8W7Jrqvl1zBffxlztIqSu9IUzg4d0EDBJle8d2kp3tWQsUuYYY8yOgtN3fHeNsJpuGevnbdOqtZfM8lvCy0whgV2iQQJNBJq0M9gTnNtAh5OslHD6o0woblEdNhKF2hfI-iqaGnSlm0dbEJ-YD5s_cXqIpKBq8g8KOAWOUjCbKIrJH3Nx9Gzb_apHY7yczZY1X6JHx_L37p3pbZZH_85oys75bGbI04mBly2ojnhJHdPq7Ah7UQ7CdDd6qIYxPqfFkVPcLxG0ARnETAKJDpVSCYuxluI1NSIEubOAYWRavkRb79JOKYjeGHV9wFjhaMUZNrx2N09nrInmR3YfjRr_kCfxUea3jlp0l0CQxZWHTbuPzg8t8qP8crfh3iLAOwCMADGdHpbvlE-uvoTUOI1L7LZ7TG4qdoeK1svKGZRiS0DG6A1uxcYhiy_pDu-7qEEx5fUhxG9LNKVezaqCplEqNRNpe6mi2OqmYDW9VEbfNYN4F62Yse0Nv-qOBsvr6KC6mTv_KKhPb7PGDtPRkMvqbZJgMT60mnmr-BRUlChnGH1mLsiqG29xBM9sbvAHgOSbxvPRnlhxF2ctWb9V0L5jUbp9-I0YU7qYF47MFqfL3LmcryGv4mg1kCSqC37RRbxuaN3GUzGrejJsC30xSAxFBEQWQLSH-8uHO-1MMpGAKWn-mHPO-zivUTjZF7P7HpRYhbs5V4EVg9tATykNOweVDdVT9DxTY2FPKPsoP3bwiAhKWMH6QqoNMlRT4oFNzj2EJ4gW5UwPiSzwUltttviCPJvTyL7OXNE0dLHegL6LsVBURJAzG3ezP1yovLUnktNHe_L4_GaDze3kzuNOzst51NUwF1UzhB1XKT3Kov7k6FkCCDc_KrBcRm5K1I5bdoRdEo36ZMBpDfPBOmb0=w3010-h2084?auditContext=prefetch"
              />
              <ProductCard
                name="Fresh Fruits & Vegetables"
                imageUrl="https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg"
              />
              <ProductCard
                name="Chemical Products"
                imageUrl="https://images.pexels.com/photos/7256839/pexels-photo-7256839.jpeg"
              />
              <ProductCard
                name="Petroleum Jelly"
                imageUrl="https://images.pexels.com/photos/5450888/pexels-photo-5450888.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function DropdownColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-lg mb-2">{title}</h3>
      <ul className="space-y-1 text-sm">
        {links.map((link, i) => (
          <li key={i} className="cursor-pointer">
            <UnderlineAnimText
              text={link}
              textColor="#14342399"
              lineColor="#43522B"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <div className="group cursor-pointer relative aspect-4/5 overflow-hidden h-full">
      <Image
        src={imageUrl}
        alt={name}
        height={512}
        width={512}
        priority
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity" />
      <p className="absolute bottom-6 left-6 text-white font-medium text-lg tracking-wide">
        {name}
      </p>
    </div>
  );
}
