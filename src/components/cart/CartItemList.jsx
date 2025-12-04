import { CartItem } from "./CartItem";

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
