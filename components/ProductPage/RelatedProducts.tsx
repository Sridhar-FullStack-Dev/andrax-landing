import { archivo, jetbrainsMono } from "@/lib/fonts";
import type { Product } from "@/lib/types/product";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) {
  return (
    relatedProducts.length > 0 && (
      <section className="mt-12 bg-off-white-2 w-screen px-8 py-12">
        <div className="flex justify-between items-end">
          <div>
            <span
              className={`text-primary-main text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
            >
              Explore More our
            </span>
            <h2
              className={`text-accent-main text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none mb-4 ${archivo.className}`}
            >
              Feature Related
              <br />
              <span className="text-primary-main italic">Products</span>
            </h2>
          </div>

          <div className="flex justify-end items-center gap-2">
            <Button>
              <FaArrowLeft />
            </Button>

            <Button>
              <FaArrowRight />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {relatedProducts.map((rp, idx) => (
            <Link
              href={`/products/${slugify(rp.name)}`}
              key={idx}
              className="flex flex-col items-center"
            >
              <div className="w-full bg-white overflow-hidden mb-4 border-2 border-dashed border-primary-main p-4">
                <Image
                  src={rp.image || "/placeholder.png"}
                  alt={rp.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`${jetbrainsMono.className} text-center font-bold text-primary-main text-sm md:text-base group-hover:text-accent-main transition-colors uppercase tracking-wide`}
              >
                {rp.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    )
  );
}
