import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const detailGetById = createAsyncThunk('detail/get', async (id, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(`/api/media/${id}`)).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

const detailSlice = createSlice({
  name: 'detailSlice',
  initialState: {
    isLoading: false,
  },
  extraReducers: {
    [detailGetById.pending]: (state) => {
      state.isLoading = true;
    },
    [detailGetById.rejected]: (state) => {
      state.isLoading = false;
    },
    [detailGetById.fulfilled]: (state) => {
      state.isLoading = false;
    },
  },
});

export const detailActions = detailSlice.actions;
export default detailSlice;
