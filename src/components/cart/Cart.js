import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <section className="comp-cart-01">
      <h1 className="Heading-Bold-2 c-item-01">Shopping Chart</h1>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              image: item.image,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default Cart;
