import { all } from 'redux-saga/effects'

import postsSaga from '../features/posts/postsSaga'
import commentsSaga from '../features/comments/commentsSaga';
import userSaga from '../features/user/userSaga';

export default function* rootSaga() {
  yield all([
    postsSaga(),
    commentsSaga(),
    userSaga(),
  ]);
}