import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProduct } from "../redux/productSlicer";
import { useNavigate, useParams } from "react-router-dom";
import "./dashboard.css";

const EditPage = () => {
  const { id } = useParams();
  const editId = parseInt(id, 10);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const product = data?.products?.filteredProducts?.find(
    (item) => item?.id === editId
  );
  console.log(product);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    price: 0,
    category: "",
  });

  useEffect(() => {
    dispatch(fetchProducts(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        img: product.img,
        price: product.price,
        category: product.category,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, ...formData }));
    navigate("/admin");
    dispatch(fetchProducts());
  };

  return (
    <div className="admin-container">
      <h2 className="product-form-title">Edit Product</h2>
      <div className="product-form">
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Product Image URL"
            value={formData.img}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Product Category"
            value={formData.category}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <button type="submit">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
