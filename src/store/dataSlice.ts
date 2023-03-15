import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type fetchProductsType = {
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
    loadingStatus: loadingType ,
    searchResult: fetchProductsType[],
} 

const initialState:initialStateType= {
    products:[],
    loadingStatus:"idle",
    searchResult:[],
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
    reducers:{
        searchByName: (state,action:PayloadAction<string>) => {
            state.searchResult = state.products.filter(item => item.title.toLocaleLowerCase().search(action.payload.toLocaleLowerCase()) !== -1)
        }
    },
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