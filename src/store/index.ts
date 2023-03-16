import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartSlice from "./cartSlice";
import dataSlice from "./dataSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
    reducer:{
        data: dataSlice.reducer,
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
    }
})

export const useAppDispatch : () => typeof store.dispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
export default store;