import Link from "next/link";
import { getAllCategories } from "@/lib/api";
import styles from "./CategoryList.module.css";
ś;
export default async function Home() {
  const categories = await getAllCategories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <ul className={styles.grid}>
        {categories.map((cat) => (
          <li key={cat}>
            <Link href={`/${encodeURIComponent(cat)}`} className={styles.card}>
              <h2 className={styles.categoryName}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
