import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
