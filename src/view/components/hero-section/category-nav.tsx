import CrownSimpleIcon from "@/assets/icons/CrownSimple.svg";
import { useState } from "react";
import "./hero-section.scss";

const categories = [
  "Todas categorias",
  "Supermercado",
  "Livros",
  "Moda",
  "Lançamento",
  "Oferta do dia",
  "Assinatura",
] as const;

type CategoryType = (typeof categories)[number];

export function CategoryNav() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("Todas categorias");

  return (
    <nav className="category-container" aria-label="Categorias">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category === "Assinatura" && (
                <img src={CrownSimpleIcon} className="category-icon" alt="" />
              )}
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
