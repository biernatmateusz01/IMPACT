import Link from "next/link";
import { getProductsByCategory, getAllCategories } from "@/lib/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./CategoryPage.module.css";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const decodedCategory = decodeURIComponent(category);

  const products = await getProductsByCategory(decodedCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)}
        </h1>

        <p className={styles.count}>{products.length} products</p>

        <Link href="/" className={styles.back}>
          ← Back to categories
        </Link>
      </div>

      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
