import { alpha, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    '&  .slick-slider': {
      overflow: 'hidden',
    },

    '&  .slick-list': {
      margin: '0 -16px',
    },
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      fontSize: 25,
    },
  },
  subtitle: {
    color: '#9CABB6',
    fontWeight: 'bold',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,
    },
  },
  slider: {
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-100%)',
    zIndex: 10,
    background: alpha('#000', 0.5),

    '&:hover': {
      background: alpha(theme.palette.primary.main, 0.5),
    },
  },
  iconArrow: {
    color: 'white',
    textAlign: 'center',
  },
  arrowNext: {
    right: theme.spacing(2),
  },
  arrowPrev: {
    left: theme.spacing(2),
  },
}));
