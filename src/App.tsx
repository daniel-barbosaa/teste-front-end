import { BrandShowcase } from "./view/components/brand-showcase";
import { CategorySection } from "./view/components/categories";
import { Header } from "./view/components/header";
import { HeroSection } from "./view/components/hero-section";
import { PartnerSection } from "./view/components/partner-section";
import { ProductShowcase } from "./view/components/product-showcase";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductShowcase />
        <PartnerSection />
        <ProductShowcase viewAll />
        <PartnerSection />
        <BrandShowcase />
        <ProductShowcase viewAll />
      </main>
    </>
  );
}

export default App;
