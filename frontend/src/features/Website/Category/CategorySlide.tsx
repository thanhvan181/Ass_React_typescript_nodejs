import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, remove, updatecate } from "../../../api/category";



export const loadCategory = createAsyncThunk(
    'product/listCategory', async (id) => {
       
            const { data } = await list();
            return data
       
    }
)

export const removeCategory = createAsyncThunk(
  'category/removeCategory', async (id:any) => {
     
          const { data } = await remove(id);
          return data
     
  }
)
export const addCategory = createAsyncThunk(
  'category/addcategory', 
  async (category:any) => {
    const {data} = await create(category);
    return data
  }
)
export const editCategory = createAsyncThunk(
  'eidtCategory',
  async (id, product) => {
    const {data} = await updatecate(id, product)
    return data;
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
    }),
    builder.addCase(removeCategory.fulfilled, (state, action) =>  {
      // state.productallAdmin = state.productallAdmin.filter((item:any) => item._id !== action.payload._id);

      state.category = state.category.filter((item:any) => item._id !== action.payload._id )
    }),
    builder.addCase(addCategory.fulfilled, (state,action) => {

    })


   
   
  },
})

export default categorySlice.reducer;
