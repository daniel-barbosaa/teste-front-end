import { BrandShowcase } from "./view/components/brand-showcase";
import { CategorySection } from "./view/components/categories";
import { Footer } from "./view/components/footer";
import { Header } from "./view/components/header";
import { HeroSection } from "./view/components/hero-section";
import { NewsLetter } from "./view/components/newsletter";
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
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
