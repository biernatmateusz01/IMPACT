import { Product } from "@/lib/types";

const BASE_URL = "https://fakestoreapi.com";

export async function getAllCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; Next.js/16 FakeStoreClient/1.0)",
      Accept: "application/json",
      Referer: "https://fakestoreapi.com/",
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch categories", res.status, res.statusText);
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const res = await fetch(
    `${BASE_URL}/products/category/${encodeURIComponent(category)}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    console.error(
      `Błąd pobierania produktów dla kategorii "${category}":`,
      res.status,
      res.statusText,
    );
    throw new Error(`Failed to fetch products for category: ${category}`);
  }

  return res.json();
}

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 1800 },
  });

  if (!res.ok) {
    console.error("Błąd pobierania wszystkich produktów:", res.status);
    throw new Error("Failed to fetch all products");
  }

  return res.json();
}
