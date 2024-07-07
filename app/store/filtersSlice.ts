import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type FiltersState = {
  category: string;
  range: number;
  tags: string[];
  title: string;
};

const initialState: FiltersState = {
  category: '',
  range: 9,
  tags: [],
  title: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setRange: (state, action: PayloadAction<number>) => {
      state.range = action.payload;
    },
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
    setTile: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setCategory, setRange, setTags, setTile } = filtersSlice.actions;

export const selectFilters = (state: RootState) => {
  return {
    filters: state.filters,
  };
};

export default filtersSlice.reducer;
