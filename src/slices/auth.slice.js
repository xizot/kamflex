import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios';
import { decodeJwt } from '../utils/jwt';

export const authGetById = createAsyncThunk('auth/get', async (id, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(`/api/media/${id}`)).data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data.message);
  }
});

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.post('/api/auth/sign-in', {
          email,
          password,
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
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, username, password, birthdate }, { rejectWithValue }) => {
    try {
      return (
        await axiosInstance.post('/api/auth/sign-up', {
          email,
          username,
          password,
          birthdate,
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

export const sendConfirmEmail = createAsyncThunk(
  'auth/sendConfirmEmail',
  async (_, { rejectWithValue }) => {
    try {
      return (await axiosInstance.post('/api/auth/send-confirmation-email')).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const confirmEmail = createAsyncThunk(
  'auth/sendConfirmEmail',
  async ({ id, activationCode }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.post('/api/auth/confirm-email', { id, activationCode })).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      return (await axiosInstance.post('/api/auth/password-recovery', { email })).data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  accessToken: null,
  refreshToken: null,
};

const initReducer = (state) => {
  state = { ...state, ...initialState, isLoading: true };
};

const authSuccess = (state, action) => {
  const { accessToken, refreshToken } = action.payload;
  state.isAuthenticated = true;
  state.isLoading = false;
  state.accessToken = accessToken;
  state.refreshToken = refreshToken;
  state.user = decodeJwt(accessToken);

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },
    [login.fulfilled]: authSuccess,
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.rejected]: (state) => {
      state.isLoading = false;
    },
    [register.fulfilled]: authSuccess,
    [confirmEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [confirmEmail.rejected]: (state) => {
      state.isLoading = true;
    },
    [confirmEmail.fulfilled]: authSuccess,
    [forgotPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [forgotPassword.rejected]: (state) => {
      state.isLoading = false;
    },
    [forgotPassword.fulfilled]: (state) => {
      state.isLoading = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;