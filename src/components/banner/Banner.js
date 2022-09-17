import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch(
        "https://me-tech-case-study-default-rtdb.firebaseio.com/banner.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      setBannerList(responseData);
    };
    fetchBanners().catch((error) => {
      console.log(error.message);
    });
  }, []);

  const renderSlides = () =>
    bannerList.map((banner, index) => (
      <div key={index}>
        <img src={banner.image} className="banner-image-33" alt="banners" />
      </div>
    ));

  const brandList = [
    "moncheri",
    "mentos",
    "nestle",
    "oreo",
    "snickers",
    "kinder",
    "red-bull",
    "ferrero",
    "capri-sun",
    "heinz",
    "heineken",
    "coca-cola",
    "starbucks",
  ];
  const brandSlides = () =>
    brandList.map((brand, index) => (
      <div className={`brand-${brand} logo`} key={index}></div>
    ));
  return (
    <div className="comp-banner-01">
      <div className="c-column-1">
        <div className="c-item-1">
          <Slider
            dots={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            autoplay={true}
            autoplaySpeed={2000}
            cssEase="linear"
          >
            {renderSlides()}
          </Slider>
        </div>
        <div className="c-item-2">
          <Slider
            dots={false}
            slidesToShow={9}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            pauseOnHover={true}
            swipeToSlide={true}
          >
            {brandSlides()}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
