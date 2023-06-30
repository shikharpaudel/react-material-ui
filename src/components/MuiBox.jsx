import React from 'react'
import { Box,Stack,Divider } from '@mui/material'
import { Height } from '@mui/icons-material'
const MuiBox = () => {
  return (
    <Stack spacing={10} direction='row' sx={{border:'1px solid'}} divider = {<Divider orientation='vertical' flexItem/>}>
    <Box sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
      color: 'white',
      height: '250px',
      width:'250px',
      '&:hover': {
        backgroundColor: (theme) => theme.palette.primary.light,
      }
    }}>
        Shikhar Paudel
    </Box>
    <Box 
    display='flex'
    bgcolor='success.light'
    color='white'
    height='250px'
    width='250px'
  mt={2}
 
    >
  shikhar paudel
    </Box>
    </Stack>
  )
}

export default MuiBox