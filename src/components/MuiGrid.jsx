import React from 'react'
import { Box,Grid,Paper } from '@mui/material'
const MuiGrid = () => {
  return (
<>
<Paper sx={{padding:'32px',my:"2rem"}} elevation={24} >
<Grid container my={3} spacing={2} >
    <Grid item xs={4}>
        <Box bgcolor="primary.light" p={2}>
            Grid 1
        </Box>
    </Grid>
    <Grid item xs={4}>
        <Box item bgcolor="primary.light" p={2}>
            Grid 2
        </Box>
    </Grid>
    <Grid item xs={4}>
        <Box item bgcolor="primary.light" p={2}>
            Grid 3
        </Box>
    </Grid>
    <Grid item xs={4}>
        <Box item bgcolor="primary.light" p={2}>
            Grid 4
        </Box>
    </Grid>
</Grid>
</Paper>
</>
  )
}

export default MuiGrid