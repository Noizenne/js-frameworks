import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  addItem: (product) =>
    set((state) => {
      const cartAmount = state.cart.findIndex(
        (addedProduct) => addedProduct.id === product.id
      );

      let newCart;
      if (cartAmount !== -1) {
        newCart = state.cart.map((addedProduct, amount) =>
          amount === cartAmount
            ? {
                ...addedProduct,
                totalItems: addedProduct.totalItems + 1,
                discountedPrice: Number.parseFloat(
                  ((addedProduct.totalItems + 1) *
                    addedProduct.discountedPrice) /
                    addedProduct.totalItems
                ).toFixed(2),
              }
            : addedProduct
        );
      } else {
        newCart = [...state.cart, { ...product, totalItems: 1 }];
      }
      return { cart: newCart };
    }),

  incrementQnty: (id) =>
    set((state) => {
      const newCart = state.cart.map((addedProduct) =>
        addedProduct.id === id
          ? {
              ...addedProduct,
              totalItems: addedProduct.totalItems + 1,
              discountedPrice: Number.parseFloat(
                ((addedProduct.totalItems + 1) * addedProduct.discountedPrice) /
                  addedProduct.totalItems
              ).toFixed(2),
            }
          : addedProduct
      );
      return { cart: newCart };
    }),

  decreaseQnty: (id) =>
    set((state) => {
      const newCart = state.cart.map((addedProduct) =>
        addedProduct.id === id && addedProduct.totalItems > 0
          ? {
              ...addedProduct,
              totalItems: addedProduct.totalItems - 1,
              discountedPrice: Number.parseFloat(
                ((addedProduct.totalItems - 1) * addedProduct.discountedPrice) /
                  addedProduct.totalItems
              ).toFixed(2),
            }
          : addedProduct
      );
      const decreaseProductQty = newCart.filter(
        (addedProduct) => addedProduct.totalItems > 0
      );
      return { cart: decreaseProductQty };
    }),

  removeItem: (id) =>
    set((state) => {
      const newCart = state.cart.filter(
        (addedProduct) => addedProduct.id !== id
      );
      return { cart: newCart };
    }),

  resetCart: () => set({ cart: [] }),
}));

function useCart() {
  const cart = useCartStore((state) => state.cart);
  const resetCart = useCartStore((state) => state.resetCart);
  const addItem = useCartStore((state) => state.addItem);
  const incrementQnty = useCartStore((state) => state.incrementQnty);
  const decreaseQnty = useCartStore((state) => state.decreaseQnty);
  const removeItem = useCartStore((state) => state.removeItem);

  function addToCart(product) {
    addItem(product);
  }

  function clearCart() {
    resetCart();
  }

  function add(id) {
    incrementQnty(id);
  }

  function decrease(id) {
    decreaseQnty(id);
  }

  function remove(id) {
    removeItem(id);
  }

  return {
    cart,
    addToCart,
    clearCart,
    add,
    decrease,
    remove,
  };
}

export { useCart };