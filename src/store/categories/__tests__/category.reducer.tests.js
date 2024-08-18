import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from "../category.reducer";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "../category.action";

describe("Category Reducer tests", () => {
  test("fetchCategoriesStart action", () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };
    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
    ).toEqual(expectedState);
  });

  test("fetchCategoriesSuccess", () => {
    const mockCategories = [
      {
        title: "mens",
        imageUrl: "test 1",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "test 2",
        items: [
          { id: 3, name: "Product 3" },
          { id: 4, name: "Product 4" },
        ],
      },
    ];
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockCategories,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(mockCategories)
      )
    ).toEqual(expectedState);
  });
  expect("fetchCategoriesFailed", () => {
    const mockError = new Error("Error fetching categories");

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesFailure(mockError)
      )
    ).toEqual(expectedState);
  });
});
