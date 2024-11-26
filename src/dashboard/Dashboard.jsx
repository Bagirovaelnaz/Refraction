import { fetchProducts } from "../redux/productSlicer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import supabase from "../supabase";
import "./dashboard.css";
export default function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (productId) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", productId);
      console.log(productId, "PRODUCT ID" );
    if (error) {
      toast.error("Error removing product!");
    } else {
      toast.success("Product is removed successfully!");
      dispatch(fetchProducts()); 

    }
  };

  return (
    <div className="dashboard">
      <div>
        <button className="add-product-button">
          <NavLink to="/add-product">Add New Product</NavLink>
        </button>
      </div>
      <div className="product">
        {data &&
          data.map((item) => (
            <div key={item.id} className="items">
              <img src={item.img} alt="Product" />
              <h3>{item.title}</h3>
              <p>${item.price} </p>
              <p>{item.description}</p>
              <div className="edit-delete">
                <NavLink to={`/edit-product/${item.id}`}>
                  <button>Edit</button>
                </NavLink>
                <button onClick={() => handleDelete(item.id)}> Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
