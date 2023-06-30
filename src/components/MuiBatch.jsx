import React from 'react'
import { Stack,Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
const MuiBatch = () => {
  return (
    <Stack direction='row' spacing={2}>
        <Badge badgeContent = {5} color='primary'>
            <MailIcon  sx={{fontSize:'40px'}} />
        </Badge>
        <Badge badgeContent = {5} color='secondary'>
            <MailIcon  sx={{fontSize:'40px'}}  />
        </Badge>
        <Badge badgeContent = {100} color='primary' max={200}>
            <MailIcon  sx={{fontSize:'40px'}} />
        </Badge>
        <Badge variant = 'dot' color='primary' invisible = {true}>
            <MailIcon  sx={{fontSize:'40px'}} />
        </Badge>
    </Stack>
  )
}

export default MuiBatch;