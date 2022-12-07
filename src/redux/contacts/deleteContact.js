import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6390e6c10bf398c73a963e5b.mockapi.io/api/v1';

export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
