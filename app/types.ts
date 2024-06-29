export type Recipe = {
  cookTimeMinutes: number;
  cuisine: string;
  id: number;
  ingredients: string[];
  image: string;
  name: string;
  tags: string[];
};

export type RecipesPayload = {
  limit: number;
  recipes: Recipe[];
  skip: number;
  total: number;
};

export type Product = {
  name: string;
  id: string;
};
