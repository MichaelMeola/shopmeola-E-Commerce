import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


function calculateCartQuantity(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

export const useCartProducts = create(
  persist(
    (set) => ({
      cart: [],
      cartQuantity: 0,

      changeQuantity: (event, productId) => {
        const newQuantity = +event.target.value;
        if (newQuantity >= 1) {
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item.productId === productId
                ? { ...item, quantity: newQuantity }
                : item
            );
            return {
              ...state,
              cart: updatedCart,
              cartQuantity: calculateCartQuantity(updatedCart),
            };
          });
        }
      },

      addProduct: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.productId === product.productId
          );
          const updatedCart = existingItem
            ? state.cart.map((item) =>
                item.productId === product.productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.cart, { ...product, quantity: 1 }];

          return {
            ...state,
            cart: updatedCart,
            cartQuantity: calculateCartQuantity(updatedCart),
          };
        }),

      removeProduct: (productId) =>
        set((state) => {
          const updatedCart = state.cart.filter(
            (el) => el.productId !== productId
          );
          return {
            ...state,
            cart: updatedCart,
            cartQuantity: calculateCartQuantity(updatedCart),
          };
        }),

      clearCart: () => set({ cart: [], cartQuantity: 0 }),
    }),

    { name: "cart" }
  )
);