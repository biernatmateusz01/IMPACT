import { Product } from "@/lib/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Cart = CartItem[];

export interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}
