import React from 'react'
import { Box,List,ListItem,ListItemAvatar,ListItemText } from '@mui/material';
const MuiList = () => {
  return (
    <Box width={400} sx={{bgcolor:"#818589"}}>
<List>
    <ListItem>
        <ListItemText primary = "this is list -1" secondary="secondary text of list item"/>
    </ListItem>
    <ListItem>
        <ListItemText primary = "this is list -2" secondary="secondary text of list item"/>
    </ListItem>
    <ListItem>
        <ListItemText primary = "this is list -3" secondary="secondary text of list item"/>
    </ListItem>
</List>
    </Box>
  )
}

export default MuiList;