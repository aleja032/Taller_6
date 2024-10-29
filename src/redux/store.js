import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './slice.js';

const store = configureStore({
    reducer: {
      favorites: favoritesSlice,
    },
  });
  
export default store;