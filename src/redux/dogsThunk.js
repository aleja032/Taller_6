import { createAsyncThunk } from "@reduxjs/toolkit";
import  DogService from '../services/DogService';

export const fetchDogs = createAsyncThunk(
  'dogs/fetchDogs', 
  async () => {
    const datadogs = await DogService.getDogs(); 
    return datadogs;
  }
);
