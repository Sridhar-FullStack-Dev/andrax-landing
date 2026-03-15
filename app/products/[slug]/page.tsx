import ProductGallery from "@/components/ProductPage/ProductGallery";
import { products } from "@/lib/const/products";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const allProducts = products.flatMap(
    (category) =>
      category.items?.map((item) => ({
        slug: slugify(item.name),
      })) || [],
  );
  return allProducts;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let product = null;
  let productCategory = "";

  for (const category of products) {
    const found = category.items?.find((item) => slugify(item.name) === slug);
    if (found) {
      product = found;
      productCategory = category.name;
      break;
    }
  }

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-32 pb-20 px-8 bg-white flex justify-center items-start">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <ProductGallery
          productName={product.name}
          productImage={product.image}
        />

        <div className="text-center mt-10">
          <div
            className={`text-accent-main text-xs uppercase tracking-[0.3em] mb-3 block ${jetbrainsMono.className}`}
          >
            {productCategory}
          </div>
          <h1
            className={`text-primary-main text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight ${archivo.className}`}
          >
            {product.name}
          </h1>

          <div className="prose prose-lg text-gray-600 mb-8 max-w-2xl">
            <p>
              Premium quality {product.name.toLowerCase()} sourced and exported
              by Andrax. We ensure the highest standards of quality control and
              timely delivery for all our products.
            </p>
          </div>

          <button className="text-lg px-8 py-4 bg-primary-main text-off-white-2 uppercase font-medium hover:bg-primary-main/90 transition-colors w-fit">
            Request a Quote
          </button>
        </div>
      </div>
    </main>
  );
}
