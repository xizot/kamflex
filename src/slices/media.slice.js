import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const mediaGetByPage = createAsyncThunk(
  'media/get',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`/api/media?page=${page}&limit=${limit}&sort=desc(_id)`))
        .data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

const mediaSlice = createSlice({
  name: 'mediaSlice',
  initialState: {
    isLoading: false,
  },
});

export const mediaActions = mediaSlice.actions;
export default mediaSlice;
