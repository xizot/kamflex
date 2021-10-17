import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: '99999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: alpha(theme.palette.secondary.main, 0.8),
  },
  box: {
    width: '3.5em',
    height: '4em',
    border: '3px solid transparent',
    borderTopColor: theme.palette.primary.main,
    borderBottomColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    borderRadius: '50%',
    animation: '$spinStretch 2s ease infinite',
  },
  '@keyframes spinStretch': {
    '50%': {
      transform: 'rotate(360deg) scale(0.4, 0.33)',
      borderWidth: 8,
    },
    '100%': {
      transform: 'rotate(720deg) scale(1, 1)',
      borderWidth: 3,
    },
  },
}));
