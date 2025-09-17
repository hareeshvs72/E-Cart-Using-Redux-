import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // add to cart - when add to cart btn click from view and wishlit
        addToCart:(state,action)=>{
            // find product in the state 
            const existingProduct = state.find(item=>item.id == action.payload.id)
            if(existingProduct){
                //  increment quatity
                existingProduct.quantity++
                existingProduct.totalprice = existingProduct.quantity * existingProduct.price
                // get reminig product other than  existing
                const remingProduct  = state.filter(item=>item.id != existingProduct.id)
                state = [...remingProduct,existingProduct]
            }
            else{
            //   add item to cart 
            state.push({...action.payload,quantity:1,totalprice:action.payload.price})
            }
        },
        // remove item from cart 
        removeCartItem:(state,action)=>{
           return state.filter(item=>item.id != action.payload)
        },
        // incremnet quantity
        incremnetQuantity:(state,action)=>{
              // find product in the state 
            const existingProduct = state.find(item=>item.id == action.payload)
            existingProduct.quantity++
            existingProduct.totalprice = existingProduct.quantity * existingProduct.price
              const remingProduct  = state?.filter(item=>item.id != action.payload)
                state = [...remingProduct,existingProduct]
        },
          decremnetQuantity:(state,action)=>{
              // find product in the state 
            const existingProduct = state.find(item=>item.id == action.payload)
            existingProduct.quantity--
            existingProduct.totalprice = existingProduct.quantity * existingProduct.price
              const remingProduct  = state?.filter(item=>item.id != action.payload)
                state = [...remingProduct,existingProduct]
        },
        emptyCart:(state,action)=>{
          return state = []
        }
    }

})

export const  {addToCart,removeCartItem,incremnetQuantity,decremnetQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer