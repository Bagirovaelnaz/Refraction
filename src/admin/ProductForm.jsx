import { useState } from "react";
import PropTypes from "prop-types";

function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      img: image,
    };

    try {
      await onAddProduct(newProduct);
      // Formu sıfırlayın
      setTitle("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div className="product-form">
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

ProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};

export default ProductForm;
