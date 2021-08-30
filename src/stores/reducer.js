import {combineReducers} from 'redux';
import {listsReducer} from './slices/listSlice';

const rootReducer = combineReducers({
  lists: listsReducer,
});

export default rootReducer;
