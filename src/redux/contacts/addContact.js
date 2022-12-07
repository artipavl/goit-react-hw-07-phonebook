import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6390e6c10bf398c73a963e5b.mockapi.io/api/v1';

export const addContact = createAsyncThunk(
  'tasks/addContact',
  async (article, thunk) => {
    try {
      const response = await axios.post('/contacts', article);
      return response.data;
    } catch (error) {
      thunk.rejectWithValue(error.message);
    }
  }
);
