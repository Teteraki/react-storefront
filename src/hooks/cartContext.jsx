import { createContext, useContext, useState, useEffect } from "react";

// Create context
const CartContext = createContext();

// Custom hook for easier usage
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Load initial cart from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Whenever cartItems changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size, color, quantity = 1) => {
    setCartItems((prev) => {
      // Find exact matching variant
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.selectedColor === color
      );

      // If it exists, increment quantity
      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.size === size &&
          item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Otherwise add as new variant
      return [
        ...prev,
        {
          ...product,
          size,
          selectedColor: color,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId, size, color) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === productId &&
            item.size === size &&
            item.selectedColor === color
          )
      )
    );
  };

  const updateQuantity = (productId, size, color, quantity) => {
    const qty = Number(quantity);

    // Ignore NaN or negative values
    if (!Number.isFinite(qty) || qty < 0) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId &&
        item.size === size &&
        item.selectedColor === color
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Get total count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
