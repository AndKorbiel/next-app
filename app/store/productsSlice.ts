import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from '../types';
import { initialAvailableProducts } from '../constants';

type ProductsState = {
  availableProducts: Product[];
  selectedProducts: Product[];
};

const initialState: ProductsState = {
  availableProducts: initialAvailableProducts,
  selectedProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductToSelected: (state, action: PayloadAction<Product>) => {
      if (
        !state.selectedProducts.some(
          (product) => product.id === action.payload.id,
        )
      ) {
        state.selectedProducts.push(action.payload);
      }
    },
    addProductToAvailable: (state, action: PayloadAction<Product>) => {
      state.availableProducts.push(action.payload);
    },
    removeProductFromSelected: (state, action: PayloadAction<Product>) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
});

export const {
  addProductToAvailable,
  addProductToSelected,
  removeProductFromSelected,
} = productsSlice.actions;

export const selectProducts = (state: RootState) => {
  return {
    selectAvailableProducts: state.products.availableProducts,
    selectSelectedProducts: state.products.selectedProducts,
  };
};
export const selectSelectedProducts = (state: RootState) =>
  state.products.selectedProducts;

export const selectA = createSelector(
  [selectSelectedProducts],
  (selectProducts) => selectProducts,
);

export default productsSlice.reducer;
