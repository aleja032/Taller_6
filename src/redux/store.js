import { configureStore } from '@reduxjs/toolkit';
import catAndDogSlice from './slice.js';

const store = configureStore({
    reducer: {
      catAndDog: catAndDogSlice,
    },
  });
  
export default store;