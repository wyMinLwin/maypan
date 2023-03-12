import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dataSlice from "./dataSlice";

const store = configureStore({
    reducer:{
        data: dataSlice.reducer
    }
})

export const useAppDispatch : () => typeof store.dispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
export default store;