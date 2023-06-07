import { combineReducers } from "@reduxjs/toolkit"

import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'
import userReducer from '../features/user/userSlice'
import aboutReducer from '../features/about/aboutSlice'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
  about: aboutReducer,
})

export default rootReducer