import { createAsyncThunk } from "@reduxjs/toolkit";
import CatService from '../services/CatService';

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async () => {
    const dataCats = await CatService.getCats();
    return dataCats; 
  }
);
