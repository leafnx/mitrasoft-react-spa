import axios from 'axios'
import { call, delay, put, takeEvery } from 'redux-saga/effects'

import { getUserSuccess, getUserFailure } from './userSlice'

const getUserData = async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  return response.data
}

const getUserPosts = async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  return response.data
}

function* getUser(action) {
  try {
    yield delay(500)

    const userId = action.payload

    const user = yield call(getUserData, userId)
    const posts = yield call(getUserPosts, userId)

    yield put(getUserSuccess({ user, posts }))
  }
  catch {
    yield put(getUserFailure())
  }
}

export default function* userSaga() {
  yield takeEvery('user/getUserFetch', getUser)
}