import { CategorySection } from "./view/components/categories";
import { Header } from "./view/components/header";
import { HeroSection } from "./view/components/hero-section";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
      </main>
    </>
  );
}

export default App;
