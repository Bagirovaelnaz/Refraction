import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct, addProduct } from "../redux/productSlicer";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function AdminPanel() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const isLoading = useSelector((state) => state.products.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const startEditingProduct = (product) => {
    navigate('/admin/productform', { state: { product } });
  };

  // Yeni məhsul əlavə etmə funksiyası
  const handleAddProduct = async (newProduct) => {
    await dispatch(addProduct(newProduct));
    dispatch(fetchProducts()); // Məhsulları yeniləyin
    navigate('/admin'); // Admin səhifəsinə yönləndirin
  };

  return (
    <div className="admin-container">
      <h3>Product List</h3>
      <button
        className="add-product-button"
        onClick={() => navigate("/admin/productform")}
      >
        Add New Product
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProductList
            products={products}
            onEdit={startEditingProduct}
            onDelete={handleDeleteProduct}
          />
          <ProductForm onAddProduct={handleAddProduct} /> {/* Burada çağırın */}
        </>
      )}
    </div>
  );
}

export default AdminPanel;
