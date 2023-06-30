import React from 'react'
import { Box, List, ListItem, ListItemAvatar, ListItemText, ListItemIcon, Avatar, ListItemButton,Divider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
const MuiList = () => {
    return (
        <Box width={400} sx={{ bgcolor: "#818589" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>

                        <ListItemText primary="this is list -1" secondary="secondary text of list item" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>

                        </ListItemIcon>

                        <ListItemText primary="this is list -2" secondary="secondary text of list item" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>

                        <ListItemText primary="this is list -3" secondary="secondary text of list item" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList;