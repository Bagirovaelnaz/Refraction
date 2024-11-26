import { useContext, useEffect, useState } from "react";
import { GlobalThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  sortProducts,
  filterByCategory,
  filterBySearch,
} from "../../redux/productSlicer";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addToWishlist } from "../../redux/wishlistSlicer";
import { useTranslation } from "react-i18next";
import "./shop.css";

const Shop = () => {
  const dispatch = useDispatch();
  const { darkMode } = useContext(GlobalThemeContext);
  const products = useSelector((state) => state.products.data);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const [localStorageTheme, setLocalStorageTheme] = useState("");
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    setLocalStorageTheme(localStorage.getItem("theme"));
  }, [darkMode]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      dispatch(filterByCategory("all"));
    }
  }, [products, dispatch]);

  const handleSearch = (event) => {
    dispatch(filterBySearch(event.target.value));
  };

  const handleFilter = (category) => {
    dispatch(filterByCategory(category));
  };

  const handleSort = (order) => {
    dispatch(sortProducts(order));
  };

  const handleAddToWishlist = (product) => {
    if (favoriteProducts.includes(product.id)) {
      setFavoriteProducts(favoriteProducts.filter((id) => id !== product.id));
    } else {
      setFavoriteProducts([...favoriteProducts, product.id]);
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className={`shop-section-${localStorageTheme}`}>
      <h1>{t("shopAll")}</h1>
      <p id="shop-txt">{t("elevateStyle")}</p>
      <div className="hr-s">
        <hr />
      </div>

      <div className="filter-sort-options">
        <input
          id="product-search"
          type="text"
          placeholder={t("dontKnowWhat")}
          onChange={handleSearch}
        />
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="all">{t("categories")}</option>
          <option value="all">{t("shopAll")}</option>
          <option value="bracelet">{t("bracelets")}</option>
          <option value="necklace">{t("necklaces")}</option>
          <option value="ring">{t("rings")}</option>
          <option value="earring">{t("earrings")}</option>
        </select>

        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="">{t("price")}</option>
          <option value="asc">{t("lowToHigh")}</option>
          <option value="desc">{t("highToLow")}</option>
        </select>
      </div>

      <div className="all-prdct">
        {filteredProducts?.map((product) => (
          <div key={product.id} className={`products-${localStorageTheme}`}>
            <div className="grid">
              <Link to={`/shop/${product?.id}`}>
                <img src={product.img} alt={product.title} />
              </Link>
              <p>{product.title}</p>
              <span>${product.price}.00</span>
              <button id="fav" onClick={() => handleAddToWishlist(product)}>
                {favoriteProducts.includes(product.id) ? (
                  <FaHeart className={`fav-icon-${localStorageTheme}`} />
                ) : (
                  <FaRegHeart className={`fav-icon-${localStorageTheme}`} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
