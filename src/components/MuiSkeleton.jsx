import React,{useState,useEffect} from 'react';
import { Stack,Skeleton,Box, Avatar, Typography } from '@mui/material';
const MuiSkeleton = () => {
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[])
  return (
   <Box sx={{width:'250px',mt:'2rem'}}>
  {loading ?(
    <Skeleton variant='rectangular' width={256} height={144} animation = 'wave'/>
  ):(
    <img src='https://picsum.photos/256/144' alt='logo'/>
  )}
  <Stack direction='row' spacing={1} sx={{width:'100%',mt:'2rem'}}>
  {
    loading ? (
        <Skeleton variant='circular' width={40} height={40} animation = 'wave'/>
    ):(
        <Avatar>V</Avatar>
    )
  }
  <Stack sx={{width:'80%'}}>
    {
        loading ? (
            <>
            <Typography variant='body1'>
            <Skeleton variant='text' animation=  'wave' width= '100%'/>
            </Typography>
             <Typography variant='body2'>
             <Skeleton variant='text' animation=  'wave' width= '100%'/>
             </Typography>
             </>
        ):(
            <>
            <Typography variant='body1'>
           React MUI tutorial
            </Typography>
            </>
        )
    }
  </Stack>
  </Stack>
   </Box>
  )
}

export default MuiSkeleton
