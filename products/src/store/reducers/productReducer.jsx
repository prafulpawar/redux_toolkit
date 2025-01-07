import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data:[

    ]
}

const productSlice = createSlice({
    name:'Product',
    initialState,
    reducers:{
        addProduct:(action,payload)=>{
            state.data.push(payload);
        }
    }
})

export default productSlice.reducers
export const {addProduct} = productSlice.actions;