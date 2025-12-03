import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
      // Check if product already exists
        const inCart = prev.find(item => item.id === product.id);
        if (inCart) {
            
            return prev.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
        }
        // Add new product
        return [...prev, { ...product, quantity }];
        });
    }
}