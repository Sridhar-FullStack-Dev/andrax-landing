import Products from "@/components/HomePage/Products/Products";

export const metadata = {
  title: "All Products | Andrax Exports",
  description:
    "Explore all our premium gardening plants, trees, and other products.",
};

export default function ProductsPage() {
  return (
    <main className="pt-32 bg-white min-h-screen">
      <Products showAll={true} />
    </main>
  );
}
