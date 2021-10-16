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
  views: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    background: theme.palette.primary.main,
    minWidth: 40,
    width: 'fit-content',
    padding: theme.spacing(0.5, 0.75),
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.3)',
    zIndex: 10,
    '& > p': {
      lineHeight: 0,
      fontSize: 11,
    },
  },
  viewsIcon: {
    fontSize: 12,
    marginRight: theme.spacing(0.25),
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
    top: theme.spacing(5),
    left: theme.spacing(1),
    right: theme.spacing(1),
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
