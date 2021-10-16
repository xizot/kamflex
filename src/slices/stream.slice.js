import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const streamGetById = createAsyncThunk('stream/get', async (id, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(`/api/media/${id}/movie/streams`)).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

const streamSlice = createSlice({
  name: 'streamSlice',
  initialState: {
    isLoading: false,
  },
});

export const streamActions = streamSlice.actions;
export default streamSlice;
