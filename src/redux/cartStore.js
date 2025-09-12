import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice'
import wishlistSlice from './slice/wishlist'
const cartStore = configureStore({
    reducer:{
      productsReducer: productSlice,
      wishlistReducer : wishlistSlice
    }
})
export default cartStore