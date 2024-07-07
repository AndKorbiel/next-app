import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import filtersSlice from './filtersSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      filters: filtersSlice,
      products: productsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
