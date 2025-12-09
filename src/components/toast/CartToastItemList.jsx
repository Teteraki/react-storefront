import { CartToastItem } from "./CartToastItem";

/**
 * CartToastItemList Component
 *
 * Renders a scrollable list of cart items inside the `CartToast` component.
 * Each item is displayed using the `CartToastItem` child component.
 *
 * @param {Object} props
 * @param {Array<Object>} props.cartItems - Array of cart item objects to render.
 */

export const CartToastItemList = ({ cartItems }) => {
  return (
    <ul className="space-y-4 max-h-60 overflow-y-auto">
      {cartItems.map((cartItem) => (
        <CartToastItem
          key={`${cartItem.id}-${cartItem.size}-${cartItem.selectedColor}`} // Unique key based on cartID, size, and selected color.
          cartItem={cartItem}
        />
      ))}
    </ul>
  );
};
