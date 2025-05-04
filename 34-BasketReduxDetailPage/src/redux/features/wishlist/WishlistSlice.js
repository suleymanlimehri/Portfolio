import {  createSlice } from '@reduxjs/toolkit'
const initialState = {
  Allwishlist:[]
}


export const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    wishlistfunc:(state,action)=>{
      let existProduct=state.Allwishlist.find((product)=>product.id==action.payload.id)

      if(existProduct){
        state.Allwishlist=state.Allwishlist.filter((item)=>item.id!=action.payload.id)
      }
      else{
        state.Allwishlist.push(action.payload)
      }
    },
    removeFromWishlist: (state, action) => {
      state.Allwishlist = state.Allwishlist.filter(item => item.id !== action.payload);
    },
    AllremoveWishlist:(state,action)=>{
      state.Allwishlist=[]
    }
  },
})
export const {wishlistfunc,removeFromWishlist,AllremoveWishlist}=WishlistSlice.actions

export default WishlistSlice.reducer

