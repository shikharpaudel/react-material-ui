import React,{useEffect, useState} from 'react'
import { Box,FormControlLabel,Switch } from '@mui/material'
const MuiSwitch = () => {
    const [checked,setChecked] = useState(false);
    useEffect(()=>{
        console.log(checked);
    },[checked])
    const handleChange=(e)=>{
      setChecked(e.target.checked);
    }
  return (
  <Box>
    <FormControlLabel label = "Dark Mode" control = {<Switch color='secondary' size='small'/>} checked = {checked} onChange={handleChange}/>
  </Box>
  )
}

export default MuiSwitch