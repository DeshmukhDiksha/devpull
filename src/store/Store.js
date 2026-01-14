import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'; 
import FeedReducer from './FeedSlice';
import UserConnectionReducer from './UserConnections';

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: FeedReducer,
    userConnections: UserConnectionReducer,
  },
});

export default store;