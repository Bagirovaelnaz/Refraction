import { useCart } from "react-use-cart";
import "./bag.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { useTranslation } from "react-i18next";

const Bag = () => {
  const { t } = useTranslation();
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkUserSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setUser(session.user);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  const handleCheckoutClick = async () => {
    await checkUserSession();
    if (!user) {
      navigate("/signup");
    } else {
      setIsCheckout(true);
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (cardNumber && expiryDate && cvc) {
      setMessage("Payment successful! Thank you for your purchase.");
      items.forEach(item => removeItem(item.id));
      setIsCheckout(false); 
      navigate("/thankyou"); 
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  const closeModal = () => {
    setIsCheckout(false);
    setMessage("");
    setCardNumber("");
    setExpiryDate("");
    setCvc("");
  };

  return (
    <div className="all-bag">
      {items.length === 0 ? (
        <div className="empty-bag-message">
          <p>{t("bagF.emptyBagMessage")}</p>
          <Link to="/shop">
            <button className="start-browsing-btn">{t("bagF.shopNow")}</button>
          </Link>
        </div>
      ) : (
        <div className="bag-section">
          <table className="table">
            <tbody>
              {items.map((item, index) => (
                <tr key={index} id="table">
                  <td id="title">{item.title}</td>
                  <td id="bag-img">
                    <img src={item.img} alt={item.title} id="basket-img" />
                  </td>
                  <td id="bag-price">$ {item.price * item.quantity}.00</td>
                  <button
                    id="btn-bag"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    <FaMinus />
                  </button>
                  {item.quantity}
                  <button
                    id="btn-bag"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                  <button id="bag-btn" onClick={() => removeItem(item.id)}>
                    {t("bagF.removeItem")} 
                  </button>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="checkout-section">
            <p id="total"><strong>{t("bagF.total")}:</strong> ${cartTotal.toFixed(2)}</p>
            <button className="button-7" onClick={handleCheckoutClick}>
              {t("bagF.buyAll")} 
            </button>
          </div>
        </div>
      )}

      {isCheckout && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <form onSubmit={handleCheckout} className="checkout-form">
              <h3 id="enter">{t("bagF.enterPaymentDetails")}</h3>
              <label>
                {t("bagF.cardNumber")}:
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </label>
              <label>
                {t("bagF.expiryDate")}:
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </label>
              <label>
                {t("bagF.cvc")}:
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                  required
                />
              </label> <br />
              <button type="submit" className="btn-3">
                {t("bagF.confirmPayment")}
              </button>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;
