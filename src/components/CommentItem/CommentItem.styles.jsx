import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2.5),
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: theme.shape.borderRadius,
    background: '#0d1117',
    padding: 3,
    boxShadow: '0px 2px 8px rgba(255,255,255,.1)',
  },
  content: {
    width: 'calc(100% - 80px)',
    position: 'relative',
    padding: theme.spacing(2),
    background: '#0d1117',
    borderRadius: theme.shape.borderRadius,
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 15,
      left: 0,
      display: 'block',
      transform: 'translateX(-100%)',
      borderWidth: 10,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: '#0d1117',
      zIndex: 2,
    },
  },
  top: {
    display: 'flex',
    borderBottom: '1px solid #252b31',
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  name: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(0.5),
    },
  },
  auth: {
    background: theme.palette.primary.main,
    height: 'fit-content',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.1, 0.3),
    marginRight: theme.spacing(1),
  },
  createdAt: {
    opacity: 0.7,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
  },
  actions: {
    marginLeft: theme.spacing(1),
    display: 'flex',
  },
  bottom: {},
  editComment: {},
  inputEditComment: {
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    '& .MuiFilledInput-underline:after': {
      display: 'none',
    },
  },
}));
