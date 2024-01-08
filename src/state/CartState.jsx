import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// export const useCart = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }));

export const useCartProducts = create(
  persist(
    (set) => ({
      cart: [],

      addProduct: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),

      removeProduct: (productId) =>
        set((state) => ({
          cart: state.cart.filter((el) => el.id !== productId),
        })),

      clearCart: () => set((state) => ({ cart: [] }))

    }),

    { name: "cart" }
  )
);

export const useCartSidebarOpen = create((set) => ({
  isOpen: false,
  open: () => set((state) => ({ isOpen: true })),
  close: () => set((state) => ({ isOpen: false })),
}));
