import { applyFiltersToRecipes, matchAvailableProductsToRecipe } from './utils';
import { Product, Recipe } from '../types';

const recipes: Recipe[] = [
  {
    name: 'test 1',
    ingredients: ['salt', 'pepper', 'onion'],
    cookTimeMinutes: 15,
    cuisine: 'Italian',
    id: 1,
    image: '',
    tags: ['italian', 'pizza'],
  },
  {
    name: 'test 2',
    ingredients: ['salt', 'onion', 'ham'],
    cookTimeMinutes: 35,
    cuisine: 'Italian',
    id: 2,
    image: '',
    tags: ['italian', 'pasta'],
  },
  {
    name: 'test 3',
    ingredients: ['apple', 'pepper', 'garlic'],
    cookTimeMinutes: 15,
    cuisine: 'American',
    id: 55,
    image: '',
    tags: ['american', 'pizza'],
  },
  {
    name: 'test 4',
    ingredients: ['garlic', 'salt', 'onion'],
    cookTimeMinutes: 15,
    cuisine: 'Japan',
    id: 111,
    image: '',
    tags: ['japan', 'pasta'],
  },
  {
    name: 'test 5',
    ingredients: ['ham', 'water', 'butter', 'tea', 'melon'],
    cookTimeMinutes: 15,
    cuisine: 'Polish',
    id: 100,
    image: '',
    tags: ['polish', 'pierogi'],
  },
];

describe('matchAvailableProductsToRecipe function', () => {
  test('returns empty array once available produtcs array is empty', () => {
    const availableProducts: string[] = [];

    expect(
      matchAvailableProductsToRecipe(
        0,
        recipes,
        availableProducts as unknown as Product[],
      ),
    ).toStrictEqual([]);
  });

  test('returns matched recipes based on given product array and range equals 0', () => {
    const availableProducts = [
      { name: 'salt' },
      { name: 'pepper' },
      { name: 'onion' },
    ];

    expect(
      matchAvailableProductsToRecipe(
        0,
        recipes,
        availableProducts as unknown as Product[],
      ),
    ).toStrictEqual([recipes[0]]);
  });

  test('returns matched recipes based on given product array and range equals 1', () => {
    const availableProducts = [
      { name: 'salt' },
      { name: 'pepper' },
      { name: 'onion' },
    ];

    expect(
      matchAvailableProductsToRecipe(
        1,
        recipes,
        availableProducts as unknown as Product[],
      ),
    ).toStrictEqual([recipes[0], recipes[1], recipes[3]]);
  });

  test('returns matched recipes based on given product array and range equals 2', () => {
    const availableProducts = [{ name: 'salt' }, { name: 'pepper' }];

    expect(
      matchAvailableProductsToRecipe(
        2,
        recipes,
        availableProducts as unknown as Product[],
      ),
    ).toStrictEqual([recipes[0], recipes[1], recipes[2], recipes[3]]);
  });
});

describe('applyFiltersToRecipes function', () => {
  const selectedProducts = [
    { name: 'salt' },
    { name: 'pepper' },
    { name: 'onion' },
  ] as unknown as Product[];

  test('returns matched recipes based on given filters criteria: category', () => {
    const filters = { category: 'Italian', range: 9, tags: [], title: '' };

    expect(
      applyFiltersToRecipes({ filters, recipes, selectedProducts }),
    ).toStrictEqual([recipes[0], recipes[1]]);
  });

  test('returns matched recipes based on given filters criteria: tags - test case 1 ', () => {
    const filters = { category: '', range: 9, tags: ['pizza'], title: '' };

    expect(
      applyFiltersToRecipes({ filters, recipes, selectedProducts }),
    ).toStrictEqual([recipes[0], recipes[2]]);
  });

  test('returns matched recipes based on given filters criteria: tags - test case 2 ', () => {
    const filters = {
      category: '',
      range: 9,
      tags: ['pizza', 'american'],
      title: '',
    };

    expect(
      applyFiltersToRecipes({ filters, recipes, selectedProducts }),
    ).toStrictEqual([recipes[2]]);
  });

  test('returns matched recipes based on given filters criteria: title and category ', () => {
    const filters = { category: 'Polish', range: 9, tags: [], title: 'test' };

    expect(
      applyFiltersToRecipes({ filters, recipes, selectedProducts }),
    ).toStrictEqual([recipes[4]]);
  });
});
