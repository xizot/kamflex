import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const getSearch = createAsyncThunk('search/get', async (data, { rejectWithValue }) => {
  try {
    return (
      await axiosInstance.get(
        `/api/media?search=${data.search}&page=${data.page}&limit=${data.limit}&sort=${data.sort}`
      )
    ).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    isLoading: false,
    isOpenSearch: false,
    query: '',
    totalPages: 0,
    totalResults: 0,
    page: 0,
    results: [],
  },
  reducers: {
    searchChange: (state, action) => {
      state.query = action.payload;
    },
    clear: (state) => {
      state.query = '';
    },
    openSearch: (state) => {
      state.isOpenSearch = true;
    },
    closeSearch: (state) => {
      state.isOpenSearch = false;
    },
  },
  extraReducers: {
    [getSearch.pending]: (state) => {
      state.isLoading = true;
    },
    [getSearch.rejected]: (state) => {
      state.isLoading = false;
    },
    [getSearch.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { totalPages, totalResults, page, results } = action.payload;
      state.totalPages = totalPages;
      state.totalResults = totalResults;
      state.page = page;
      state.results = results;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
