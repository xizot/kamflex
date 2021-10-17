import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const getHistory = createAsyncThunk(
  'history/get',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`/api/history?page=${page}&limit=${limit}`)).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

const historySlice = createSlice({
  name: 'historySlice',
  initialState: {
    isLoading: false,
    totalPages: 0,
    totalResults: 0,
    page: 0,
    results: [],
  },
  extraReducers: {
    [getHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [getHistory.rejected]: (state) => {
      state.isLoading = false;
    },
    [getHistory.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { totalPages, totalResults, page, results } = action.payload;
      state.totalPages = totalPages;
      state.totalResults = totalResults;
      state.page = page;
      state.results = results;
    },
  },
});

export const historyActions = historySlice.actions;
export default historySlice;
