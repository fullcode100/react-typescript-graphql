import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import countryReducer from './reducers/countrySlice';
import guiReducer from './reducers/guiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    country: countryReducer,
    gui: guiReducer,
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
