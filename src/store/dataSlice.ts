import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type fetchProductsType = {
    id: string,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

type fetchDataType = {
    products : fetchProductsType[],
    total: number,
    skip: number,
    limit: number,
}

type loadingType = "idle"|"waiting"|"success"|"fail";

type initialStateType = {
    products: fetchProductsType[],
    loadingStatus: loadingType 
} 

const initialState:initialStateType= {
    products:[],
    loadingStatus:"idle"
}

export const fetchDataFromDummy = createAsyncThunk('data/fetchDataFromDummy',async () => {
    try {
        const res = await fetch('https://dummyjson.com/products');
        return (await res.json())
    } catch (error) {
        console.log(error)
    }
})

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchDataFromDummy.pending,(state) => {
            state.loadingStatus = 'waiting'
        }),
        builder.addCase(fetchDataFromDummy.fulfilled,(state,action:PayloadAction<fetchDataType>) => {
            state.products = action.payload.products;
            state.loadingStatus = 'success'
        })
        builder.addCase(fetchDataFromDummy.rejected,(state) => {
            state.loadingStatus = 'fail'
        })
    }
})

export default dataSlice;