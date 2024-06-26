import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './SideLayout';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const authToken = localStorage.getItem("authToken")
  const navigate = useNavigate()
  // const [toggleSidebar, setToggleSidebar] = React.useState(false)

  // const handleToggle = () => {
  //   setToggleSidebar(true)
  // }

  const Logout = () => {
    localStorage.removeItem("authToken")
    navigate("/")
  }

  const handleLogout = () => {
    Logout()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>{authToken ? "Logout" : "Login"}</Button>
        </Toolbar>
      </AppBar>

    </Box>
  );
}