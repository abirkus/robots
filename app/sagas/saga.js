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
  console.log('adding robot', robot)
  const {data} = yield call(axios.post, '/api/robots', robot.value)
  const obj = yield actions.addRobot(data)
  yield put(obj)
}

function* removeRobotAsync(actionObj) {
  const id = Number(actionObj.value)
  console.log('removing robot', id)
  yield call(axios.delete, `/api/robots/${id}`)
  const obj = yield actions.removeRobot(id)
  console.log('yield put obj', obj)
  yield put(obj)
}


function* fetchingSingleRobotAsync(actionObj) {
  const {data} = yield call(axios.get, `/api/robots/${actionObj.value}`)
  console.log('data from axios', data)
  const obj = yield actions.getSingleRobot(data)
  yield put(obj)
}

function* fetchingSingleProjectAsync(actionObj) {
  const {data} = yield call(axios.get, `/api/projects/${actionObj.value}`)
  console.log('data from axios', data)
  const obj = yield actions.getSingleProject(data)
  yield put(obj)
}

function* removeProjectAsync(actionObj) {
  yield call(axios.delete, `/api/projects/${actionObj.value}`)
  const obj = yield actions.removeProject(Number(actionObj.value))
  yield put(obj)
}

function* addProjectAsync(project) {
  console.log("inside saga", project)
  const {data} = yield call(axios.post, '/api/projects', project.value)
  const obj = yield actions.addProject(data)
  yield put(obj)
}

function* updateRobotAsync(robot) {
  console.log('upodating robot - obj received', robot)
  const {data} = yield call(axios.put, `/api/robots/${robot.value.id}`, robot.value.robot)
  console.log("passing to actions", data)
  const obj = yield actions.updateRobot(data)
  yield put(obj)
}

function* updateProjectAsync(prjct) {
  console.log('upodating project - obj received', prjct)
  const {data} = yield call(axios.put, `/api/projects/${prjct.value.id}`, prjct.value.project)
  console.log("passing to actions", data)
  const obj = yield actions.updateProject(data)
  yield put(obj)
}

function* updateProjectAssignmentAsync(obj) {
  console.log('unassign project - obj received', obj)
  const proj = {
    id: obj.value.projectId,
  };
  const {data} = yield call(axios.put, `/api/robots/assignments/${obj.value.robotId}`, proj)
  const resp = yield actions.unassignProject(obj.value.projectId)
  yield put(resp)
}

function* updateRobotAssignmentAsync(obj) {

}

export function* mySaga() {
    yield takeLatest('FETCH_BOTS', fetchingBotsAsync)
    yield takeLatest('FETCH_PROJECTS', fetchingProjectsAsync)
    yield takeLatest('ADD_BOT', addRobotAsync)
    yield takeLatest('REMOVE_BOT', removeRobotAsync)
    yield takeLatest('FETCH_SINGLE_ROBOT', fetchingSingleRobotAsync)
    yield takeLatest('FETCH_SINGLE_PROJECT', fetchingSingleProjectAsync)
    yield takeLatest('DELETE_PROJECT', removeProjectAsync)
    yield takeLatest('ADD_PRJCT', addProjectAsync)
    yield takeLatest('UPDATE_BOT', updateRobotAsync)
    yield takeLatest('UPDATE_PRJCT', updateProjectAsync)
    yield takeLatest('UPDATE_PROJECT_ASSIGNMENT', updateProjectAssignmentAsync)
    yield takeLatest('UPDATE_ROBOT_ASSIGNMENT', updateRobotAssignmentAsync)
}
