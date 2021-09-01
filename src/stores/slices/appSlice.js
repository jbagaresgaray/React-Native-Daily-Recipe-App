import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  language: null,
  pushNotification: false,
  emailNotification: false,
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
  },
});

const selectRoot = state => state.app;
export const appSelectors = {
  language: createSelector(selectRoot, state => state.language),
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
