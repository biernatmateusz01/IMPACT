"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import CartIcon from "../CartIcon/CartIcon";
import styles from "./Header.module.css";

export default function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          FakeStore
        </Link>

        <nav className={styles.nav}>
          <Link href="/cart" className={styles.cartLink}>
            <CartIcon count={totalItems} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
