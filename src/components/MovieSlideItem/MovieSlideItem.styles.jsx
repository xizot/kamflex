import { alpha, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '15px 16px',
    '&:hover $hoverSection': {
      opacity: 1,
    },
  },
  top: {
    position: 'relative',
    marginBottom: theme.spacing(2),
    paddingTop: 'calc(4/3 * 100%)',
  },
  score: {
    position: 'absolute',
    top: -15,
    left: '50%',
    transform: 'translateX(-50%)',
    background: theme.palette.primary.main,
    width: 40,
    height: 30,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.3)',
    zIndex: 10,
    '& > p': {
      lineHeight: 0,
    },
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
  },
  hoverSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: alpha('#000', 0.6),
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity .4s',
  },
  genres: {
    pointerEvents: 'all',
    position: 'absolute',
    top: theme.spacing(4),
    left: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  genre: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 1,
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:not(:last-child)': {
      marginRight: theme.spacing(0.5),
    },
  },
  resolution: {
    '&>span': {},
  },
  bottom: {
    color: '#fff',
    opacity: 1,
    '&:hover $title': {
      textDecoration: 'underline',
    },
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  releaseDate: {},
}));
