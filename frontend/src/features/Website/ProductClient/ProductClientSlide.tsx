import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../../api/category";
import { getproductsCate, listproduct, read } from "../../../api/product";
// import { getAll, add, get } from '../../api/productApi';
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (params:any) => {
    const {data: {data, paging}, } = await listproduct(params);
    console.log("dataproduct", data);
    console.log("paging", paging);
    return {data, paging};
  }
);
export const loadCategory = createAsyncThunk(
  "product/listCategory",
  async () => {
    const { data } = await list();
    return data;
  }
);
export const getProductinCategory = createAsyncThunk(
  "category/listproduct",
  async (id: any) => {
    const { data } = await getproductsCate(id);
    console.log("datainputcate", data);
    return data;
  }
);
export const readone = createAsyncThunk(
  "product/productDetails",
  async (id: any) => {
    const { data } = await read(id);
    console.log("datainputcate", data);
    return data;
  }
);

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
  current: {},
  paging: {},

};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.value = action.payload.data;
      state.paging = action.payload.paging;
      // state.paging = action.payload;
    }),
      builder.addCase(getProductinCategory.fulfilled, (state, action) => {
        state.value = action.payload;
      }),
      builder.addCase(readone.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

export default productSlice.reducer;
