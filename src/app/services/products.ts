import type { Product } from "../types/product";

interface ProductsResponse {
  success: boolean;
  products: Product[];
}

const API_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error("Não foi possível carregar os produtos");
  }

  return data.products;
}
