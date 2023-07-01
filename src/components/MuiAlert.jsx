import React from 'react'
import { Stack,Alert,AlertTitle, Button } from '@mui/material';
const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error' sx={{width:'150px'}}>this is error</Alert>
        <Alert severity='warning'>this is warning</Alert>
        <Alert severity='info'>this is info</Alert>
        <Alert severity='success'>this is success</Alert>


        
        <Alert variant='outlined' severity='error'>this is error</Alert>
        <Alert variant='outlined' severity='warning'>this is warning</Alert>
        <Alert variant='outlined' severity='info'>this is info</Alert>
        <Alert variant='outlined' severity='success'>this is success</Alert>

        <Alert variant='filled' severity='error'>this is error</Alert>
        <Alert variant='filled' severity='warning'>this is warning</Alert>
        <Alert variant='filled' severity='info'>this is info</Alert>
        <Alert variant='filled' severity='success'>this is success</Alert>

        <Alert severity='error'><AlertTitle>Error</AlertTitle>this is error</Alert>
        <Alert severity='warning'> <AlertTitle>Warning</AlertTitle>this is warning</Alert>
        <Alert severity='info'><AlertTitle>Info</AlertTitle>this is info</Alert>
        <Alert severity='success'><AlertTitle>Success</AlertTitle>this is success</Alert>

        <Alert severity='error' onClose={()=>{alert('closed')}}><AlertTitle>Error</AlertTitle>this is error</Alert>
        <Alert severity='warning' onClose={()=>{alert('closed')}}> <AlertTitle>Warning</AlertTitle>this is warning</Alert>
        <Alert severity='info' onClose={()=>{alert('closed')}} action={
            <Button color='inherit' size='small'>Undo</Button>
        }><AlertTitle>Info</AlertTitle>this is info</Alert>
        <Alert severity='success' onClose={()=>{alert('closed')}} sx={{width:'300px',marginLeft: 'auto'}}><AlertTitle>Success</AlertTitle>this is success</Alert>

        
    </Stack>
  )
}

export default MuiAlert;
