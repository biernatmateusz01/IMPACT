"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-toastify";
import { CartState } from "./types";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        set((state) => {
          const existing = state.cart.find(
            (item) => item.product.id === product.id,
          );
          if (existing) {
            toast("successfully added to cart!", {
              position: "top-right",
              autoClose: 2000,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { cart: [...state.cart, { product, quantity: 1 }] };
        });
      },

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity < 1) return state;
          return {
            cart: state.cart.map((item) =>
              item.product.id === productId ? { ...item, quantity } : item,
            ),
          };
        }),

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        return get().cart.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0,
        );
      },

      getTotalItems: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
    },
  ),
);
