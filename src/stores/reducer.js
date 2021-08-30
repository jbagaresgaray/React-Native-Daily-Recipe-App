import {combineReducers} from 'redux';
import {listsReducer} from './slices/listSlice';
import {mealsReducer} from './slices/mealsSlice';

const rootReducer = combineReducers({
  lists: listsReducer,
  meals: mealsReducer,
});

export default rootReducer;
