"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import { useCartStore } from "@/store/cartStore";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)} className={styles.addBtn}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
