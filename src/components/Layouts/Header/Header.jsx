import React, { useState } from 'react';
import { Box, IconButton } from '@material-ui/core';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Close, Menu, ExitToApp, Person } from '@material-ui/icons';
import useStyles from './Header.styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../slices/auth.slice';
import InputSearch from '../../InputSearch/InputSearch';

const navLink = [
  {
    link: '/movie',
    title: 'Movies',
    protect: false,
  },
  {
    link: '/my-list',
    title: 'My List',
    protect: true,
  },
  {
    link: '/history',
    title: 'History',
    protect: true,
  },
];

function Header() {
  const classes = useStyles();
  const [openSPMenu, setOpenSPMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  const openSPMenuHandler = () => {
    setOpenSPMenu(true);
  };

  const closeSPMenuHandler = () => {
    setOpenSPMenu(false);
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());

    history.push('/login');
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
                  {navLink.map(({ link, title, protect }, index) => {
                    return !protect ? (
                      <NavLink
                        key={index}
                        to={link}
                        className={classes.navLink}
                        activeClassName={classes.navLinkActive}
                        onClick={closeSPMenuHandler}>
                        {title}
                      </NavLink>
                    ) : (
                      isAuthenticated && (
                        <NavLink
                          key={index}
                          to={link}
                          className={classes.navLink}
                          activeClassName={classes.navLinkActive}
                          onClick={closeSPMenuHandler}>
                          {title}
                        </NavLink>
                      )
                    );
                  })}
                </Box>
              </Box>
            </Box>

            <Link to="/" className={classes.logo}>
              KamFlex
            </Link>
          </Box>

          <Box marginLeft={2} className={classes.desktopSection}>
            {navLink.map(({ link, title, protect }, index) => {
              return !protect ? (
                <NavLink
                  key={index}
                  to={link}
                  className={classes.navLink}
                  activeClassName={classes.navLinkActive}
                  onClick={closeSPMenuHandler}>
                  {title}
                </NavLink>
              ) : (
                isAuthenticated && (
                  <NavLink
                    key={index}
                    to={link}
                    className={classes.navLink}
                    activeClassName={classes.navLinkActive}
                    onClick={closeSPMenuHandler}>
                    {title}
                  </NavLink>
                )
              );
            })}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box marginRight={4}>
            <InputSearch />
          </Box>
          {!isAuthenticated ? (
            <Link to="/login">
              <Button color="primary" variant="contained">
                Login
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/account">
                <IconButton className={classes.circleIcon}>
                  <Person />
                </IconButton>
              </Link>
              <Button color="primary" variant="contained" onClick={logoutHandler}>
                Logout <ExitToApp style={{ marginLeft: 5 }} />
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
