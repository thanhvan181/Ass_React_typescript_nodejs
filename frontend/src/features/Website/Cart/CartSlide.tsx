import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart(state, action) {
            // const ItemsIndex = state.items.findIndex((item:any) => item._id === action.payload._id);

            // if(ItemsIndex >= 0) {
                
            // }
            const newProduct = action.payload;
            // // const pesudoId = (new Date()).getTime();

            // const existProduct = state.items.find((item:any) => item._id === newProduct.id);
            // if (!existProduct) {
                


            //     // state.items.push(newProduct);
            // }
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