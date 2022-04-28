import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice'
import walletReducer from '../features/wallet/walletSlice'
import dayReducer from '../features/day/daySlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    wallet: walletReducer,
    day: dayReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
