import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const getUser = createAsyncThunk('user/get', async (id, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(`/api/users/${id}`)).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

export const updateUser = createAsyncThunk('user/patch', async (data, { rejectWithValue }) => {
  try {
    return (await axiosInstance.patch(`/api/users/${data.id}`, data)).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    isLoading: false,
    info: {},
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
