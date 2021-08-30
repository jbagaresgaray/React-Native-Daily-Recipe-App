import {call, put, fork, takeLatest} from 'redux-saga/effects';
import AppServices from '../../api/services';
import {listsActions} from '../slices/listSlice';

function* fetchCategories() {
  try {
    const response = yield call(AppServices.listAllCategories);
    if (response?.status === 200) {
      const data = response?.data;
      yield put(listsActions.listCategoriesSuccess(data?.meals));
    } else {
      yield put(listsActions.listCategoriesFail({error: response?.data}));
    }
  } catch (e) {
    yield put(
      listsActions.listCategoriesFail({
        error: e,
      }),
    );
  }
}

function* watchFetchCategoriesRequest() {
  yield takeLatest(listsActions.listCategoriesRequest, fetchCategories);
}

export default function* root() {
  yield fork(watchFetchCategoriesRequest);
}
