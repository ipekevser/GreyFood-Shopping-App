import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import Cart from "../cart/Cart";

import logo from "../../assets/images/logo.png";
import campaignLogo from "../../assets/images/header-images/campaigns.png";
import blogLogo from "../../assets/images/header-images/blog.png";
import catalogLogo from "../../assets/images/header-images/katalog.png";
import shoppingCart from "../../assets/images/header-images/header-cart.png";
import language from "../../assets/images/header-images/language-avatar.png";
import select from "../../assets/images/header-images/language-down-arrow.png";
import searchLogo from "../../assets/images/header-images/arrow.png";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const closeCartHandler = () => {
    setIsOpen(false);
  };

  const openCartHandler = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (cartQuantity === 0) {
      closeCartHandler();
    }
  }, [cartQuantity]);

  return (
    <header className="comp-header-01">
      <div className="c-header-01">
        <div className="c-column-01">
          <div className="c-item-01">
            <div className="c-unit-01">
              <p className="c-unit-01-AA Label-SemiBold-5 ">Merhaba,</p>
              <p className="c-unit-01-AB Label-Bold-3">Ergin</p>
            </div>
            <div className="c-unit-02" onClick={openCartHandler}>
              <img
                className="c-unit-02-A"
                src={shoppingCart}
                alt="shoppingcart"
              />
              <button className="c-unit-02-AA Label-SemiBold-6 ">
                Sepetim
              </button>
              <button className="c-unit-02-AB"></button>
              <button className="c-unit-02-AC">{cartQuantity}</button>
            </div>
            <div className="c-unit-03">
              <p className="c-unit-03-AA Label-SemiBold ">Türkçe</p>
              <img src={language} className="c-unit-03-AB" alt="language" />
              <img src={select} className="c-unit-03-AC" alt="select" />
            </div>
          </div>
        </div>
        <div className="c-column-02">
          <div className="c-item-01">
            <img className="c-unit-01" src={logo} alt="logo" />
            <img className="c-unit-02" src={campaignLogo} alt="logo" />
            <div className="c-unit-03">
              <a href="#!" className="Label-SemiBold ">
                Kampanyalar
              </a>
            </div>
            <img className="c-unit-02" src={blogLogo} alt="logo" />
            <div className="c-unit-03">
              <a href="#!" className="Label-SemiBold ">
                Blog
              </a>
            </div>
            <img className="c-unit-02" src={catalogLogo} alt="logo" />
            <div className="c-unit-03">
              <a href="#!" className="Label-SemiBold ">
                Katalog
              </a>
            </div>
            <button className="c-unit-04">Tüm Kategoriler</button>
          </div>
          <div className="c-item-03">
            <img src={searchLogo} alt="searchLogo" className="c-unit-01" />
            <input
              type="text"
              key="5"
              placeholder="Site içinde arama yapın..."
              className="c-unit-02"
            />
            <button className="c-unit-03 Label-SemiBold-3">Giriş Yap</button>
            <button className="c-unit-04 Label-SemiBold-3">Üye Ol</button>
          </div>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={isOpen}
        PaperProps={{
          sx: {
            width: "30%",
            minWidth: 300,
          },
        }}
        onClose={closeCartHandler}
      >
        <Cart />
      </Drawer>
    </header>
  );
};

export default MainHeader;
