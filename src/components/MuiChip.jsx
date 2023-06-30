import React,{useState} from 'react'
import { Stack, Chip, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
const MuiChip = () => {
    const[chips,setChips]=useState(['chip 1','chip 2','chip 3']);
    const handleDelete=(chipToDelete)=>{
        const updateChips= chips.filter(chip=>chip !== chipToDelete);
   setChips(updateChips);
    }
    return (
        <Stack direction="row" spacing={2} mt={3}>
            <Chip label="Chip" color='secondary' />
            <Chip label="Chip" color='secondary' size='large' variant='outlined' avatar={<Avatar>SP</Avatar>} />
            <Chip label="Chip" color='secondary' size='large' variant='outlined' icon={<PersonIcon />} />
            <Chip label="Click me" color='secondary' size='large' variant='outlined' icon={<PersonIcon />} onClick={() => { alert('clicked') }} />
            <Chip label="Click me" color='secondary' size='large' variant='outlined' icon={<PersonIcon />} onClick={() => { alert('clicked') }} onDelete={()=>{alert('deleted')}}/>
            {
                chips.map((chip)=>(
                    <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)} color='secondary'/>
                ))
            }
        </Stack>
    )
}

export default MuiChip;
