import ArrowIcon from "@/assets/icons/arrow.svg";
import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../product-card";
import "./product-showcase.scss";

interface ProductShowcaseProps {
  title?: string;
  viewAll?: boolean;
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

const products = [
  {
    image: "src/assets/smartphone.svg",
    imageAlt: "Smartphone Samsung Galaxy",
    description: "Smartphone Samsung Galaxy 256GB",
    oldPrice: "R$ 2.499,90",
    price: "R$ 1.899,90",
    installments: "10x de R$ 189,99 sem juros",
    shipping: "Frete grátis",
  },
  {
    image: "src/assets/smartphone.svg",
    imageAlt: "Smartphone Samsung Galaxy",
    description: "Smartphone Samsung Galaxy 256GB",
    oldPrice: "R$ 2.499,90",
    price: "R$ 1.899,90",
    installments: "10x de R$ 189,99 sem juros",
    shipping: "Frete grátis",
  },
  {
    image: "src/assets/smartphone.svg",
    imageAlt: "Smartphone Samsung Galaxy",
    description: "Smartphone Samsung Galaxy 256GB",
    oldPrice: "R$ 2.499,90",
    price: "R$ 1.899,90",
    installments: "10x de R$ 189,99 sem juros",
    shipping: "Frete grátis",
  },
  {
    image: "src/assets/smartphone.svg",
    imageAlt: "Fone de ouvido sem fio",
    description: "Fone de Ouvido Bluetooth Premium",
    oldPrice: "R$ 399,90",
    price: "R$ 279,90",
    installments: "6x de R$ 46,65 sem juros",
    shipping: "Frete grátis",
  },
  {
    image: "src/assets/smartphone.svg",
    imageAlt: "Tablet com tela de alta resolução",
    description: "Tablet 10 polegadas 128GB",
    oldPrice: "R$ 1.599,90",
    price: "R$ 1.299,90",
    installments: "10x de R$ 129,99 sem juros",
    shipping: "Frete grátis",
  },
  {
    image: "src/assets/smartphone.svg",
    imageAlt: "Notebook prata",
    description: "Notebook Intel Core i5 512GB SSD",
    oldPrice: "R$ 3.999,90",
    price: "R$ 3.499,90",
    installments: "10x de R$ 349,99 sem juros",
    shipping: "Frete grátis",
  },
];

export function ProductShowcase({
  title = "Produtos Relacionados",
  viewAll,
}: ProductShowcaseProps) {
  const [categoryActive, setCategoryActive] = useState<CategoryType>("Celular");
  const swiperRef = useRef<SwiperInstance | null>(null);
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
              <SwiperSlide key={index}>
                <ProductCard {...product} />
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
      </div>
    </section>
  );
}
