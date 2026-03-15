import ProductGallery from "@/components/ProductPage/ProductGallery";
import RelatedProducts from "@/components/ProductPage/RelatedProducts";
import { products } from "@/lib/const/products";
import { archivo, jetbrainsMono } from "@/lib/fonts";
import type { Product } from "@/lib/types/product";
import { slugify } from "@/lib/utils";
import Link from "next/link";
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

  let product: Product | null = null;
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

  const relatedProducts =
    products
      .find((c) => c.name === productCategory)
      ?.items?.filter((item) => item.name !== product.name)
      .slice(0, 4) || [];

  return (
    <main className="pt-32 pb-20 px-8 bg-white flex justify-center items-start">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <ProductGallery
          productName={product.name}
          productImage={product.image}
        />

        <div className="w-full mt-16 max-w-4xl mx-auto text-left space-y-8">
          <div className="text-center mb-12">
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

            <p className="text-center">{product.overview?.description || ""}</p>
          </div>

          {/* 1. Product Overview */}
          <section>
            <h2
              className={`text-2xl font-bold mb-4 uppercase ${archivo.className} text-primary-main`}
            >
              Product Overview
            </h2>
            <p className="text-gray-700 mb-4 font-medium leading-relaxed">
              {product.overview?.description ||
                `Premium quality ${product.name} natively sourced and produced for superior performance. Designed to provide unmatched benefits such as weed control, moisture retention, and temperature regulation, while remaining 100% biodegradable and eco-friendly.`}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>
                <strong>Key benefits:</strong>{" "}
                {product.overview?.keyBenefits ||
                  "Exceptional quality, sustainable, highly effective moisture retention and structure, biodegradable and eco-friendly."}
              </li>
              <li>
                <strong>Typical applications:</strong>{" "}
                {product.overview?.applications ||
                  "Commercial farms, high-grade nurseries, domestic gardens, and extensive landscaping projects."}
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Exported globally by Andrax. We ensure the highest standards of
              rigorous quality control, sustainable harvesting practices, and
              timely delivery for all our bulk orders.
            </p>
          </section>

          {/* 2. Technical Specifications */}
          <section>
            <h2
              className={`text-2xl font-bold mb-6 uppercase ${archivo.className} text-primary-main`}
            >
              Technical Specifications
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold bg-gray-50 border-r border-gray-200 w-1/3">
                      Material
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      {product.specifications?.material ||
                        "100% natural, premium grade organic material"}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold bg-gray-50 border-r border-gray-200">
                      Shape / Format
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      {product.specifications?.shape ||
                        "Customizable (Discs, sheets, blocks, or granular on request)"}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold bg-gray-50 border-r border-gray-200">
                      Dimensions
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      {product.specifications?.dimensions ||
                        "Variables sizes based on exact buyer requirements"}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold bg-gray-50 border-r border-gray-200">
                      Color
                    </td>
                    <td className="py-4 px-6 text-gray-700">
                      {product.specifications?.color || "Natural tone"}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold bg-gray-50 border-r border-gray-200">
                      Biodegradable
                    </td>
                    <td className="py-4 px-6 font-medium text-green-700">
                      {product.specifications?.biodegradable || "100% Yes"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Export & Packaging Details */}
          <section>
            <h2
              className={`text-2xl font-bold mb-4 uppercase ${archivo.className} text-primary-main`}
            >
              Export & Packaging Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="space-y-4">
                <p>
                  <strong className="block text-primary-main mb-1">
                    Minimum Order Quantity (MOQ)
                  </strong>
                  {product.packaging?.moq ||
                    "Typical MOQ is 1×20 ft container. We can accommodate trial orders for new wholesale partners."}
                </p>
                <p>
                  <strong className="block text-primary-main mb-1">
                    Packaging Protocol
                  </strong>
                  <span className="whitespace-pre-wrap">
                    {product.packaging?.packagingProtocol ||
                      "Inner: Customized boxed or bundled.\nOuter: HDPE bales, sturdy cartons, or shrink-wrapped pallets."}
                  </span>
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <strong className="block text-primary-main mb-1">
                    Lead Time & Ports
                  </strong>
                  <span className="whitespace-pre-wrap">
                    {product.packaging?.leadTimeAndPorts ||
                      "2–3 weeks post order confirmation.\nPorts of Loading: Chennai / Tuticorin."}
                  </span>
                </p>
                <p>
                  <strong className="block text-primary-main mb-1">
                    Payment & Trade Terms
                  </strong>
                  <span className="whitespace-pre-wrap">
                    {product.packaging?.paymentTerms ||
                      "FOB, CIF.\nTerms: Advance, Irrevocable LC at Sight."}
                  </span>
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-accent-main font-semibold italic px-2">
              * Private labelling and bespoke dimensions are readily available
              upon request.
            </p>
          </section>

          {/* 4. Quality, Compliance & Trust Signals */}
          <section className="bg-primary-main/5 p-8 rounded-2xl border border-primary-main/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <h2
              className={`text-2xl font-bold mb-6 uppercase ${archivo.className} text-primary-main`}
            >
              Quality, Compliance & Assurance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong className="block text-primary-main mb-1 text-lg">
                  Certifications
                </strong>
                <p>
                  {product.compliance?.certifications ||
                    "Fully compliant with APEDA and Coir Board registration standards for seamless international export."}
                </p>
              </div>
              <div>
                <strong className="block text-primary-main mb-1 text-lg">
                  Strict Quality Control
                </strong>
                <p>
                  {product.compliance?.qualityControl ||
                    "Stringent pre-shipment checks on moisture percentages, product integrity, and resilient packaging."}
                </p>
              </div>
              <div>
                <strong className="block text-primary-main mb-1 text-lg">
                  Sustainability Native
                </strong>
                <p>
                  {product.compliance?.sustainability ||
                    "Ethically sourced and processed to promote eco-friendly agriculture and responsible manufacturing."}
                </p>
              </div>
              <div>
                <strong className="block text-primary-main mb-1 text-lg">
                  Origin Traceability
                </strong>
                <p>
                  {product.compliance?.origin ||
                    "Responsibly manufactured in India – Tamil Nadu (Pollachi / Coastal Belt), renowned for top-tier coir and agriculture."}
                </p>
              </div>
            </div>
          </section>

          {/* 5. Conversion / Bulk Orders Block */}
          <section className="bg-primary-main text-white p-8 md:p-10 rounded-3xl mt-4 shadow-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
              <div className="lg:max-w-md">
                <h2
                  className={`text-3xl font-bold mb-3 uppercase ${archivo.className} text-secondary-accent`}
                >
                  For Bulk Orders & Importers
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Ready to upgrade your supply chain? We cater strictly to
                  importers, massive wholesalers, garden centres, and commercial
                  agri-suppliers.
                </p>
                <Link
                  href="/#contact"
                  className={`inline-flex items-center gap-2 px-8 py-4 bg-secondary-accent text-primary-main uppercase font-bold tracking-wider hover:bg-accent-main transition-colors ${archivo.className}`}
                >
                  Request a Custom Quote
                </Link>
              </div>

              <div className="w-full lg:w-auto flex-1 bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3
                  className={`text-xl font-bold mb-4 uppercase ${archivo.className} text-white`}
                >
                  Quick FAQ
                </h3>
                <div className="space-y-4">
                  {(
                    product.faq || [
                      {
                        question: "What is the MOQ?",
                        answer:
                          "Usually 1x20ft container, with provisions for smaller trial wholesale batches.",
                      },
                      {
                        question: "Custom branding?",
                        answer:
                          "Absolutely. We handle custom dimensions and white-label packing for your brand.",
                      },
                      {
                        question: "Shipping terms?",
                        answer:
                          "FOB or CIF depending on your port. We assist heavily in logistics coordination.",
                      },
                    ]
                  ).map((item, idx, arr) => (
                    <div key={idx} className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary-accent mb-1">
                          {item.question}
                        </h4>
                        <p className="text-sm text-white/70">{item.answer}</p>
                      </div>
                      {idx < arr.length - 1 && (
                        <div className="h-px w-full bg-white/10"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/60">
                Need more technical details before ordering?
              </p>
              <button className="px-6 py-2 bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors uppercase font-medium text-xs tracking-wider flex items-center justify-center gap-2 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Brochure PDF
              </button>
            </div>
          </section>

          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      </div>
    </main>
  );
}
