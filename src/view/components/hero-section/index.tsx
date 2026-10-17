import { CategoryNav } from "./category-nav";

export function HeroSection() {
  return (
    <section className="hero-section">
      <CategoryNav />

      <div className="hero-banner">
        <div className="info-actions">
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            <span>50% Off</span> nos produtos
          </p>

          <button type="button">Ver produto</button>
        </div>
      </div>
    </section>
  );
}
