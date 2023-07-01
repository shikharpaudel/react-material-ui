import React,{useState,forwardRef} from 'react'
import { Snackbar,Button,Alert,AlertProps } from '@mui/material';

const MuiSnackBar = () => {
    const [open,setOpen]=useState(false);
    const handleClick=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
      <Snackbar message="snackbar displayed successfully." autoHideDuration={2000} open={open} anchorOrigin={{ vertical:'top',horizontal:'right'
      }} onClose={handleClose}/>
      {/*  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <snackBarAlert onClose={handleClose} severity = 'success'>Form Submitted Successfully.</snackBarAlert>
       </Snackbar> */}
    </div>
  )
}

export default MuiSnackBar;
