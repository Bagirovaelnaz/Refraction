import "./admin.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productSlicer";

function ProductList({ products, onEdit, onDelete }) {
  const dispatch = useDispatch();

  const handleEdit = (product) => {
    onEdit(product); 
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
      if (onDelete) onDelete(id);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="admin-prdct">
          <img src={product.img} alt="Product" />
          <h4>{product.title}</h4>
          <p>Price: {product.price} AZN</p>
          <p>{product.description}</p>
          <button onClick={() => handleEdit(product)}>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired, // Burada name əvəzinə title istifadə edirik
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      img: PropTypes.string, // img yoxlamasını əlavə etdik
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default ProductList;
