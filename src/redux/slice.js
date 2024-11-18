import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state.js';
import { fetchCats } from './catsThunk.js';
import { fetchDogs } from './dogsThunk.js'; 
import { saveLocalStorage } from '../localStorage/localStorage.js';

const catAndDogSlice = createSlice({
    name: 'catAndDogSlice',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
            saveLocalStorage('favorites', state.favorites); 
        },
        deleteFavorite: (state, action) => {
            const favorites = state.favorites.filter(item => item.id !== action.payload);
            state.favorites = favorites;
            saveLocalStorage('favorites', favorites);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCats.pending, (state) => {
            state.status = 'loading'; 
        })
        .addCase(fetchCats.fulfilled, (state, action) => {
            state.status = 'succeeded'; 
            state.cats = action.payload; 
        })
        .addCase(fetchCats.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message; 
        })

        // Perros
        .addCase(fetchDogs.pending, (state) => {
            state.status = 'loading'; 
        })
        .addCase(fetchDogs.fulfilled, (state, action) => {
            state.status = 'succeeded'; 
            state.dogs = action.payload;
        })
        .addCase(fetchDogs.rejected, (state, action) => {
            state.status = 'failed'; 
            state.error = action.error.message; 
        });
    }
});
export const { addFavorite, deleteFavorite } = catAndDogSlice.actions;
export default catAndDogSlice.reducer;