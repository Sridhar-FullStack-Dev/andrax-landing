import { AiOutlineExperiment } from "react-icons/ai";
import { FaCottonBureau } from "react-icons/fa";
import { GiCoconuts } from "react-icons/gi";
import { LuNut } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiCarrot, PiCowLight, PiFlowerLotus } from "react-icons/pi";

export const products = [
  {
    name: "Coir Products",
    icon: <GiCoconuts className="size-5" />,
    items: [
      {
        name: "Coir Mulch Mats",
        image: "/products/andrax-coir-mulch-mat.png",
      },
      {
        name: "Coconut Shell Biochar",
        image: "/products/andrax-coconut-shell-biochar.png",
      },
      {
        name: "Coir Pith",
        image: "/products/andrax-coir-pith.png",
      },
      {
        name: "Coco Peat",
        image: "/products/andrax-coco-peat.png",
      },
      {
        name: "Coconut milk",
        image: "/products/andrax-coconut-milk.png",
      },
      {
        name: "Desiccated Coconut Powder",
        image: "/products/andrax-desiccated-coconut-powder.png",
      },
      {
        name: "Coconut Chips",
        image: "/products/andrax-coconut-chips.png",
      },
      {
        name: "Coco Husk Chips",
        image: "/products/andrax-coco-husk-chips.png",
      },
      {
        name: "Coir Mats",
        image: "/products/andrax-coir-mats.png",
      },
    ],
  },
  {
    name: "Chemical Products",
    icon: <AiOutlineExperiment className="size-5" />,
    items: [
      {
        name: "Sodium Carbonate",
        image: "/products/andrax-sodium-carbonate.png",
      },
      {
        name: "Sulphuric Acid",
        image: "/products/andrax-sulphuric-acid.png",
      },
      {
        name: "Caustic Soda",
        image: "/products/andrax-caustic-soda.png",
      },
      {
        name: "Potassium",
        image: "/products/andrax-potassium.png",
      },
      {
        name: "Potassium Sulphate",
        image: "/products/andrax-potassium-sulphate.png",
      },
      {
        name: "Ammonium",
        image: "/products/andrax-ammonium.png",
      },
      {
        name: "Ethanol alcohol",
        image: "/products/andrax-ethanol-alcohol.png",
      },
    ],
  },
  {
    name: "Fruits & Vegetables",
    icon: <PiCarrot className="size-5" />,
    items: [
      {
        name: "Apple",
        image: "/products/andrax-apple.png",
      },
      { name: "Strawberry", image: "/products/andrax-strawberry.png" },
      { name: "Pumpkin", image: "/products/andrax-pumpkin.png" },
      { name: "Green Beans", image: "/products/andrax-green-beans.png" },
      { name: "Onion big", image: "/products/andrax-onion-big.png" },
      { name: "Small onion", image: "/products/andrax-small-onion.png" },
      { name: "Broccoli", image: "/products/andrax-broccoli.png" },
      { name: "Drumstick", image: "/products/andrax-drumstick.png" },
    ],
  },
  {
    name: "Imported Nuts",
    icon: <LuNut className="size-5" />,
    items: [
      { name: "Cashewnut", image: "/products/andrax-cashewnut.png" },
      { name: "Dates", image: "/products/andrax-dates.png" },
      { name: "Pistachio", image: "/products/andrax-pistachio.png" },
    ],
  },
  {
    name: "Scrap Products",
    icon: <FaCottonBureau className="size-5" />,
    items: [
      { name: "Copper scrap", image: "/products/andrax-copper-scrap.png" },
      { name: "Aluminum scrap", image: "/products/andrax-aluminum-scrap.png" },
      {
        name: "Plastic granules",
        image: "/products/andrax-plastic-granules.png",
      },
      { name: "Cotton box", image: "/products/andrax-cotton-box.png" },
    ],
  },
  {
    name: "Animal Feeds",
    icon: <PiCowLight className="size-5" />,
    items: [
      { name: "soyabean", image: "/products/andrax-soyabean.png" },
      { name: "corn", image: "/products/andrax-corn.png" },
      { name: "Alfalfa Hay", image: "/products/andrax-alfalfa-hay.png" },
    ],
  },
  {
    name: "Plants & Nursing",
    icon: <PiFlowerLotus className="size-5" />,
    items: [
      {
        name: "Coconut Seedlings (Tall / Dwarf / Hybrid)",
        image: "/products/andrax-coconut-seedlings.png",
      },
      {
        name: "Tissue Culture Plants",
        image: "/products/andrax-tissue-culture-plants.png",
      },
      { name: "Seed Nuts", image: "/products/andrax-seed-nuts.png" },
      {
        name: "Nursery Polybag Plants",
        image: "/products/andrax-nursery-polybag-plants.png",
      },
    ],
  },
  {
    name: "Petroleum Products",
    icon: <MdOutlineWaterDrop className="size-5" />,
    items: [
      {
        name: "Petroleum Jelly",
        image: "/products/andrax-petroleum-jelly.png",
      },
      {
        name: "Polyester, Nylon",
        image: "/products/andrax-synthetic-fibers.png",
      },
      {
        name: "Paraffin Wax (Candles)",
        image: "/products/andrax-paraffin-wax.png",
      },
      {
        name: "Detergent Raw Materials",
        image: "/products/andrax-detergent-raw-materials.png",
      },
    ],
  },
];
