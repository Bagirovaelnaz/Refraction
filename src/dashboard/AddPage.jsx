import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../redux/productSlicer";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    img: "",
    category: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({ title: "", description: "", img: "", category: "" }); 
    dispatch(fetchProducts());
    navigate('/admin')
  };

  return (
    <div className="admin-container">
      <h2 className="product-form-title">Add New Product</h2>
      <div className="product-form">
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={product.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Product Image URL"
            value={product.img}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Product Category"
            value={product.category}
            onChange={handleChange}
            required
          /> <br />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
