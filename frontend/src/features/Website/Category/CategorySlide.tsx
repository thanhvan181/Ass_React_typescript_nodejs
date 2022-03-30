import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../../api/category";
import { getproductsCate } from "../../../api/product";


export const loadCategory = createAsyncThunk(
    'product/listCategory', async (id) => {
       
            const { data } = await list();
            return data
       
    }
)


const initialState = {
  category: [],
 
  // current: {}

};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(loadCategory.fulfilled, (state, action) => {
      
      state.category = action.payload;
    })
   
   
  },
})

export default categorySlice.reducer;
