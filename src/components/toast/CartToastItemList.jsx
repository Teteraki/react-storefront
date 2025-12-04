import { CartToastItem } from "./CartToastItem";

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
