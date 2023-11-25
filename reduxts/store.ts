import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './notesslice';
export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
