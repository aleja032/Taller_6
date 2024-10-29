import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state.js';
import { fetchCats } from './catsThunk.js';
import { fetchDogs } from './dogsThunk.js'; 

const catAndDogSlice = createSlice({
    name: 'catAndDogSlice',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
            console.log(action.payload);
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
export const { addFavorite } = catAndDogSlice.actions;
export default catAndDogSlice.reducer;