import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
