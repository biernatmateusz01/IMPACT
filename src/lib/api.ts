import { Product } from "@/lib/types";

const BASE_URL = process.env.API_BASE_URL;

export async function getAllCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(
        `Categories fetch failed: ${res.status} ${res.statusText} – returning empty array on ${BASE_URL}/products/categories`,
      );
      return [];
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Error fetching categories:");
    return [];
  }
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const encodedCategory = encodeURIComponent(category);
  const url = `${BASE_URL}/products/category/${encodedCategory}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(
        `Products fetch failed for "${category}" (${res.status} ${res.statusText}) – returning empty array`,
      );
      return [];
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching products for ${category}:`, error);
    return [];
  }
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(
        `All products fetch failed: ${res.status} – returning empty array`,
      );
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}
