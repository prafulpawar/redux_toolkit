import { createSlice } from "@reduxjs/toolkit";
// Reducers
const initialState = {
  products: [
   
  ],
};
//Producsts Slice 
// Mujhe Data De DO Aur Naam De Do
const productSlice = createSlice({
  name: "products",
  initialState,
    reducers:{
        getData:(state,action)=>{
          state.products = action.payload;
        },
        add:(state,action)=>{
          state.products.push(action.payload)
        },
       remove:(state)=>{
           state.products.pop()
       }
    }
  
});

export default productSlice.reducer;
export const {add,remove,getData} = productSlice.actions

// productSlice.actions
