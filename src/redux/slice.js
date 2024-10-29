import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state.js';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
            console.log(action.payload);
        },
    },
});
export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;