import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listInjection } from "../../../api/injectionpark";



export const loadInjectionPark = createAsyncThunk(
    'injectionpark/listInjectionPark', async () => {
       
            const { data } = await listInjection();
            return data
       
    }
)



const initialState = {
    injectionpark: [],
   
    // current: {}
  
  };
  
  const injectionparkSlice = createSlice({
    name: 'injectionpark',
    initialState,
    reducers: {
      // fill in primary logic here
    },
    extraReducers: (builder) => {
      builder.addCase(loadInjectionPark.fulfilled, (state, action) => {
        // console.log("CAT", action.payload)
        state.injectionpark = action.payload;
      })
     
      
  
  
     
     
    },
  })
  

   


export default injectionparkSlice.reducer;
