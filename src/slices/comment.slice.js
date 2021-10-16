import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const commentGetById = createAsyncThunk('comment/get', async (id, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(`/api/media/${id}`)).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

const commentSlice = createSlice({
  name: 'commentSlice',
  initialState: {
    isLoading: false,
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
