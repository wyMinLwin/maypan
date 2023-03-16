import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsType } from "./dataSlice";
 

type initialWishListType = {
    wishlistItems: fetchProductsType[],
    wishlistOpen: boolean
}

const initialState:initialWishListType = {
    wishlistItems:[],
    wishlistOpen:false
} 

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        controlWishlistVisibility: (state) => {
            state.wishlistOpen = !state.wishlistOpen
        },
        // addTowishlist: (state,action:PayloadAction) {
        //     // state.wishlistItems = action.payload
        // }
    },
})

export default wishlistSlice