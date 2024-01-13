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

      changeQuantity: (event, productId, size) => {
        const newQuantity = +event.target.value;
        if (newQuantity >= 1) {
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item.productId === productId && item.size === size
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
            (item) =>
              item.productId === product.productId && item.size === product.size
          );

          if (existingItem && existingItem.quantity >= 10) {
            return state;
          }

          const updatedCart = existingItem
            ? state.cart.map((item) =>
                item.productId === product.productId &&
                item.size === product.size
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

      removeProduct: (productId, size) =>
        set((state) => {
          const updatedCart = state.cart.filter(
            (el) => el.productId !== productId || el.size !== size
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

export const useAddressFormStore = create(
  (set) => ({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    setFirstName: (firstName) => set({ firstName }),
    setLastName: (lastName) => set({ lastName }),
    setAddress: (address) => set({ address }),
    setCity: (city) => set({ city }),
    setState: (state) => set({ state }),
    setZip: (zip) => set({ zip }),
    setCountry: (country) => set({ country }),
  }),
  {
    name: "address",
  }
);

export const usePaymentFormStore = create(
  (set) => ({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    setCardName: (cardName) => set({ cardName }),
    setCardNumber: (cardNumber) => set({ cardNumber }),
    setExpiryDate: (expiryDate) => set({ expiryDate }),
    setCvv: (cvv) => set({ cvv }),
  }),
  {
    name: "payment",
  }
)

export const useOrderStore = create(
    (set) => ({
      order: [],
      setOrder: (data) => set({ order: data })
    }),

    { name: "order"}
)

export const useProductStore = create(
  persist(
    (set) => ({
      products: [],
      setProducts: (data) => set({ products: data }),
    }),

    { name: "products" }
  )
);

