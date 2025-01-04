import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

// Creating A Slice Of The Data
const addSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
      console.log([...state.data]);
    },
    view: (state, action) => {
      state.data;
    },
    updateOne: (state, action) => {
      const { index, updatedData } = action.payload; 
      state.data[index] = updatedData; 
      console.log([...state.data]);
    },
    deleteOne: (state, action) => {
      state.data.splice(action.payload, 1);
      console.log([...state.data]);
    },
  },
});

export default addSlice.reducer;
export const { add, view, updateOne, deleteOne } = addSlice.actions;
