import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  language: null,
  pushNotification: false,
  emailNotification: false,
  favorites: [],
  recentlyView: [],
};

const {actions, reducer} = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return {
        ...state,
        language: action.payload,
      };
    },
    setPushNotification: (state, action) => {
      return {
        ...state,
        pushNotification: action.payload,
      };
    },
    setEmailNotification: (state, action) => {
      return {
        ...state,
        emailNotification: action.payload,
      };
    },
    setFavorite: (state, action) => {
      const meal = action.payload;
      const tmpRecents = [...state.favorites];
      if (tmpRecents) {
        const resultIndex = tmpRecents.findIndex(
          item => item.idMeal === meal.idMeal,
        );
        if (resultIndex === -1) {
          tmpRecents.push(meal);
        } else {
          tmpRecents.splice(resultIndex, 1);
        }
      } else {
        tmpRecents.push(meal);
      }

      return {
        ...state,
        favorites: tmpRecents,
      };
    },
    clearRecentlyView: state => {
      return {
        ...state,
        recentlyView: [],
      };
    },
    setRecentlyView: (state, action) => {
      const meal = action.payload;
      const tmpRecents = [...state.recentlyView];
      if (tmpRecents) {
        const resultIndex = tmpRecents.findIndex(
          item => item.meal.idMeal === meal.idMeal,
        );
        if (resultIndex === -1) {
          tmpRecents.push({
            meal,
            timestamp: new Date().toISOString(),
          });
        } else {
          tmpRecents[resultIndex] = {
            meal,
            timestamp: new Date().toISOString(),
          };
        }
      } else {
        tmpRecents.push({
          meal,
          timestamp: new Date().toISOString(),
        });
      }

      return {
        ...state,
        recentlyView: tmpRecents,
      };
    },
  },
});

const selectRoot = state => state.app;
export const appSelectors = {
  language: createSelector(selectRoot, state => state.language),
  favorites: createSelector(selectRoot, state => state.favorites),
  recentlyView: createSelector(selectRoot, state => state.recentlyView),
  pushNotification: createSelector(selectRoot, state => state.pushNotification),
  emailNotification: createSelector(
    selectRoot,
    state => state.emailNotification,
  ),
};

export const appActions = {
  ...actions,
};

export const appReducer = reducer;
