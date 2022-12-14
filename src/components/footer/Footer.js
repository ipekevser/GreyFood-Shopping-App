import FooterStepsBanner from "../../assets/images/footer-images/footer-steps-banner.jpeg";
import GooglePlay from "../../assets/images/footer-images/footer-google-play.png";
import AppStore from "../../assets/images/footer-images/footer-app-store.png";
import AppGallery from "../../assets/images/footer-images/footer-appgallery.png";
import QR from "../../assets/images/footer-images/qr.png";
import Brand from "../../assets/images/footer-images/footer-brands.png";
import AdvPrice from "../../assets/images/footer-images/footer-advantageus-prices.png";
import Delivery from "../../assets/images/footer-images/footer-deelivery.png";
import Support from "../../assets/images/footer-images/footer-support.png";
import FooterLogo from "../../assets/images/footer-images/logo-footer.png";
import FooterImage from "../../assets/images/footer-images/footer-img.png";
import DeutchBank from "../../assets/images/footer-images/footer-icon-deutsche-bank.png";
import Paypal from "../../assets/images/footer-images/footer-icon-paypal.png";
import MasterPass from "../../assets/images/footer-images/footer-icon-masterpass.png";
import FooterCall from "../../assets/images/footer-images/footer-call-us-icon.png";
import Facebook from "../../assets/images/footer-images/footer-facebook-icon.png";
import Twitter from "../../assets/images/footer-images/footer-twetter-icon.png";
import Linkedin from "../../assets/images/footer-images/footer-linkedin-icon.png";
import Instagram from "../../assets/images/footer-images/footer-instagram-icon.png";

const Footer = () => {
  return (
    <div className="comp-footer-01">
      <div className="f-column-01">
        <img src={FooterStepsBanner} alt="footer-steps"></img>
      </div>
      <div className="f-column-02">
        <div className="f-item-01">
          <img src={FooterImage} alt="footer-images"></img>
        </div>
        <div className="f-item-02">
          <div className="f-unit-01">
            <img src={AppStore} alt="appstore" />
            <img src={GooglePlay} alt="googleplay" />
            <img src={AppGallery} alt="appgallery" />
          </div>
          <div className="f-unit-02">
            <p className="f-unit-02-AA Heading-Bold-2">
              D??nya Markalar?? Cebinizde!
            </p>
            <p className="Label-SemiBold-Large">
              Mobil uygulamam??z?? indirin, her yerden kolay <dt /> al????veri??
              imkan?? sa??lay??n.
            </p>
            <dt />
            <p className="Label-SemiBold-Large">
              QR Kodu okut uygulamay?? hemen indir!
            </p>
          </div>
          <div>
            <img src={QR} alt="QR" className="f-unit-03"></img>
          </div>
        </div>
      </div>
      <div className="f-column-03">
        <div className="f-item-01">
          <img src={Brand} alt="footer"></img>
          <h4 className="Heading-Bold-3">30???dan Fazla Marka</h4>
          <p className="Label-SemiBold-Large-2">
            Greyfood arac??l?????? ile prestijli markalar raflar??n??zda yerini als??n!
          </p>
        </div>
        <div className="f-item-01">
          <img src={AdvPrice} alt="footer"></img>
          <h4 className="Heading-Bold-3">Avantajl?? Fiyatlar</h4>
          <p className="Label-SemiBold-Large-2">
            D??nya markalar??n??n en iyi ??r??nleri kaliteli ve avantajl?? fiyatlarla
            raflar??n??zda!
          </p>
        </div>
        <div className="f-item-01">
          <img src={Delivery} alt="footer"></img>
          <h4 className="Heading-Bold-3">Profesyonel Da????t??m</h4>
          <p className="Label-SemiBold-Large-2">
            ??r??nlerimizi ara??lara s??gd?????? kadar degil, kapasitesini sunuyoruz.
          </p>
        </div>
        <div className="f-item-01">
          <img src={Support} alt="footer"></img>
          <h4 className="Heading-Bold-3">7/24 Destek</h4>
          <p className="Label-SemiBold-Large-2">
            Sat???? ??ncesi ve sonras?? t??m s??re??lerde, ki??isel m????teri deste??i
            sa??l??yoruz!
          </p>
        </div>
      </div>
      <div className="f-column-04">
        <div className="f-column-04-A">
          <div className="f-item-01">
            <div className="f-unit-01">
              <h5 className="Label-SemiBold-Large-2">GreyFood</h5>
              <p className="Label-Bold-2">Kurumsal</p>
              <p className="Label-Bold-2">Blog</p>
              <p className="Label-Bold-2">Katalog</p>
              <p className="Label-Bold-2">Iletisim</p>
            </div>
            <div className="f-unit-02">
              <h5 className="Label-SemiBold-Large-2">Yard??m</h5>
              <p className="Label-Bold-2">Teslimat Bilgileri</p>
              <p className="Label-Bold-2">Gizlilik ve G??venlik</p>
              <p className="Label-Bold-2">S??kca Sorulan Sorular</p>
              <p className="Label-Bold-2">??ptal ve ??ade Ko??ullar??</p>
            </div>
          </div>
          <div className="f-item-02">
            <img
              src={FooterLogo}
              alt="Footer-logo"
              className="f-item-02-A"
            ></img>
            <div className="f-unit-01">
              <img src={Facebook} alt="logo"></img>
              <img src={Twitter} alt="logo"></img>
              <img src={Instagram} alt="logo"></img>
              <img src={Linkedin} alt="logo"></img>
            </div>
            <div className="f-unit-02">
              <button>
                <p className="Label-SemiBold-2">Bize Ulasin</p>
              </button>
              <div className="f-unit-02-A">
                <img src={FooterCall} alt="Footer-call"></img>
              </div>
            </div>
          </div>
          <div className="f-item-03">
            <img src={AppStore} alt="appstore" />
            <img src={GooglePlay} alt="googleplay" />
            <img src={AppGallery} alt="appgallery" />
          </div>
        </div>
      </div>
      <div className="f-column-05">
        <div className="f-item-01 Label-SemiBold-3">
          <a href="#!">KVKK</a>
          <span> | </span>
          <a href="#!">Mesafeli Sat???? S??zle??mesi</a>
          <span> | </span>
          <a href="#!">??yelik S??zlesmesi</a>
        </div>
        <div className="f-item-02">
          <p className="Label-SemiBold-4">?? Copyright Greyfood</p>
        </div>
        <div className="f-item-03">
          <img src={MasterPass} alt="MasterPass"></img>
          <img src={Paypal} alt="Paypal"></img>
          <img src={DeutchBank} alt="Bank"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
