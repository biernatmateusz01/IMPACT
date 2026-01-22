"use client";

import styles from "./CartIcon.module.css";

type Props = { count: number };

export default function CartIcon({ count }: Props) {
  return (
    <div className={styles.cartIcon}>
      🛒
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  );
}
