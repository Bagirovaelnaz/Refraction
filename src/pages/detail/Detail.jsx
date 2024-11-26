import { useSelector } from "react-redux";
import "./detail.css";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const { t } = useTranslation();
  const data = useSelector((state) => state);
  console.log(data);
  const product = useSelector((state) =>
    state.products?.data?.find((product) => product.id.toString() === id)
  );

  return (
    <div className="product-detail">
      <img src={product?.img} alt={product?.title} />
      <div className="detail-txt">
        <span>${product?.price}.00</span>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <div>
          <hr />
        </div>
        <button
          onClick={() => {
            addItem(product);
            console.log("Item added to cart");
            toast.success("Product is added to cart successfully!");
          }}
          className="button-5"
        >
          {t("detail.addToCart")}
        </button>

        <div className="detail-faq">
          <div className="accordion-container">
            <Accordion defaultActiveKey={null}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{t("detail.sizeAndFit")}</Accordion.Header>{" "}
                <Accordion.Body>
                  {t("detail.sizeAndFitDescription")}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t("detail.care")}</Accordion.Header>{" "}
                <Accordion.Body>{t("detail.careDescription")}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{t("detail.returns")}</Accordion.Header>{" "}
                <Accordion.Body>
                  {t("detail.returnsDescription")}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
