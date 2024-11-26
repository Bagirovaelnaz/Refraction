import { configureStore } from "@reduxjs/toolkit";
import productSLicer from "./productSlicer";
import wishlistSlicer from "./wishlistSlicer";
const store = configureStore({
  reducer: {
    products: productSLicer,
    wishlist: wishlistSlicer,
  },
});

export default store;
