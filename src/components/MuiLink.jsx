import React from 'react'
import { Link, Stack } from '@mui/material';
const MuiLink = () => {
  return (
    <Stack direction='row' spacing={4}>
         <Link href='#'>Links</Link>
        <Link href='#'>With Out Props</Link>
        <Link href='#' variant='h5' underline='hover' color='secondary'>Underline When Hover</Link>
        <Link href='#' variant='h5' underline='none' color='secondary'>Underline None</Link>
    </Stack>
  )
}

export default MuiLink;