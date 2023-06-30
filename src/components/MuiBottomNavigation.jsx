import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { BottomNavigation,BottomNavigationAction } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
const MuiBottomNavigation = () => {
    const[value,setValue] = useState(0);
  return (
    <BottomNavigation sx={{width:'100%',position:'fixed',bottom:0}} showLabels value={value} onChange={(event,newValue)=>{setValue(newValue)}}>
        <BottomNavigationAction label = "Home" icon= {<HomeIcon/>}/>
        <BottomNavigationAction label = "Favorite" icon= {<FavoriteIcon/>}/>
        <BottomNavigationAction label = "Profile" icon= {<PersonIcon/>}/>
        <BottomNavigationAction label = "Trending" icon= {<TrendingUpIcon/>}/>
    </BottomNavigation>
  )
}

export default MuiBottomNavigation;