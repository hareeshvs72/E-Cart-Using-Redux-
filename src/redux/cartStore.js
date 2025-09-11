import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice'
const cartStore = configureStore({
    reducer:{
      productsReducer: productSlice
    }
})
export default cartStore