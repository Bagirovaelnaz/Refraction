import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],  
  },
  reducers: {
    addToWishlist: (state, action) => {
      const productExists = state.items.find(item => item.id === action.payload.id);
      if (!productExists) { 
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
