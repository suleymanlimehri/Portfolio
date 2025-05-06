import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allbasket:[]
}
export const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        addbasket:(state,action)=>{
            let findproduct=state.allbasket.find(basket=>basket.id===action.payload.id)
            if(!findproduct){
                state.allbasket.push({...action.payload,count:1})
            }
            else{
                findproduct.count+=1;
            }
        },
        increment:(state,action)=>{
            let findbasket=state.allbasket.find((item)=>item.id==action.payload.id)
            if(findbasket){
                findbasket.count+=1
            }
        },
        decrement:(state,action)=>{
            let findbasket=state.allbasket.find((item)=>item.id==action.payload.id)
            if(findbasket && findbasket.count>1){
                findbasket.count-=1
            }
        },
        removeBasket:(state,action)=>{
            state.allbasket=state.allbasket.filter((item)=>item.id!=action.payload.id)
        },
        AllremoveBasket:(state)=>{
            state.allbasket = []
        }
    }
})
export const {addbasket, removeBasket,decrement,increment,AllremoveBasket}=basketSlice.actions
export default basketSlice.reducer