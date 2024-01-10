import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartProducts = create(
  persist(
    (set) => ({
      cart: [],

      addProduct: (product) =>
        set((state) => ({
          cart: state.cart.find((item) => item.productId === product.productId)
            ? state.cart.map((item) => item.productId === product.productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.cart, { ...product, quantity: 1 }],
        })),

      removeProduct: (productId) =>
        set((state) => ({
          cart: state.cart.filter((el) => el.productId !== productId),
        })),

      clearCart: () => set((state) => ({ cart: [] })),
    }),

    { name: "cart" }
  )
);
