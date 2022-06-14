import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../../api/index.js'


export const getAllPosts = createAsyncThunk('posts/getAllPosts', async (name, thunkApi) => {
  const {data} = await fetchPosts();
  return data
})



const initialState = {
  posts: []
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
  }
})


export const { getPosts } = postSlice.actions;

export default postSlice.reducer;

