import {call, put, fork, takeLatest} from 'redux-saga/effects';
import AppServices from '../../../api/services';
import {listsActions} from '../../slices/listSlice';

function* fetchAreas() {
  try {
    const response = yield call(AppServices.listAllArea);
    if (response?.status === 200) {
      const data = response?.data;
      yield put(listsActions.listAreaSuccess(data?.meals));
    } else {
      yield put(listsActions.listAreaFail({error: response?.data}));
    }
  } catch (e) {
    yield put(
      listsActions.listAreaFail({
        error: e,
      }),
    );
  }
}

function* watchGetFetchAreasRequest() {
  yield takeLatest(listsActions.listAreaRequest, fetchAreas);
}

export default function* root() {
  yield fork(watchGetFetchAreasRequest);
}
