import {all} from 'redux-saga/effects';
import listsArea from './lists/listsArea';
import listCategories from './lists/listsCategories';
import listIngredients from './lists/listsIngredients';
import listAllTodaysRecipes from './meals/listAllTodaysRecipes';
import listAllRecommended from './meals/listAllRecommended';

export default function* rootSaga() {
  yield all([
    listsArea(),
    listCategories(),
    listIngredients(),
    listAllTodaysRecipes(),
    listAllRecommended(),
  ]);
}
