import { createSlice } from "@reduxjs/toolkit";

import {  toast } from 'react-toastify';

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems") as any) : [],
        cartTotalQuanlity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
      addToCart(state:any, action:any) {

       const itemIndex = state.items.findIndex((item:any) => item._id === action.payload._id);
       if(itemIndex >= 0){
           state.items[itemIndex].cartQuanlity +=1;
           toast.info(`Them ${state.items[itemIndex].name} gio hang`)
           console.log("Items")

           
       }else{
           const templateProduct = {...action.payload, cartQuanlity: 1}
           state.items.push(templateProduct);
           toast.success("Them san pham moi thanh cong ")
           console.log("tempalteProduct", templateProduct)
       } 
       localStorage.setItem("cartItems", JSON.stringify(state.items) )
        }
        // increaseCart(state, action) {
        //     state.items.find(item => item.id === action.payload).quantity++;
        // },
        // decreaseCart(state, action) {
        //     const items = state.items.find(item => item.id === action.payload);
        //     items.quantity--;
        //     if (items.quantity < 1) {
        //         state.items = state.items.filter(item => item.id !== items.id);
        //     }
        // },
        // removeItemFromCart(state, action) {
        //     const id = action.payload;
        //     state.items = state.items.filter(item => item.id !== id);
        }
    }
);

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer