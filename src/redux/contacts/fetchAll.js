import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6390e6c10bf398c73a963e5b.mockapi.io/api/v1';

export const fetchAll = createAsyncThunk('tasks/fetchAll', async (_, thunk) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    thunk.rejectWithValue(error.message);
  }
});
