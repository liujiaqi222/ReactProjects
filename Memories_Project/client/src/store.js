import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './feature/posts/postsSlice.js';

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
})