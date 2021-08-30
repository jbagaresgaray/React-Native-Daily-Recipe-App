import {all} from 'redux-saga/effects';
import listsArea from './listsArea';
import listCategories from './listsCategories';
import listIngredients from './listsIngredients';

export default function* rootSaga() {
  yield all([listsArea(), listCategories(), listIngredients()]);
}
