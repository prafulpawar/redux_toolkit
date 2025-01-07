// productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching products from API
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  console.log(response.data)
  return response.data;
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Store the fetched data in Redux state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer; // Export the reducer
