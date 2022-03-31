import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "../../../api/auth";
import { list } from "../../../api/category";
import { getproductsCate, listproduct } from "../../../api/product";

export const signIn = createAsyncThunk(
  'auth/signin',
  async (Datauser:any) => {
      const { data } = await signin(Datauser)
      return data
  }
)
export const signUp = createAsyncThunk(
  'auth/signup',
  async (Datauser:any) => {
    console.log("datauserssss", Datauser)
      const { data } = await signup(Datauser)
      return data
  }
)



const authSlice = createSlice({
  name: 'auth',
  initialState: { info: {}, isAuthenticated: false },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      
      state.info = action.payload;
    })
   
   
  },
})

export default authSlice.reducer;
