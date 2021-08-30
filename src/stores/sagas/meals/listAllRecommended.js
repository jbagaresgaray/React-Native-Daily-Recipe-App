import {call, put, fork, takeLatest} from 'redux-saga/effects';
import AppServices from '../../../api/services';
import {mealsActions} from '../../slices/mealsSlice';

function* fetchAllMeals(request) {
  const data = request.payload;
  try {
    const response = yield call(AppServices.listAllMealsByFirstLetter, data);
    if (response?.status === 200) {
      const resp = response?.data;
      yield put(mealsActions.recommendedSuccess(resp?.meals));
    } else {
      yield put(mealsActions.recommendedFail({error: response?.data}));
    }
  } catch (e) {
    yield put(
      mealsActions.recommendedFail({
        error: e,
      }),
    );
  }
}

function* watchFeatchAllMealsRequest() {
  yield takeLatest(mealsActions.recommendedRequest, fetchAllMeals);
}

export default function* root() {
  yield fork(watchFeatchAllMealsRequest);
}
