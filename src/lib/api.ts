import { Product } from "@/lib/types";

const BASE_URL = "https://fakestoreapi.com";
const commonHeaders = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
  Referer: "https://fakestoreapi.com/",
};

export async function getAllCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 },
    headers: commonHeaders,
    cache: "no-store",
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
      headers: commonHeaders,
      cache: "force-cache",
    },
  );

  if (!res.ok) {
    console.error(
      `Failed to fetch products for category: "${category}":`,
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
    headers: commonHeaders,
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch all products:", res.status);
    throw new Error("Failed to fetch all products");
  }

  return res.json();
}
