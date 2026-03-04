import { archivo } from "@/lib/fonts";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaCottonBureau } from "react-icons/fa";
import { GiChemicalDrop, GiCoconuts, GiKiwiFruit } from "react-icons/gi";
import { PiCowLight } from "react-icons/pi";
import { TbPlant2 } from "react-icons/tb";
export default function Products() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="flex justify-start items-center gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${archivo.className} cursor-pointer border rounded-full px-4 py-2 w-fit uppercase flex items-center gap-2 bg-primary-main text-off-white`}
          >
            {product.icon}
            {product.name}
          </div>
        ))}
      </div>
    </section>
  );
}

const products = [
  {
    name: "Coir Products",
    icon: <GiCoconuts className="size-6" />,
  },
  {
    name: "Chemical Products",
    icon: <AiOutlineExperiment className="size-6" />,
  },
  {
    name: "Fruits & Vegetables",
    icon: <GiKiwiFruit className="size-6" />,
  },
  {
    name: "Scrap Products",
    icon: <FaCottonBureau className="size-6" />,
  },
  {
    name: "Animal Feeds",
    icon: <PiCowLight className="size-6" />,
  },
  {
    name: "Plants & Nursing",
    icon: <TbPlant2 className="size-6" />,
  },
  {
    name: "Petroleum Products",
    icon: <GiChemicalDrop className="size-6" />,
  },
];
