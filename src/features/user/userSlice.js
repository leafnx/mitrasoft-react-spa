import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  posts: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserFetch: (state) => {
      state.isLoading = true
    },
    getUserSuccess: (state, action) => {
      const { user, posts } = action.payload

      state.user = user
      state.posts = posts
      state.isLoading = false
    },
    getUserFailure: (state) => {
      state.isLoading = false
    }
  }
})

export const { getUserFetch, getUserSuccess, getUserFailure } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserPosts = (state) => state.user.posts;
export const isUserLoading = (state) => state.user.isLoading;

export default userSlice.reducer;
