import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, action) {
            const addingtoCartWithQuantity = {...action.payload,quantity: 1}
            state.push(addingtoCartWithQuantity)
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
        increase(state,action){
            return state.map(item=>{
                if(item.id === action.payload){
                    return {...item,quantity:item.quantity+1}
                }else{
                    return item;
                }
            })
        },
        decrease(state,action){
            return state.map(item=>{
                if(item.id === action.payload){
                   return {...item,quantity:item.quantity-1}
                   
                }else{
                    return item;
                }
            })
        },
        clearCart(state,action){
            state.splice(0, state.length);
        }
    }
})

export const {add,remove,increase,decrease,clearCart} = cartSlice.actions;
export default cartSlice.reducer