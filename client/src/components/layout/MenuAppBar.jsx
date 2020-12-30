import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Avatar } from '@material-ui/core';
import { StyleLink } from '../common/common';


export const StyleAppBar = withStyles((theme) => ({
  root: {
    maxWidth: '768px',
    width: '100%',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid rgba(0,0,0,.08)',
    boxShadow: 'none',
    backgroundColor: '#FAFAFA',
  },
}))(AppBar);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  brandbtn: {
    flexGrow: 1,
    fontSize: '1.2rem',
  },
  iconcircle: {
    width: '30px',
    height: '30px',
  }
}));


export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null); // 프로필 부메뉴
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <StyleAppBar position="fixed" color="inherit">
        <Toolbar variant="dense">
          <Box className={classes.title}>
          {/* <Typography className={classes.title} noWrap> */}
            <StyleLink href="/" underline="none" color="inherit" className={classes.brandbtn}>VIOLET</StyleLink>
          {/* </Typography> */}
          </Box>
          {
            auth ? (
              <Box>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar alt="Remy Sharp" src=""  className={classes.iconcircle} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                  keepMounted
                  transformOrigin={{vertical: 'top', horizontal: 'right'}}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </Box>
            ) : 
            <Box>
              <StyleLink href="/login" underline="none" color="inherit">LOGIN</StyleLink>
            </Box>
          }
        </Toolbar>
      </StyleAppBar>
    </Box>
  );
}
