import { createSlice } from "@reduxjs/toolkit";
// Reducers
const initialState = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      quantity: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 5,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      quantity: 15,
    },
  ],
};
//Producsts Slice 
// Mujhe Data De DO Aur Naam De Do
const productSlice = createSlice({
  name: "products",
  initialState,
    reducers:{
        add:(state,action)=>{
          state.products.push(action.payload)
        },
        deleteProduct:(state,action)=>{
          state.products.pop()
        }
    }
  
});

export default productSlice.reducer;
export const {add} = productSlice.actions
export const {deleteProduct} = productSlice.actions

// productSlice.actions
