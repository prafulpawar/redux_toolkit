// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';

export default configureStore({
  reducer: {
    product: productReducer, // Add productReducer to the store
  },
});
