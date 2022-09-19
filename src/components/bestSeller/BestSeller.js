import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import cartImg from "../../assets/images/cart.png";
import freshTag from "../../assets/images/products-tags/fresh-total.png";
import frozenTag from "../../assets/images/products-tags/frozen-icon.png";
import newTag from "../../assets/images/products-tags/new-icon.png";

let randomArr = [];

const BestSeller = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (bestsellerProducts.length === 0) {
      const fetchBestseller = async () => {
        const response = await fetch(
          "https://me-tech-case-study-default-rtdb.firebaseio.com/products.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();
        setBestsellerProducts(responseData);
      };
      fetchBestseller().catch((error) => {
        console.log(error.message);
      });
    }
  }, []);

  const findItemQuantity = (item) => {
    const selectedItem = cartItems.find((cartItem) => cartItem.id === item.id);
    return selectedItem ? selectedItem.quantity : 0;
  };

  const addToCartHandler = (item) => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };

  const removeFromCartHandler = (item) => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };

  if (randomArr.length === 0) {
    while (randomArr.length < 8) {
      const randomNum = Math.floor(Math.random() * 22);
      if (randomArr.indexOf(randomNum) === -1) {
        randomArr.push(randomNum);
      }
    }
  }

  return (
    <div className="comp-bestseller-01">
      <div className="b-column-01 Heading-Bold">
        <h4>Çok Satanlar</h4>
      </div>
      <div className="b-column-02">
        {bestsellerProducts.length > 0 &&
          randomArr.map((i, index) => {
            return (
              <div className="b-item-01" key={index}>
                <div className="b-unit-01">
                  <div className="b-unit-01-A">
                    <img src={bestsellerProducts[i].image} alt="products" />
                  </div>
                  <div className="b-unit-01-B">
                    <p className="Label-SemiBold">
                      {bestsellerProducts[i].title}
                    </p>
                  </div>
                </div>
                <div className="b-unit-02">
                  <div className="b-unit-02-A">
                    <p className="Heading-Bold-4">
                      {bestsellerProducts[i].price} €
                    </p>
                  </div>
                  {findItemQuantity(bestsellerProducts[i]) === 0 && (
                    <div
                      className="b-unit-02-B"
                      onClick={() => addToCartHandler(bestsellerProducts[i])}
                    >
                      <img src={cartImg} alt="shoppingcart"></img>
                    </div>
                  )}
                  {findItemQuantity(bestsellerProducts[i]) > 0 && (
                    <div className="c-unit-02-BA">
                      <button
                        className="minus"
                        onClick={() =>
                          removeFromCartHandler(bestsellerProducts[i])
                        }
                      >
                        <p>-</p>
                      </button>
                      <span className="Label-SemiBold">
                        {findItemQuantity(bestsellerProducts[i])}
                      </span>
                      <button
                        className="plus"
                        onClick={() => addToCartHandler(bestsellerProducts[i])}
                      >
                        <p>+</p>
                      </button>
                    </div>
                  )}
                </div>
                {bestsellerProducts[i].isFresh && (
                  <div className="product-tags">
                    <img src={freshTag} alt="" />
                  </div>
                )}
                {bestsellerProducts[i].isFrozen && (
                  <div className="product-tags">
                    <img src={frozenTag} alt="" />
                  </div>
                )}
                {bestsellerProducts[i].isNew && (
                  <div className="product-tags">
                    <img src={newTag} alt="" />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BestSeller;
