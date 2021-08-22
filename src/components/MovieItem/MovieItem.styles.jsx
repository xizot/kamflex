import { alpha, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: (props) => props.height || 150,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        '& $hoverSection': {
          display: 'block',
        },
      },
    },
    [theme.breakpoints.up('xs')]: {
      height: (props) => props.height - 30 || 120,
    },
  },
  front: {
    opacity: '1 !important',
  },
  frontImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
  },
  frontTitle: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 1,
    color: '#fff',
    background: alpha('#000', 0.3),
    padding: theme.spacing(1),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  frontGenres: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1),
    zIndex: 10,
    padding: theme.spacing(0.2, 0.5),
    borderRadius: theme.shape.borderRadius,
    background: alpha('#000', 0.3),
    '&:hover': {
      opacity: 1,
      background: alpha('#fff', 1),
    },
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  genre: {
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
    fontSize: 12,
    '&:hover': {
      fontWeight: 'bold',
    },
  },
  hoverSection: {
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 300,
    background: theme.palette.secondary.main,
    transform: 'translate(-50%,-50%)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.4)',
    zIndex: 10000,
    overflow: 'hidden',
    display: 'none',
    [theme.breakpoints.down('1300')]: {
      width: 250,
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  description: {
    color: '#fff',
    fontSize: 13,
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  image: {
    height: 150,
    width: '100%',
    objectFit: 'cover',
  },
  playButton: {
    background: '#fff',
    width: 40,
    height: 40,
    padding: theme.spacing(1),
    transition: 'all .5s',
    '&:hover': {
      background: theme.palette.primary.main,
      '& $playIcon': {
        color: '#fff',
      },
    },
    [theme.breakpoints.down('md')]: {
      height: 35,
      width: 35,
    },
  },
  actions: {
    padding: theme.spacing(0.5, 0, 1),
  },
  playIcon: {
    [theme.breakpoints.down('md')]: {
      height: 20,
      width: 20,
    },
  },
  actionIcon: {
    marginRight: theme.spacing(1),
  },
}));
