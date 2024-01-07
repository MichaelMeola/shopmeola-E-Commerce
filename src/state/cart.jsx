import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCart = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const useCartProducts = create(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      clearProducts: () => set((state) => ({ products: [] })),
    }),
    { name: "cart" }
  )
);

export const useCartSidebarOpen = create((set) => ({
  isOpen: false,
  open: () => set((state) => ({ isOpen: true })),
  close: () => set((state) => ({ isOpen: false })),
}));
