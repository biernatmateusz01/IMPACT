import { useState, useEffect } from "react";
import styles from "./CartIcon.module.css";

export default function CartIcon({ count }: { count: number }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.cartIcon}>
      🛒
      {isClient && count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  );
}
