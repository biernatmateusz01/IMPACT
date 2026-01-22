import { Product } from "@/lib/types";

const BASE_URL = "https://fakestoreapi.com";

export async function getAllCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
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
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 1800 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
