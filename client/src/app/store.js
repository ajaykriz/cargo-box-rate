import { configureStore } from '@reduxjs/toolkit';
import cargoReducer from '../slice/cargoSlice';

export const store = configureStore({
  reducer: {
    cargo:cargoReducer,
  },
});