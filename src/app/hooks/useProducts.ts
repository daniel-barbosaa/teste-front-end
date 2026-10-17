import { getProducts } from "@/app/services/products";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return { products };
}
