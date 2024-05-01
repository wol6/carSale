import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const carCartSlice=createSlice({
    name:"car",
    initialState,
    reducers:{
        addToCart(state,action)
        {
            state.push(action.payload)
        },
        removeFromCart(state,action){
            const index = state.findIndex(item=>{
                console.log(item.id)
                return item.id===action.payload
            })
            if(index!=-1)
            {
                state.splice(index,1)
            }
        }
    }
})
export const {addToCart,removeFromCart} = carCartSlice.actions
export default carCartSlice.reducer