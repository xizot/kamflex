import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/auth.slice';
import detailSlice from '../slices/detail.slice';
import historySlice from '../slices/history.slice';
import mediaSlice from '../slices/media.slice';
import myListSlice from '../slices/myList.slice';
import searchSlice from '../slices/search.slice';
import streamSlice from '../slices/stream.slice';
import ratingSlice from '../slices/rating.slice';
import userSlice from '../slices/user.slice';

export default configureStore({
  reducer: {
    stream: streamSlice.reducer,
    detail: detailSlice.reducer,
    media: mediaSlice.reducer,
    auth: authSlice.reducer,
    search: searchSlice.reducer,
    mylist: myListSlice.reducer,
    history: historySlice.reducer,
    rating: ratingSlice.reducer,
    userInfo: userSlice.reducer,
  },
});
