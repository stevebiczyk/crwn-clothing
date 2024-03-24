import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categories) =>
  createAction("CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP", categoriesMap);
