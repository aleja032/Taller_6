import { createAsyncThunk } from "@reduxjs/toolkit";
import CatService from '../services/catService';

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async () => {
    const dataCats = await CatService.getCats();
    return dataCats; 
  }
);
