import { useEffect, useState } from "react";
import rightClickArrow from "../../assets/images/compains-images/arrow-right-see-all-icon.png";

let randomArr = [];

const Campaigns = () => {
  const [campaignProducts, setCampaignProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCampaignProducts = async () => {
      const response = await fetch(
        "https://me-tech-case-study-default-rtdb.firebaseio.com/campaign.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      setCampaignProducts(responseData);
    };
    fetchCampaignProducts().catch((error) => {
      console.log(error.message);
    });
  }, []);

  if (randomArr.length === 0) {
    while (randomArr.length < 6) {
      const randomNum = Math.floor(Math.random() * 6);
      if (randomArr.indexOf(randomNum) === -1) {
        randomArr.push(randomNum);
      }
    }
  }

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="comp-campaigns-01">
      <div className="c-column-01 Heading-Bold">
        <h4>Kampanyalar</h4>
      </div>
      <div className={isOpen ? "c-column-02 column-02-open" : "c-column-02"}>
        {campaignProducts.length > 0 &&
          randomArr.map((i, index) => {
            return (
              <div className="c-item-01" key={index}>
                <img
                  src={campaignProducts[i].image}
                  alt="campaign-products"
                ></img>
              </div>
            );
          })}
      </div>
      <div className="c-column-03">
        <button className="c-item-01">
          {isOpen ? (
            <p className="Label-SemiBold-2">Kapat</p>
          ) : (
            <p className="Label-SemiBold-2">Tümünü Gör</p>
          )}
        </button>
        <button className="c-item-02" onClick={toggleHandler}>
          <img src={rightClickArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Campaigns;
