import FitnessIcon from "@/assets/icons/corrida.svg";
import HealthIcon from "@/assets/icons/cuidados-de-saude.svg";
import DevicesIcon from "@/assets/icons/devices.svg";
import ToolsIcon from "@/assets/icons/ferramentas 1.svg";
import FashionIcon from "@/assets/icons/moda.svg";
import SupermarketIcon from "@/assets/icons/supermercados.svg";
import DrinkIcon from "@/assets/icons/whiskey.svg";
import { useState } from "react";
import "./category.scss";

const categoryItems = [
  { label: "Tecnologia", icon: DevicesIcon },
  { label: "Supermercado", icon: SupermarketIcon },
  { label: "Bebidas", icon: DrinkIcon },
  { label: "Ferramentas", icon: ToolsIcon },
  { label: "Saúde", icon: HealthIcon },
  { label: "Esportes", icon: FitnessIcon },
  { label: "Moda", icon: FashionIcon },
] as const;
type CategoryType = (typeof categoryItems)[number]["label"];

export function CategorySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Saúde");

  return (
    <section className="category-section" aria-label="Categorias em destaque">
      <ul className="category-list">
        {categoryItems.map(({ label, icon }) => (
          <li key={label}>
            <button
              type="button"
              className={`category-card ${
                activeCategory === label ? "active" : ""
              }`}
              onClick={() => setActiveCategory(label)}
            >
              <img
                src={icon}
                alt=""
                className={label === "Tecnologia" ? "devices-icon" : ""}
              />
            </button>
            <h3 className={activeCategory === label ? "active" : ""}>
              {label}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
