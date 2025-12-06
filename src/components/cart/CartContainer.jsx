import { useCart } from "../../hooks/CartContext";
import { CartItemList } from "./CartItemList";
import { CartSummary } from "./CartSummary";

/**
 * CartContainer Component
 *
 * The main container for the shopping cart page. Displays all items currently
 * in the user's cart, allows quantity updates and item removal, and shows a
 * summarized breakdown of the cart totals.
 */
export const CartContainer = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0
  );

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <CartItemList
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <CartSummary
                      cartSubtotal={cartSubtotal}
                      itemCount={cartItems.length}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
