import { CartItem } from "./CartItem";

/**
 * CartItemList Component
 * 
 * Renders the full list of items currently in the shopping cart. Delegates
 * the rendering and interaction logic for each individual item to the
 * CartItem component.
 *

 * @param {Object} props
 * @param {Array<Object>} props.cartItems - Array of cart item objects to display.
 *   Each item should include id, size, and selectedColor so that a unique
 *   cart variant can be identified.
 *
 * @param {Function} props.removeFromCart - Callback to remove a specific item.
 *   Passed directly to each <CartItem />.
 *
 * @param {Function} props.updateQuantity - Callback to update item quantity.
 *   Passed directly to each <CartItem />.
 */

export const CartItemList = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <ul className="space-y-4">
      {cartItems.map((item) => (
        <CartItem
          key={`${item.id}-${item.size}-${item.selectedColor}`}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
    </ul>
  );
};
