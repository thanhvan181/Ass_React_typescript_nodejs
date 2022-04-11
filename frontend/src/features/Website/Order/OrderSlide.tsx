import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create } from "../../../api/order";





export const createOrders= createAsyncThunk(
    'order/createOrder', 
    async (newOrder:any) => {
      console.log("newOrder", newOrder)
     
      // const {id, dataInput:newOrder} = params
      // console.log("params", params)
  
    
     
      const {data} = await create( newOrder)
      console.log("DATA UPdateproduct", data)
      return data;
    }
)


const initialState = {
  order: [],
 
  current: {}

};

const OrderSlide = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(createOrders.fulfilled, (state, action) => {
      
      state.order = action.payload;
    })
   
   
  },
})

export default OrderSlide.reducer;
