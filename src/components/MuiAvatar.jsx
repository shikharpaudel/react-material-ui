import React from 'react'
import { Avatar,AvatarGroup,Stack, Typography } from '@mui/material';
function MuiAvatar() {
  return (
    <Stack spacing={4}>
        <Typography variant='h4' color='error'>This Is Avatar</Typography>
        <Stack direction='row' spacing={1}>
            
            <Avatar sx={{bgcolor:'primary.light'}}>SP</Avatar>
            <Avatar sx={{bgcolor:'primary.main'}}>AG</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>AA</Avatar>
            <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'/>
            <Avatar sx={{bgcolor:'primary.light'}}>SP</Avatar>
            <Avatar sx={{bgcolor:'primary.light'}}>AG</Avatar>
            <Avatar sx={{bgcolor:'primary.main'}}>AA</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'/>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'/>
            </AvatarGroup>
            <AvatarGroup>
            <Avatar sx={{bgcolor:'primary.main',width:'48px',height:'48px'}}>AA</Avatar>
            <Avatar sx={{width:'48px',height:'48px'}} src='https://randomuser.me/api/portraits/women/79.jpg'/>
            </AvatarGroup>
            </Stack>
        </Stack>

    </Stack>
  )
}

export default MuiAvatar;