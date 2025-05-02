import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductSlice';
import wishlistReducer from '../features/wishlist/WishlistSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistCombineReducers } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productReducer,
  wishlist: wishlistReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});



