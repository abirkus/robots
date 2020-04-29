import { takeLatest, put, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions'


function* fetchingBotsAsync() {
  const {data} = yield call(axios.get, '/api/robots')
  const obj = yield actions.setRobots(data)
  yield put(obj)
}

function* fetchingProjectsAsync() {
  const {data} = yield call(axios.get, '/api/projects')
  const obj = yield actions.setProjects(data)

  yield put(obj)

}

function* addRobotAsync(robot) {
  console.log("adding robot", robot)
  const {data} = yield call(axios.post, '/api/robots', robot.value)
  const obj = yield actions.addRobot(data)
  yield put(obj)
}

function* removeRobotAsync(actionObj) {
  const id = Number(actionObj.value)
  console.log("removing robot", id)
  yield call(axios.delete, `/api/robots/${id}`)
  const obj = yield actions.removeRobot(id)
  console.log("yield put obj", obj)
  yield put(obj)
}

// export const addRobotThunk = robot => {
// 	return async dispatch => {
// 		try {

// 			dispatch(addRobot(data));
// 		} catch (err) {
// 			console.log('Error', err);
// 		}
// 	};
// };




// export const clearRobotsThunk = () => dispatch => {
// 	try {
// 		dispatch(clearRobots([]))
// 	} catch (err) {
// 		console.error(err)
// 	}
// }


export function* mySaga() {
    yield takeLatest("FETCH_BOTS", fetchingBotsAsync)
    yield takeLatest("FETCH_PROJECTS", fetchingProjectsAsync)
    yield takeLatest("ADD_BOT", addRobotAsync)
    yield takeLatest("REMOVE_BOT", removeRobotAsync)
}
