import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoadingAreas: false,
  isLoadingCategories: false,
  isLoadingIngredients: false,
  Areas: [],
  Ingredients: [],
  Categories: [],
  errorAreas: null,
  errorCategories: null,
  errorIngredients: null,
};

const {actions, reducer} = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    listAreaRequest: (state, action) => {
      return {
        ...state,
        isLoadingAreas: true,
      };
    },
    listAreaSuccess: (state, action) => {
      return {
        ...state,
        Areas: action.payload,
        isLoadingAreas: false,
        errorAreas: null,
      };
    },
    listAreaFail: (state, action) => {
      return {
        ...state,
        Areas: [],
        isLoadingAreas: false,
        errorAreas: action.payload.error,
      };
    },
    listCategoriesRequest: (state, action) => {
      return {
        ...state,
        isLoadingCategories: true,
      };
    },
    listCategoriesSuccess: (state, action) => {
      return {
        ...state,
        Categories: action.payload,
        isLoadingCategories: false,
        errorCategories: null,
      };
    },
    listCategoriesFail: (state, action) => {
      return {
        ...state,
        Categories: [],
        isLoadingCategories: false,
        errorCategories: action.payload.error,
      };
    },
    listIngredientsRequest: (state, action) => {
      return {
        ...state,
        isLoadingIngredients: true,
      };
    },
    listIngredientsSuccess: (state, action) => {
      return {
        ...state,
        Ingredients: action.payload,
        isLoadingIngredients: false,
        errorIngredients: null,
      };
    },
    listIngredientsFail: (state, action) => {
      return {
        ...state,
        Ingredients: [],
        isLoadingIngredients: false,
        errorIngredients: action.payload.error,
      };
    },
  },
});

const selectRoot = state => state.lists;
export const listsSelectors = {
  Areas: createSelector(selectRoot, state => state.Areas),
  Categories: createSelector(selectRoot, state => state.Categories),
  Ingredients: createSelector(selectRoot, state => state.Ingredients),
  isLoadingAreas: createSelector(selectRoot, state => state.isLoadingAreas),
  isLoadingCategories: createSelector(
    selectRoot,
    state => state.isLoadingCategories,
  ),
  isLoadingIngredients: createSelector(
    selectRoot,
    state => state.isLoadingIngredients,
  ),
};

export const listsActions = {
  ...actions,
};

export const listsReducer = reducer;
