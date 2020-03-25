import { takeLatest, put, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions'


function* fetchingBotsAsync() {
    console.log("inside second saga")

  yield delay(4000);
  console.log("inside second saga")

   const {data} = yield call(axios.get, '/api/robots')
  const obj = yield actions.setRobots(data)
  console.log("inside second saga", obj)

  yield put(obj)
  //const {data} = yield call(axios.get, '/api/robots')
  console.log("inside second saga")


}

export function* watchRobotFetch() {
    yield takeLatest("FETCH_BOTS", fetchingBotsAsync) 
}