import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity, price } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>
                {quantity} x ${price}
              </span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>Decrease</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>Increase</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
