import "./product-card.scss";

interface ProductCardProps {
  image: string;
  imageAlt: string;
  description: string;
  oldPrice: string;
  price: string;
  installments: string;
  shipping: string;
}

export function ProductCard({
  image,
  imageAlt,
  description,
  oldPrice,
  price,
  installments,
  shipping,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <img src={image} alt={imageAlt} />

      <div className="card-info">
        <p className="product-description">{description}</p>

        <del className="product-old-price">{oldPrice}</del>

        <p className="product-price">{price}</p>

        <p className="product-installments">{installments}</p>

        <p className="product-shipping">{shipping}</p>

        <button type="button" className="product-buy-button">
          Comprar
        </button>
      </div>
    </article>
  );
}
