import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/auth.slice';
import detailSlice from '../slices/detail.slice';
import mediaSlice from '../slices/media.slice';
import streamSlice from '../slices/stream.slice';

export default configureStore({
  reducer: {
    stream: streamSlice.reducer,
    detail: detailSlice.reducer,
    media: mediaSlice.reducer,
    auth: authSlice.reducer,
  },
});
