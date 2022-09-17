import Yoga from "../../assets/images/selected-products/yoga-square.png";
import Mentos from "../../assets/images/selected-products/mentos-square.png";
import Redbull from "../../assets/images/selected-products/redbull-square.png";

const SelectedProducts = () => {
  return (
    <div className="s-container">
      <div className="s-column-01 Heading-Bold">
        <h4>Sizin İçin Seçtiklerimiz</h4>
      </div>
      <div className="s-column-02">
        <div className="s-item-01">
          <img src={Yoga} alt="yoga"></img>
          <div className="s-unit-01">
            <button className="Label-Bold-4">Sezon Ürünleri</button>
          </div>
        </div>
        <div className="s-item-01">
          <img src={Mentos} alt="mentos"></img>
          <div className="s-unit-01 Label-Bold-4">
            <button className="Label-Bold-4">Fresh Ürünler</button>
          </div>
        </div>
        <div className="s-item-01">
          <img src={Redbull} alt="redbull"></img>
          <div className="s-unit-01 Label-Bold-4">
            <button className="Label-Bold-4">İçecekler </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;
