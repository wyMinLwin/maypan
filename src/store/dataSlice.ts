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
    images: string[],
    addedToCart: boolean,
    addedToFav: boolean,
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
    modelOpen:boolean,
    cart:(fetchProductsType & {quantity:number}) [],
    fav:fetchProductsType[],
} 

const initialState:initialStateType= {
    products:[],
    loadingStatus:"idle",
    searchResult:[],
    modelOpen:false,
    cart:[],
    fav:[],
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
        },
        controlModel: (state) => {
            state.modelOpen = !state.modelOpen
        },
        addToCart: (state,action:PayloadAction<string>) => {
            state.products = state.products.map(item => {
                if (item.id === action.payload) {
                    state.cart = [...state.cart,{...item,quantity:1}]
                    return {...item,addedToCart:true}
                }
                return {...item}
            })
        },
        addToFav: (state,action:PayloadAction<string>) => {
            state.products = state.products.map(item => {
                state.fav = [...state.fav,item]
                if (item.id === action.payload) {
                    return {...item,addedToFav:true}
                }
                return {...item}
            })
        },
        removeFromCart: (state,action:PayloadAction<string>) => {
            state.products = state.products.map(item => {
                if (item.id === action.payload) {
                    state.cart = state.cart.filter(item => item.id !== action.payload)
                    return {...item,addedToCart:false}
                }
                return {...item}
            })
        },
        removeFromFav: (state,action:PayloadAction<string>) => {
            state.products = state.products.map(item => {
                state.fav = state.fav.filter(item => item.id !== action.payload)
                if (item.id === action.payload) {
                    return {...item,addedToFav:false}
                }
                return {...item}
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataFromDummy.pending,(state) => {
            state.loadingStatus = 'waiting'
        }),
        builder.addCase(fetchDataFromDummy.fulfilled,(state,action:PayloadAction<fetchDataType>) => {
            state.products = action.payload.products.map(item => ({...item,addedToCart:false,addedToFav:false}));
            state.loadingStatus = 'success'
        })
        builder.addCase(fetchDataFromDummy.rejected,(state) => {
            state.loadingStatus = 'fail'
        })
    }
})

export default dataSlice;