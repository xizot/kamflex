import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: 'calc(100vh - 64px)',
    marginTop: 64,
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
}));
