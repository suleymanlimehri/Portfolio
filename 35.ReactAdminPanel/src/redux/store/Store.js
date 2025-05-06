import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/ProductSlice'
import wishlistReducer from '../features/WishlistSlice'
import basketReducer from '../features/basketSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
};

const persistWishlist=persistReducer(persistConfig,wishlistReducer)
const persistProduct=persistReducer(persistConfig,productReducer)
const persistBasket=persistReducer(persistConfig,basketReducer)



export const store =configureStore({
  reducer:
  {
    products:persistProduct,
    wishlist:persistWishlist, 
    basket:persistBasket
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
}) 


export const persistor = persistStore(store);



