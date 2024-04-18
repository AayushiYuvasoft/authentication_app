import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { ListItemIcon } from '@mui/material';
import { navigation } from '../../common/data';



export default function Sidebar() {
  const navigate = useNavigate('')
  return (
    // <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <div className='app-sidebar'>
      <Divider />
      <List>
        {navigation?.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => { navigate(text.path) }}>
              <ListItemIcon>
                <text.icon />
              </ListItemIcon>
              <ListItemText primary={text.pathName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}