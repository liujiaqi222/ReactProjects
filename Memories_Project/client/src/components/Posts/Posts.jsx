import Post from './Post/Post';
import './styles.scss';
import { useSelector } from 'react-redux';

function Posts() {
  const { posts } = useSelector(state => state.posts);
  console.log(posts)
  return (
    <>
      <h1>Post</h1>
      <Post />
      <Post />
      <Post />
    </>

  )
}

export default Posts