import React from 'react'
import { Stack,AppBar,Toolbar, IconButton, Typography, Button } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const MuiNavBar = () => {
  return (
    <AppBar >
        <Toolbar>
  <IconButton size='large' color='inherit' edge='start' aria-label='pokemon'>
    <CatchingPokemonIcon/>
    </IconButton>
    <Typography variant='h6' component='div' sx={{flexGrow:1}}>
   POKEMONAPP
    </Typography>
    <Stack direction='row' spacing={2}>
 <Button color='inherit' >Features</Button>
 <Button color='inherit' >Pricing</Button>
 <Button color='inherit' >About</Button>
 <Button color='inherit' >LogIn</Button>
    </Stack> 
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavBar