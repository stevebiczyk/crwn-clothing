import "./cart-item.styles.scss";

const CartItem = () => {
  const { name, quantity } = CartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  );
};
export default CartItem;