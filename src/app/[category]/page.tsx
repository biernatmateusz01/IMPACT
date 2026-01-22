import Link from "next/link";
import { getProductsByCategory, getAllCategories } from "@/lib/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./CategoryPage.module.css";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const { category } = resolvedParams;

  const decodedCategory = decodeURIComponent(category);

  const products = await getProductsByCategory(decodedCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)}
        </h1>

        <p className={styles.count}>{products.length} produktów</p>

        <Link href="/" className={styles.back}>
          ← Powrót do kategorii
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

export async function generateStaticParams() {
  try {
    const categories = await getAllCategories();
    return categories.map((cat) => ({ category: cat }));
  } catch (err) {
    console.error(err);
    return [{ category: "electronics" }];
  }
}

export const revalidate = 3600;

export const dynamic = "force-dynamic";
