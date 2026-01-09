import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'; 
import FeedReducer from './FeedSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: FeedReducer,

  },
});

export default store;