import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const mediaGetByPage = createAsyncThunk(
  'media/get',
  async ({ page, limit, sort }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`/api/media?page=${page}&limit=${limit}&sort=${sort}`)).data;
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
    totalPages: 0,
    totalResults: 0,
    page: 0,
    results: [],
  },
  extraReducers: {
    [mediaGetByPage.pending]: (state) => {
      state.isLoading = true;
    },
    [mediaGetByPage.rejected]: (state) => {
      state.isLoading = false;
    },
    [mediaGetByPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { totalPages, totalResults, page, results } = action.payload;
      state.totalPages = totalPages;
      state.totalResults = totalResults;
      state.page = page;
      state.results = results;
    },
  },
});

export const mediaActions = mediaSlice.actions;
export default mediaSlice;
