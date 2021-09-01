import {combineReducers} from 'redux';
import {appReducer} from './slices/appSlice';
import {listsReducer} from './slices/listSlice';
import {mealsReducer} from './slices/mealsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  lists: listsReducer,
  meals: mealsReducer,
});

export default rootReducer;
