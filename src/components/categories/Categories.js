import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import freshTag from "../../assets/images/products-tags/fresh-total.png";
import frozenTag from "../../assets/images/products-tags/frozen-icon.png";
import newTag from "../../assets/images/products-tags/new-icon.png";

import cartImg from "../../assets/images/cart.png";

const Categories = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [products, setProducts] = useState([]);
  const [filterParams, setFilterParams] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://me-tech-case-study-default-rtdb.firebaseio.com/products.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      setProducts(responseData);
    };
    fetchProducts().catch((error) => {
      console.log(error.message);
    });
  }, []);

  const findItemQuantity = (item) => {
    const selectedItem = cartItems.find((cartItem) => cartItem.id === item.id);
    return selectedItem ? selectedItem.quantity : 0;
  };

  const filterProductHandler = (e) => {
    setFilterParams(e.target.id);
  };

  let filteredProducts = [];
  
  if (filterParams !== "all") {
    filteredProducts = products.filter(
      (item) => item.category === filterParams
    );
  } else {
    filteredProducts = [...products];
  }

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

  const categoriesButtons = [
    { categoryIcon: "snack", category: "snack", title: "Atıştırmalık" },
    { categoryIcon: "drink", category: "drink", title: "İçecekler" },
    { categoryIcon: "wafer", category: "wafer", title: "Gofret" },
    { categoryIcon: "ice-cream", category: "ice-cream", title: "Dondurma" },
    { categoryIcon: "chocolate", category: "chocolate", title: "Çikolata" },
    { categoryIcon: "coffee", category: "coffee", title: "Kahve" },
    { categoryIcon: "allcategory", category: "all", title: "Tüm Kategoriler" },
  ];

  return (
    <div className="comp-categories-01">
      <div className="c-column-01">
        <h4 className="Heading-Bold">Kategoriler</h4>
      </div>
      <div className="c-column-02">
        <div className="c-column-02-A">
          {categoriesButtons.map((item, index, arr) => (
            <div
              key={index}
              className="c-item-01"
              onClick={filterProductHandler}
              id={item.category}
            >
              <div
                className={
                  filterParams !== `${item.category}`
                    ? `${item.categoryIcon} category`
                    : `${item.categoryIcon}-active category`
                }
                id={item.category}
              ></div>
              <p
                className={
                  filterParams !== `${item.category}`
                    ? "Label-SemiBold-Large"
                    : "Label-SemiBold-Large active-label"
                }
                id={item.category}
              >
                {item.title}
              </p>
              {index < arr.length - 2 && <div className="c-unit-08"></div>}
            </div>
          ))}
        </div>
        <div className="c-column-02-B">
          {products.length > 0 &&
            filteredProducts.map((item, index) => {
              return (
                <div className="c-item-01" key={index}>
                  <div className="c-unit-01">
                    <div className="c-unit-01-A">
                      <img src={item.image} alt="products" />
                    </div>
                    <div className="c-unit-01-B">
                      <p className="Label-SemiBold">{item.title}</p>
                    </div>
                  </div>
                  <div className="c-unit-02">
                    <div className="c-unit-02-A">
                      <p className="Heading-Bold-4">{item.price} €</p>
                    </div>
                    {findItemQuantity(item) === 0 && (
                      <div
                        className="c-unit-02-B"
                        onClick={() => addToCartHandler(item)}
                      >
                        <img src={cartImg} alt="shoppingcart"></img>
                      </div>
                    )}
                    {findItemQuantity(item) > 0 && (
                      <div className="c-unit-02-BA">
                        <button
                          className="minus"
                          onClick={() => removeFromCartHandler(item)}
                        >
                          <p>-</p>
                        </button>
                        <span className="Label-SemiBold">
                          {findItemQuantity(item)}
                        </span>
                        <button
                          className="plus"
                          onClick={() => addToCartHandler(item)}
                        >
                          <p>+</p>
                        </button>
                      </div>
                    )}
                  </div>
                  {item.isFresh && (
                    <div className="product-tags">
                      <img src={freshTag} alt="" />
                    </div>
                  )}
                  {item.isFrozen && (
                    <div className="product-tags">
                      <img src={frozenTag} alt="" />
                    </div>
                  )}
                  {item.isNew && (
                    <div className="product-tags">
                      <img src={newTag} alt="" />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
