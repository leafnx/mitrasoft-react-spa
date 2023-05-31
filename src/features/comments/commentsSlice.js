import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  isLoading: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsFetch: (state, action) => {
      state.comments = state.comments.filter(comment => comment.postId !== action.payload)
      state.isLoading = true
    },
    getCommentsSuccess: (state, action) => {
      // const newComments = action.payload.filter(comment => !state.comments.some(commentOld => commentOld.id === comment.id))
      state.comments = [...state.comments, ...action.payload]
      state.isLoading = false
    },
    getCommentsFailure: (state) => {
      state.isLoading = false
    }
  }
})

export const { getCommentsFetch, getCommentsSuccess, getCommentsFailure } = commentsSlice.actions;

export const selectComments = (postId) => (state) => {
  return state.comments.comments.filter(comment => comment.postId === postId)
};

export default commentsSlice.reducer;
