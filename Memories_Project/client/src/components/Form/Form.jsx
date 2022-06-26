import './styles.scss';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createPost } from "../../feature/posts/postsSlice.js";

function Form() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost(postData));
  }

  const clear = () => { }
  return (
    <Paper className='paper'>
      <form autoComplete='off' noValidate className='from' onSubmit={handleSubmit}>

        <Typography variant='h6' className='mb10'>Creating a Memory</Typography>
        <TextField name='creator' variant='outlined' label='Creator' className='mb10' fullWidth value={postData.state} onChange={e => { setPostData(state => ({ ...state, creator: e.target.value })) }} />
        <TextField name='title' variant='outlined' label='Title' className='mb10' fullWidth value={postData.state} onChange={e => { setPostData(state => ({ ...state, title: e.target.value })) }} />
        <TextField name='message' variant='outlined' label='Message' className='mb10' fullWidth value={postData.state} onChange={e => { setPostData(state => ({ ...state, message: e.target.value })) }} />
        <TextField name='tags' variant='outlined' label='Tags' className='mb10' fullWidth value={postData.state} onChange={e => { setPostData(state => ({ ...state, tags: e.target.value })) }} />
        <div className="fileInput">
          <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className='mb10' variant='contained' color='primary' size='large' type='sumbit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>

    </Paper>
  )
}

export default Form