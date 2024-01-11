import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// HELPER FUNCTIONS
const calculateCartQuantity = (cart) => {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.quantity;
  }

  return total;
};

const calculateCartTotalPrice = (cart) => {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const price = +item.price.slice(1);
    totalPrice += price * item.quantity;
  }

  return "$" + totalPrice.toFixed(2);
};

// GLOBAL STATE
export const useCartProducts = create(
  persist(
    (set) => ({
      cart: [],
      cartQuantity: 0,
      cartTotalPrice: "$0.00",

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
              cartTotalPrice: calculateCartTotalPrice(updatedCart),
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
            cartTotalPrice: calculateCartTotalPrice(updatedCart),
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
            cartTotalPrice: calculateCartTotalPrice(updatedCart),
          };
        }),

      clearCart: () =>
        set({ cart: [], cartQuantity: 0, cartTotalPrice: "$0.00" }),
    }),

    { name: "cart" }
  )
);


export const useProductStore = create(
  persist(
    (set) => ({
      products: [],
      setProducts: (data) => set({ products: data }),
    }),
    
    {name: 'products'}
  )
);