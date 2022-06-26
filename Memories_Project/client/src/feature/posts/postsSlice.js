import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, createPostApi } from '../../api/index.js'


export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  const { data } = await fetchPosts();
  return data;
})

export const createPost = createAsyncThunk('posts/createPost', async payload => {
  const { data } = await createPostApi(payload);
  return data;
})

const initialState = {
  posts: [],
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    })
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    })
  }
})


export const { } = postSlice.actions;

export default postSlice.reducer;

