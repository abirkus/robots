import { takeLatest, put, delay } from 'redux-saga/effects';

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "SET_ROBOTS", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("FETCH_BOTS", ageUpAsync);
}