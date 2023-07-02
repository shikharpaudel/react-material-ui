import React,{useState} from 'react'
import {Button, Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText } from '@mui/material';
function MuiDailog() {
    const[open,setOpen] = useState(false);
    const handleClick=()=>{
        setOpen(true);
    }
    const handleNo=()=>{
        setOpen(false);
    }
  return (
    <>
    <Button onClick={handleClick}>Submit File</Button>
      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>Submit A test?</DialogTitle>
        <DialogContent>
            <DialogContentText>Are you sure to submit the quiz it cannot edit after submit.</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button>Cancel</Button>
            <Button onClick={handleNo}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MuiDailog;
