import React from 'react'
import { Stack,Button,ButtonGroup } from '@mui/material';


const MuiButtonGroup = () => {
  return (
    <Stack spacing={2}>
    <Stack direction = 'row' >
   <ButtonGroup variant = 'contained' size = "large" color = "secondary">
    <Button onClick={()=>{alert('left clicked.')}}>Left</Button>
    <Button onClick={()=>{alert('Center clicked.')}}>Center</Button>
    <Button onClick={()=>{alert('Right clicked.')}}>Right</Button>
   </ButtonGroup>
   </Stack>
   <Stack direction='row'>
   <ButtonGroup variant = 'contained' orientation = 'vertical' size = 'medium' color = "secondary" >
    <Button onClick={()=>{alert('left clicked.')}} aria-label='left click'>Left</Button>
    <Button onClick={()=>{alert('Center clicked.')}}>Center</Button>
    <Button onClick={()=>{alert('Right clicked.')}}>Right</Button>
   </ButtonGroup>
   </Stack>
    </Stack>
  )
}

export default MuiButtonGroup