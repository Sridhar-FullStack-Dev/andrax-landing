import { archivo } from "@/lib/fonts";
import type { Product } from "@/lib/types/product";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) {
  return (
    relatedProducts.length > 0 && (
      <section className="mt-12 pt-12 border-t border-gray-200">
        <h2
          className={`text-3xl font-bold mb-8 text-center uppercase ${archivo.className} text-primary-main`}
        >
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((rp, idx) => (
            <Link
              href={`/products/${slugify(rp.name)}`}
              key={idx}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4 border border-gray-100 p-4">
                <Image
                  src={rp.image || "/placeholder.png"}
                  alt={rp.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-center font-bold text-gray-800 text-sm md:text-base group-hover:text-accent-main transition-colors uppercase tracking-wide">
                {rp.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    )
  );
}
