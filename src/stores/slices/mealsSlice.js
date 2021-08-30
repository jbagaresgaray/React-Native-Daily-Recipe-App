import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoadingTodayRecipes: false,
  isLoadingRecommended: false,
  TodaysRecipes: [],
  Recommended: [],
  errorTodayRecipes: null,
  errorRecommended: null,
};

const {actions, reducer} = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    todaysRecipeRequest: state => {
      return {
        ...state,
        isLoadingTodayRecipes: true,
      };
    },
    todaysRecipeSuccess: (state, action) => {
      return {
        ...state,
        TodaysRecipes: action.payload,
        isLoadingTodayRecipes: false,
        errorTodayRecipes: null,
      };
    },
    todaysRecipeFail: (state, action) => {
      return {
        ...state,
        TodaysRecipes: [],
        isLoadingTodayRecipes: false,
        errorTodayRecipes: action.payload.error,
      };
    },
    recommendedRequest: state => {
      return {
        ...state,
        isLoadingRecommended: true,
      };
    },
    recommendedSuccess: (state, action) => {
      return {
        ...state,
        Recommended: action.payload,
        isLoadingRecommended: false,
        errorRecommended: null,
      };
    },
    recommendedFail: (state, action) => {
      return {
        ...state,
        Recommended: [],
        isLoadingRecommended: false,
        errorRecommended: action.payload.error,
      };
    },
  },
});

const selectRoot = state => state.meals;
export const mealsSelectors = {
  TodaysRecipes: createSelector(selectRoot, state => state.TodaysRecipes),
  Recommended: createSelector(selectRoot, state => state.Recommended),
  isLoadingTodayRecipes: createSelector(
    selectRoot,
    state => state.isLoadingTodayRecipes,
  ),
  isLoadingRecommended: createSelector(
    selectRoot,
    state => state.isLoadingRecommended,
  ),
};

export const mealsActions = {
  ...actions,
};

export const mealsReducer = reducer;
