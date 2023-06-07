import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isLoading: false,
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    getAboutFetch: (state) => {
      state.isLoading = true
    },
    getAboutSuccess: (state, action) => {
      state.data = action.payload
      state.isLoading = false
    },
    getAboutFailure: (state) => {
      state.isLoading = false
    }
  }
})

export const { getAboutFetch, getAboutSuccess, getAboutFailure } = aboutSlice.actions;

export const selectAbout = (state) => state.about.data;
export const isAboutLoading = (state) => state.about.isLoading;

export default aboutSlice.reducer;
