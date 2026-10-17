import type { Product } from "@/app/types/product";
import ArrowIcon from "@/assets/icons/arrow.svg";
import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../product-card";
import { ProductDetailsModal } from "./product-modal";
import "./product-showcase.scss";

interface ProductShowcaseProps {
  title?: string;
  viewAll?: boolean;
  products: Product[];
}

const categoryItems = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
] as const;

type CategoryType = (typeof categoryItems)[number];

export function ProductShowcase({
  title = "Produtos Relacionados",
  viewAll,
  products,
}: ProductShowcaseProps) {
  const [categoryActive, setCategoryActive] = useState<CategoryType>("Celular");
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  console.log(selectedProduct);
  return (
    <section className="product-showcase">
      <div className="showcase-heading">
        <h2>{title}</h2>
      </div>

      {viewAll && <p className="view">Ver todos</p>}

      {!viewAll && (
        <nav
          className="showcase-categories"
          aria-label="Categorias de produtos"
        >
          <ul>
            {categoryItems.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  className={`category-button ${
                    categoryActive === category ? "active" : ""
                  }`}
                  onClick={() => setCategoryActive(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="product-carousel">
        <button
          className="carousel-arrow carousel-arrow-prev"
          type="button"
          aria-label="Produtos anteriores"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={ArrowIcon} alt="" />
        </button>

        <div className="product-carousel-viewport">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={`${product.productName}-${index}`}>
                <ProductCard
                  image={product.photo}
                  imageAlt={product.productName}
                  description={product.descriptionShort}
                  price={product.price}
                  onBuy={() => setSelectedProduct(product)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className="carousel-arrow carousel-arrow-next"
          type="button"
          aria-label="Próximos produtos"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={ArrowIcon} alt="" />
        </button>

        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}
