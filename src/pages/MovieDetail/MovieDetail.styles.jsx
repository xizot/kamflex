import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: '20vh',
    paddingBottom: '20vh',
    background: theme.palette.secondary.main,
  },
  poster: {
    borderRadius: theme.shape.borderRadius,
    width: 350,
    height: 'auto',
    marginRight: 50,
    maxHeight: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 250,
      marginRight: 25,
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 'auto', 2),
    },
  },
  detail: {
    color: '#fff',
    width: 'calc(100% - 400px)',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 300px)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },

  title: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  moreInfo: {
    fontWeight: 500,
    lineHeight: 1.8,
  },
  review: {
    marginBottom: theme.spacing(1),
  },
  score: {
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    borderRadius: '50%',
    padding: 10,
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: 7,
      marginRight: theme.spacing(1),
    },
  },
  iconTime: {
    marginRight: theme.spacing(0.5),
  },
  time: {
    fontWeight: 'bold',
  },
  description: {
    padding: theme.spacing(0, 20),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 7),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  content: {
    color: '#9CABB6',
    lineHeight: 1.8,
  },
}));
