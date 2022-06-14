import './styles.scss';

import { TextField, Button, Typography, Paper } from '@mui/material'
import { useState } from 'react';
function Form() {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', });
  const handleSubmit = () => {

  }
  return (
    <Paper className='paper'>
      <form autoComplete='off' noValidate className='from' onSubmit={handleSubmit}>

        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.state} onChange={e => { setPostData(state => ({ ...state, creator: e.target.value })) }} />

      </form>

    </Paper>
  )
}

export default Form