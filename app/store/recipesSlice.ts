import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Recipe, RecipesPayload } from '../types';
import { getData } from '../utils';

type RecipesState = {
  isLoading: boolean;
  recipesList: Recipe[];
};

const initialState: RecipesState = {
  isLoading: false,
  recipesList: [],
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const data: RecipesPayload = await getData();
    const recipesData = data.recipes;

    return recipesData as Recipe[];
  },
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setName: (state: RecipesState, action: PayloadAction<Recipe[]>) => {
      state.recipesList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipesList = action.payload;
    });
    builder.addCase(fetchRecipes.pending, (state) => {
      state.isLoading = true;
    });
  },
});

// export const selectRecipesList = (state: RootState) =>
//   state.recipes.recipesList;

export default recipesSlice.reducer;
