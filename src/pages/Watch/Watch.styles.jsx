import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: 'calc(100vh - 64px)',
    marginTop: 64,
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      minHeight: 'calc(100vh - 48px)',
      marginTop: 48,
      display: 'flex',
      alignItems: 'center',
    },
  },
  player: {
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '100%',
      paddingTop: '56.25%',
      height: 'auto',
    },
  },
  back: {
    color: '#fff',
    zIndex: 99,
    position: 'absolute',
    left: theme.spacing(5),
    top: theme.spacing(2),
    transition: '0.5s',
    opacity: 1,
  },
  error: {
    paddingTop: 100,
  },
}));
