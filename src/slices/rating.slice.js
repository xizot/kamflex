import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const getRating = createAsyncThunk('rating/get', async ({ media }, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(`/api/ratings?media=${media}`)).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

export const rating = createAsyncThunk(
  'rating/post',
  async ({ media, kind }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.post(`/api/ratings`, {
          media,
          kind,
        })
      ).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

const ratingSlice = createSlice({
  name: 'ratingSlice',
  initialState: {},
});

export const ratingActions = ratingSlice.actions;
export default ratingSlice;
