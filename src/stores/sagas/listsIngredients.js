import {call, put, fork, takeLatest} from 'redux-saga/effects';
import AppServices from '../../api/services';
import {listsActions} from '../slices/listSlice';

function* fetchIngredients() {
  try {
    const response = yield call(AppServices.listAllIngredients);
    if (response?.status === 200) {
      const data = response?.data;
      yield put(listsActions.listIngredientsSuccess(data?.meals));
    } else {
      yield put(listsActions.listIngredientsFail({error: response?.data}));
    }
  } catch (e) {
    yield put(
      listsActions.listIngredientsFail({
        error: e,
      }),
    );
  }
}

function* watchFetchCategoriesRequest() {
  yield takeLatest(listsActions.listIngredientsRequest, fetchIngredients);
}

export default function* root() {
  yield fork(watchFetchCategoriesRequest);
}
