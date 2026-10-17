import "./product-card.scss";

interface ProductCardProps {
  image: string;
  imageAlt: string;
  description: string;
  price: number;
  onBuy: () => void;
}

export function ProductCard({
  image,
  imageAlt,
  description,
  price,
  onBuy,
}: ProductCardProps) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedInstallment = (price / 10).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="product-card">
      <img src={image} alt={imageAlt} />

      <div className="card-info">
        <p className="product-description">{description}</p>

        <del className="product-old-price">
          {(price + 1000).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </del>

        <p className="product-price">{formattedPrice}</p>

        <p className="product-installments">
          ou 10x de {formattedInstallment} sem juros
        </p>

        <p className="product-shipping">Frete grátis</p>

        <button type="button" className="product-buy-button" onClick={onBuy}>
          Comprar
        </button>
      </div>
    </article>
  );
}
