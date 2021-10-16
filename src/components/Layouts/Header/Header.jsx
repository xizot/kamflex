import React, { useState } from 'react';
import { Box, IconButton } from '@material-ui/core';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { Close, Menu } from '@material-ui/icons';
import useStyles from './Header.styles';

const navLink = [
  {
    link: '/movie',
    title: 'Movies',
  },
  {
    link: '/watched',
    title: 'Watched',
  },
  {
    link: '/watch-later',
    title: 'Watch Later',
  },
];

function Header() {
  const classes = useStyles();
  const [openSPMenu, setOpenSPMenu] = useState(false);

  const openSPMenuHandler = () => {
    setOpenSPMenu(true);
  };

  const closeSPMenuHandler = () => {
    setOpenSPMenu(false);
  };

  return (
    <AppBar color="secondary">
      <Toolbar className={classes.toolBar}>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <Box className={classes.spSection}>
              <IconButton style={{ color: '#fff' }} onClick={openSPMenuHandler}>
                <Menu />
              </IconButton>
              <Box
                className={`${classes.spSectionContent} ${openSPMenu ? classes.openSPMenu : ''}`}>
                <IconButton className={classes.iconClose} onClick={closeSPMenuHandler}>
                  <Close />
                </IconButton>
                <Box className={classes.spNavigation}>
                  {navLink.map(({ link, title }, index) => (
                    <NavLink
                      key={index}
                      to={link}
                      className={classes.navLink}
                      activeClassName={classes.navLinkActive}
                      onClick={closeSPMenuHandler}>
                      {title}
                    </NavLink>
                  ))}
                </Box>
              </Box>
            </Box>

            <Link to="/" className={classes.logo}>
              PhimChua
            </Link>
          </Box>

          <Box marginLeft={2} className={classes.desktopSection}>
            {navLink.map(({ link, title }, index) => (
              <NavLink
                key={index}
                to={link}
                className={classes.navLink}
                activeClassName={classes.navLinkActive}
                onClick={closeSPMenuHandler}>
                {title}
              </NavLink>
            ))}
          </Box>
        </Box>
        <Box>
          <Link to="/login">
            <Button color="primary" variant="contained">
              Login
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
