import About from "@/components/HomePage/About/About";
import Products from "@/components/HomePage/Products/Products";
import HomeLoader from "@/components/Loader/HomeLoader";

export default function Home() {
  return (
    <main>
      <HomeLoader />
      <section className="h-screen">Hero</section>
      <About />
      <Products />
    </main>
  );
}
