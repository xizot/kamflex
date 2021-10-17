import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const getMyList = createAsyncThunk(
  'myList/get',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.get(`/api/playlists?page=${page}&limit=${limit}`)).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

const myListSlice = createSlice({
  name: 'myListSlice',
  initialState: {
    isLoading: false,
    totalPages: 0,
    totalResults: 0,
    page: 0,
    results: [],
  },
  extraReducers: {
    [getMyList.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyList.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMyList.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { totalPages, totalResults, page, results } = action.payload;
      state.totalPages = totalPages;
      state.totalResults = totalResults;
      state.page = page;
      state.results = results;
    },
  },
});

export const myListActions = myListSlice.actions;
export default myListSlice;
