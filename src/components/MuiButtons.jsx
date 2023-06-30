import React from 'react'
import { Stack,Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const MuiButtons = () => {
  return (
    <Stack spacing = {4}>
    <Stack spacing = {2} direction = 'row'>
        <Button variant = "text">text</Button>
        <Button variant = "contained">contained</Button>
        <Button variant = "outlined">outlined</Button>
    </Stack>
    <Stack spacing={3} direction='row'>
        <Button variant = "contained" color='primary'>Primary</Button>
        <Button variant = "contained" color='secondary'>Secondary</Button>
        <Button variant = "contained" color='success'>Success</Button>
        <Button variant = "contained" color='info'>Info</Button>
        <Button variant = "contained" color='error'>Error</Button>
        <Button variant = "contained" color='warning'>Warning</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
    </Stack>
   <Stack spacing={2} direction='row'>
    <Button  variant='contained' startIcon = {<SendIcon />} disableRipple>Send</Button>
    <Button  variant='contained' endIcon = {<SendIcon />} disableElevation>Send</Button>
   </Stack>
   <Stack spacing={2} direction='row'>
    <IconButton aria-label='send' color = 'success' size='large' onClick = {()=>{alert("send successfully")}}>
        <SendIcon />
    </IconButton>
   </Stack>
    </Stack>
  )
}

export default MuiButtons