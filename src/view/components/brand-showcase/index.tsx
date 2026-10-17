import "./brand-showcase.scss";

import ImageLogo from "@/assets/logo.svg";

const brands = [
  { name: "Logo 1", image: ImageLogo },
  { name: "Logo 2", image: ImageLogo },
  { name: "Logo 3", image: ImageLogo },
  { name: "Logo 4", image: ImageLogo },
  { name: "Logo 5", image: ImageLogo },
];

export function BrandShowcase() {
  return (
    <section className="brand-showcase">
      <h2>Navegue por marcas</h2>

      <div className="brand-list">
        {brands.map((brand) => (
          <article className="brand-card" key={brand.name}>
            <img src={brand.image} alt={brand.name} />
          </article>
        ))}
      </div>
    </section>
  );
}
