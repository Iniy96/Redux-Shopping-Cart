import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE : "idle",
    ERROR :"error",
    LOADING:"loading"
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
})

export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer


//Thunks

export const fetchProducts =()=>{
    const fetchProductsThunk =async(dispatch,getstate)=>{
        dispatch(setStatus(STATUSES.LOADING))
            try {
              const data= await fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                dispatch(setProducts(data))
                
                dispatch(setStatus(STATUSES.IDLE))
            } catch (error) {
                console.log(error)
                dispatch(setStatus(STATUSES.ERROR))
            }
    }
    return fetchProductsThunk;
}