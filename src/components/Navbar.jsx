
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" color="secondary" elevation={2} xs={{
        mb: 5,

    }} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/add-user">Add User</Button>
        <Button color="inherit" component={Link} to="/view-users">View Users</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
