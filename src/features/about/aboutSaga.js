import { call, delay, put, takeEvery } from 'redux-saga/effects'

import { getAboutSuccess, getAboutFailure } from './aboutSlice'
import getAboutData from './dataApi'

function* getAbout() {
  try {
    yield delay(500)
    const about = yield call(getAboutData)

    yield put(getAboutSuccess(about))
  }
  catch {
    yield put(getAboutFailure())
  }
}

export default function* aboutSaga() {
  yield takeEvery('about/getAboutFetch', getAbout)
}