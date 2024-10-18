import { ProductoMercadoLibre } from "@/infrastructure/interfaces/mercadoLibre";

export async function getProducts(
  filter: string,
  offset: number,
  limit: number
): Promise<ProductoMercadoLibre[] | null> {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${filter}&category=MLA1652&limit=${limit}&offset=${offset}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    const products = await response.json();
    console.log("Products fetched from API:", products);
    return products.results;
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return null;
  }
}
