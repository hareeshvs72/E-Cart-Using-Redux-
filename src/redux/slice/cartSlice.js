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
        }
    }

})

export const  {addToCart} = cartSlice.actions
export default cartSlice.reducer