import axios from 'axios'
import { call, delay, put, takeEvery } from 'redux-saga/effects'

import { getCommentsSuccess, getCommentsFailure } from './commentsSlice'

function* getComments(action) {
  try {
    yield delay(500)

    const axiosParams = { postId: action.payload }

    const response = yield call(() => (
      axios.get('https://jsonplaceholder.typicode.com/comments', {params: axiosParams})
    ))
    const comments = response.data

    yield put(getCommentsSuccess(comments))
  }
  catch {
    yield put(getCommentsFailure())
  }
}

export default function* commentsSaga() {
  yield takeEvery('comments/getCommentsFetch', getComments)
}