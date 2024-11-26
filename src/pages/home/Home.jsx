import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/productSlicer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const { t } = useTranslation(); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const slicedProducts = products.slice(2, 10);

  return (
    <div>
      <div className="home-section">
        <div className="yazi-1">
          <p>
            {t('elegant')} &  {t('timeless')}
          </p>
        </div>
      </div>
      <div className="container-home">
        <div className="earrings-box">
          <div id="e-yazi">
            <em>{t('specialNights')}</em>
          </div>
          <div>
            <img
              src="https://assets.website-files.com/606a817e5976f2ad842e21e6/6078f9ea92b64ac7223d31af_section2-min.png"
              alt="s"
            />
            <Link to="/shop" id="e-link">
              {t('clearEarrings')} <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className="necklace-box">
          <div>
            <img
              src="https://assets.website-files.com/606a817e5976f2ad842e21e6/6078f9ea4eed16570ea9af17_necklace4-min-p-500.png"
              alt=""
            />
            <br />
            <Link to="/shop" id="e-link">
              {t('chainNecklace')} <GoArrowRight />
            </Link>
          </div>
          <div>
            <h3>
              {t('refractionJewellery')}
            </h3>
            <Link to="/about">
              <p id="about-us">{t('aboutUs')}</p>
            </Link>
          </div>
        </div>
        <div className="ring-box">
          <div>
            <span>
              {t('dontKnowWhat')} 
            </span>
            <br />
            <Link id="r-yazi" to="/shop">
              <p id="about-us">{t('shopAll')}</p>
            </Link>
          </div>
          <div>
            <img
              src="https://assets.website-files.com/606a817e5976f2ad842e21e6/6078f9ead5e352794cca67ea_ring1-min-p-500.png"
              alt=""
            />
            <Link to="/shop" id="e-link">
              {t('stackRing')} <GoArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="arrivals">
        <div className="arrival-t-b">
          <h1 id="basliq">{t('newArrivals')}</h1>
          <span>
            {t('elevateStyle')}
          </span>
        </div>
        <div className="hr2">
          <hr></hr>
        </div>
        <div className="arrival-img">
          <div className="home-grid">
            {slicedProducts.map((product) => (
              <div key={product.id} className="products">
                <div className="grid">
                  <Link to={`/shop/${product?.id}`}>
                    <img src={product.img} alt={product.title} id="h-img" />
                  </Link>
                  <p>{product.title}</p>
                  <span>${product.price}.00 USD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
