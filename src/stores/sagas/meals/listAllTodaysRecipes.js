import {call, put, fork, takeLatest} from 'redux-saga/effects';
import AppServices from '../../../api/services';
import {mealsActions} from '../../slices/mealsSlice';

function* fetchAllMeals(request) {
  const data = request.payload;

  try {
    const response = yield call(AppServices.listAllMealsByFirstLetter, data);
    if (response?.status === 200) {
      const resp = response?.data;
      yield put(mealsActions.todaysRecipeSuccess(resp?.meals));
    } else {
      yield put(mealsActions.todaysRecipeFail({error: response?.data}));
    }
  } catch (e) {
    yield put(
      mealsActions.todaysRecipeFail({
        error: e,
      }),
    );
  }
}

function* watchFeatchAllMealsRequest() {
  yield takeLatest(mealsActions.todaysRecipeRequest, fetchAllMeals);
}

export default function* root() {
  yield fork(watchFeatchAllMealsRequest);
}
