import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Allproduct: [],
};

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const { data } = await axios.get("http://localhost:3000/products");
  return data;
});

export const addProduct = createAsyncThunk("product/addProduct", async (product) => {
  const { data } = await axios.post("http://localhost:3000/products", product);
  return data;
});

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id) => {
  await axios.delete(`"http://localhost:3000/products/${id}`);
  return id
});

export const updateProduct = createAsyncThunk("product/updateProduct", async (product) => {
  const { data } = await axios.put(`${url}/${product.id}`, product);
  return data;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        state.Allproduct = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.Allproduct.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.Allproduct = state.Allproduct.filter(p => p.id !== action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.Allproduct = state.Allproduct.map(p =>
          p.id === action.payload.id ? action.payload : p
        );
      });
  },
});

export default productSlice.reducer;
