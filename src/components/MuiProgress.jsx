import React from 'react'
import { CircularProgress, Stack, LinearProgress } from '@mui/material';
const MuiProgress = () => {
    return (
        <>
        <Stack direction="row" spacing={4} mt={2}  >
            <CircularProgress />
            <CircularProgress color='success' />
            <CircularProgress color='error' />
            <CircularProgress color='info' />
            <CircularProgress color='inherit' />
            <CircularProgress variant='determinate' value={75} />
            <CircularProgress variant='determinate' value={50} />
           

        </Stack>
         <Stack spacing={5}>
         <LinearProgress color="secondary" />
         <LinearProgress color="success" />
         <LinearProgress color="inherit" />
         </Stack>
         </>
    )
}

export default MuiProgress;
