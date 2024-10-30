import { loadLocalStorage } from "../localStorage/localStorage";

export const initialState = {
    favorites: loadLocalStorage ? loadLocalStorage('favorites') : [],
    cats: [],
    dogs: [],
    status: 'idle', 
    error: null,

};