import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import './index.scss';
import { useDispatch } from 'react-redux'
import { getAllPosts } from './feature/posts/postsSlice.js'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts('abc'));
  }, []);




  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit' className='appBar'>
        <Typography className='heading' variant='h2' align='center'>Memories</Typography>
        <img src={memories} className='image' alt="memories" height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
