import React,{useState,useEffect} from 'react'
import { Stack,Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const MuiRating = () => {
    const [rating,setRating] = useState(null);
    useEffect(()=>{
        console.log({rating});
    },[rating])
    const handleChange=(event,newValue)=>{
    setRating(newValue);
    }
  return (
    <Stack spacing={2}>
        <Rating size='large' precision={0.5} value={rating} onChange={handleChange} icon = {<FavoriteIcon fontSize = 'inherit' color='error'/>} emptyIcon = {<FavoriteBorderIcon fontSize = 'inherit'/>} highlightSelectedOnly/>
    </Stack>
  )
}

export default MuiRating