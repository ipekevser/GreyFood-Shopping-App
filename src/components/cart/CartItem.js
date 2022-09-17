import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { item } = props;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <li className="comp-cart-item-01">
      <div className="c-item-01">
        <div className="c-unit-01">
          <img src={item.image} alt="img" className="c-unit-01-A" />
        </div>
        <h3 className="Heading-Bold-4 c-unit-03">{item.title}</h3>
        <div className="c-unit-02 Label-Bold">
          ${+item.total.toFixed(2)}
          <div>
            <span className="Label-SemiBold-5">
              (${+item.price.toFixed(2)}/item)
            </span>
          </div>
        </div>
      </div>
      <div className="c-item-02">
        <div className="c-unit-01 Label-SemiBold-Large">
          x<span>{item.quantity}</span>
        </div>
        <div className="c-unit-02">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
      <div className="c-item-03"></div>
    </li>
  );
};

export default CartItem;
