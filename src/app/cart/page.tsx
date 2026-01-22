"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } =
    useCartStore();

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Your cart is empty</h2>
        <a href="/">Start shopping →</a>
      </div>
    );
  }

  const total = getTotalPrice();

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>

      <div className={styles.list}>
        {cart.map((item) => (
          <div key={item.product.id} className={styles.item}>
            <div className={styles.image}>
              <Image
                src={item.product.image}
                alt={item.product.title}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.details}>
              <h3>{item.product.title}</h3>
              <p>${item.product.price.toFixed(2)}</p>
            </div>
            <div className={styles.quantity}>
              <button
                disabled={item.quantity <= 1}
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity - 1)
                }
                className={item.quantity <= 1 ? styles.disabled : ""}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.product.id)}
              className={styles.remove}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}
