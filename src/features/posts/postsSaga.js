import axios from 'axios'
import { call, delay, put, takeEvery } from 'redux-saga/effects'

import { getPostsSuccess, getPostsFailure } from './postsSlice'

function* getPosts() {
  try {
    yield delay(500)

    const response = yield call(() => axios.get('https://jsonplaceholder.typicode.com/posts'))
    const posts = response.data
    
    yield put(getPostsSuccess(posts))
  }
  catch {
    yield put(getPostsFailure())
  }
}

export default function* postsSaga() {
  yield takeEvery('posts/getPostsFetch', getPosts)
}