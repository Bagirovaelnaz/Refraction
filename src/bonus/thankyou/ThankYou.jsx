import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlicer";

const ThankYou = () => {
  const { t } = useTranslation();
  const products = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const slicedProducts2 = products.slice(10, 15);
  console.log(products); // Will show the product array in the console
  
  return (
    <div className="error-section">
      <div className="error">
        <div className="error-t-b">
          <h1>{t("thankYou.title")}</h1>
          <p>{t("thankYou.message")}</p>
          <Link to="/">
            <button className="button-2">{t("thankYou.goToHome")}</button>
          </Link>
        </div>
        <h2>{t("thankYou.offers")}:</h2>
        <div className="products-thnk">
          {slicedProducts2.map((product) => {
            return (
              <div key={product.id}>
                <div className="item-thanks">
                  <Link to={`/shop/${product?.id}`}>
                    <img src={product.img} alt={product.title} />
                  </Link>
                  <p>{product.title}</p>
                  <span>${product.price}.00 USD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
