import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../../api/category";
import { getproductsCate, listproduct, read } from "../../../api/product";
// import { getAll, add, get } from '../../api/productApi';
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const { data } = await listproduct();
    console.log("data", data);
    return data;
  }
);
export const loadCategory = createAsyncThunk(
    'product/listCategory', async (id) => {
       
            const { data } = await list();
            return data
       
    }
)
export const getProductinCategory = createAsyncThunk(
  'category/listproduct',
 async (id: any) => {
     const {data} = await getproductsCate(id)
     console.log("datainputcate", data);
     return data;
     
 }
)
export const readone = createAsyncThunk(
  'product/productDetails',
 async (id: any) => {
     const {data} = await read(id)
     console.log("datainputcate", data);
     return data;
     
 })


// export const addProduct = createAsyncThunk(
//     'product/addProduct', async (product, { rejectWithValue }) => {
//         try {
//             const { data } = await add(product);
//             return data
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )


// interface ProductsState {
//   products: []
 
// }

// type initialState = {
//   products: [],
 
// }
const initialState = {
  value: [],
  cateogry: [],
  // current: {}

};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      
      state.value = action.payload;
    }),
    builder.addCase(getProductinCategory.fulfilled, (state, action) => {
      
      state.value = action.payload;
  })
   
  },
})

export default productSlice.reducer;
