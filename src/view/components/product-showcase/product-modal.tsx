import type { Product } from "@/app/types/product";
import { Modal } from "../ui/modal";

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailsModal({
  product,
  onClose,
}: ProductDetailsModalProps) {
  return (
    <Modal isOpen={product !== null} onClose={onClose}>
      {product && (
        <div className="product-modal-content">
          <img src={product.photo} alt={product.productName} />
          <div className="product-modal-info">
            <div>
              <h2>{product.productName}</h2>
              <p className="price">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="#" className="view-more">
                Ver mais detalhe do produto {">"}
              </a>
            </div>
            <div className="btn-actions">
              <div className="add-btn">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
              <button className="btn-buy">Comprar</button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
