import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsType } from "./dataSlice";
 

type initialCartType = {
    cartItems: fetchProductsType[],
    cartOpen: boolean
}

const initialState:initialCartType = {
    cartItems:[],
    cartOpen:false
} 

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        controlCartVisibility: (state) => {
            state.cartOpen = !state.cartOpen
        },
        // addToCart: (state,action:PayloadAction) {
        //     // state.cartItems = action.payload
        // }
    },
})

export default cartSlice