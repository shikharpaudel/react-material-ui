import React,{useState} from 'react'
import { Drawer,Box,Typography, Button } from '@mui/material';

const MuiDrawer = () => {
    const[isOpen,setIsOpened] = useState(false);
    const handleClick =()=>{
        setIsOpened(true);
    }
    const handleClickk=()=>{
        setIsOpened(false);
    }
  return (
    <>
  {isOpen && <Drawer anchor='left' open={isOpen} onClose={handleClickk} >
  <Box p={2} width='250px' textAlign='center' role="presentation" >
  <Typography variant='h6' component='div'>This is Drawer</Typography>
  </Box>
   </Drawer>}
   <Button onClick={handleClick}>Click Me</Button>
   </>
  )
}

export default MuiDrawer;