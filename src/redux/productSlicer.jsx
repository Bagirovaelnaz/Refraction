import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw new Error(error.message);
  return data;
});

export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
  const { data, error } = await supabase.from("products").insert([product]);
  if (error) {
    console.error("Error adding product:", error.message); // Xətaları konsola yazdırın
    throw new Error(error.message);
  }
  return data[0];
});


export const updateProduct = createAsyncThunk("products/updateProduct", async (product) => {
  const { data, error } = await supabase.from("products").update(product).eq("id", product.id);
  if (error) throw new Error(error.message);
  return data[0];
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return id;
});

const productSlicer = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
    filteredProducts: [],
  },
  reducers: {
    filterByCategory: (state, action) => {
      if (action.payload === "" || action.payload === "all") {
        state.filteredProducts = state.data;
      } else {
        state.filteredProducts = state.data.filter(
          (product) => product.category === action.payload
        );
      }
    },
    sortProducts: (state, action) => {
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        if (action.payload === 'asc') {
          return a.price - b.price;
        } else if (action.payload === 'desc') {
          return b.price - a.price;
        }
        return 0;
      });
    },
    
    filterBySearch: (state, action) => {
      state.filteredProducts = state.data.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.filteredProducts = state.data;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
          state.filteredProducts = [...state.data]; 
        }
    })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.data = state.data.filter((product) => product.id !== action.payload);
        state.filteredProducts = state.filteredProducts.filter((product) => product.id !== action.payload);
      });
  },
});

export const { filterByCategory, sortProducts, filterBySearch } = productSlicer.actions;
export default productSlicer.reducer;
