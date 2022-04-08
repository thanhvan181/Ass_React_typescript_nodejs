import { createSlice } from "@reduxjs/toolkit";
import Item from "antd/lib/list/Item";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart(state:any, action:any) {
            console.log("ActionADdCart", action)

            const newProduct= action.payload;
            const nextProduct = state.items.find((item:any) => item._id === newProduct._id);
            if (!nextProduct) {
                state.items.push(newProduct)
                localStorage.setItem('myCart', JSON.stringify(newProduct));
            } else {
                console.log("quanlity++")
            }
        },
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