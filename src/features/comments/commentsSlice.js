import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  isLoading: false, // postId | false
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsFetch: (state, action) => {
      state.comments = state.comments.filter(comment => comment.postId !== action.payload)
      state.isLoading = action.payload
    },
    getCommentsSuccess: (state, action) => {
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
export const isCommentsLoading = (postId) => (state) => state.comments.isLoading === postId;

export default commentsSlice.reducer;
