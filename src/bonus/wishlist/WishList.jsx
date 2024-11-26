import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../../redux/wishlistSlicer";
import "./wishlist.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { toast } from "react-toastify";

const WishlistL = () => {
  const { t } = useTranslation(); // Initialize translation function
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  const { addItem } = useCart();

  return (
    <div>
      <div className="wishlist">
        <h1>{t("wishlistL.yourWishlist")}</h1>{" "}
        {wishlist.length > 0 ? (
          <>
            <div className="products-wish">
              {wishlist.map((product) => (
                <div key={product.id} className="wishlist-item">
                  <img src={product.img} alt={product.title} />
                  <h3>{product.title}</h3>
                  <span>${product.price}.00</span>
                  <button
                    id="wish-btn"
                    onClick={() => {
                      handleRemoveFromWishlist(product);
                    }}
                  >
                    {t("wishlistL.remove")}
                  </button>
                  <br />
                  <button
                    className="button-6"
                    onClick={() => {
                      addItem(product);
                      console.log("Item added to cart");
                      toast.success("Product is added to cart successfully!");
                    }}
                  >
                    {t("wishlistL.addToCart")}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleClearWishlist} className="clear-btn">
              {t("wishlistL.clearFavorites")}
            </button>
          </>
        ) : (
          <div>
            <p className="wish-empty">{t("wishlistL.emptyMessage")}</p>
            <Link to="/shop">
              <button className="button-7">
                {t("wishlistL.startShopping")}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistL;
