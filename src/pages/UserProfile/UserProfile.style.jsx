import { alpha, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: '20vh',
    paddingBottom: '20vh',
    background: theme.palette.secondary.main,
  },
  content: {
    margin: '0 auto 0',
    padding: theme.spacing(4, 3),
    width: '900px',
    backgroundColor: '#edf3f8',
  },
  info: {
    display: 'flex',
  },

  title: {
    textTransform: 'uppercase',
    color: '#000',
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1,
    marginBottom: theme.spacing(4),
  },
  btn: {
    display: 'flex',
    margin: 'auto',
    background: '#6f6f6f',
    color: '#fff',
    '&.MuiButton-containedPrimary)': {
      display: 'none',
    },
    marginTop: theme.spacing(2),
    '& .MuiButton-containedPrimary:hover': {
      opacity: '1 !important',
    },
    '&:hover': {
      backgroundColor: '#6f6f6f',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    width: '38vh',
    textTransform: 'none',
  },

  form: {
    borderRadius: 10,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2),
    },
    '& .MuiFilledInput-underline:before': {
      display: 'none',
    },
    marginTop: theme.spacing(8),
  },

  formControl: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    '& .MuiFilledInput-underline:after': {
      display: 'none',
    },
    '& .MuiInput-underline:after': {
      display: 'none',
    },
    '& .MuiInput-underline:before': {
      display: 'none',
    },
  },

  textField: {
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    '& .MuiFilledInput-underline:after': {
      display: 'none',
    },
    marginTop: theme.spacing(1),
    width: '350px',
    marginLeft: 'auto',
    padding: theme.spacing(1, 1),
  },

  textHelper: {
    marginLeft: 'auto',
    marginTop: theme.spacing(1),
    color: '#676767',
    '& > a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
    '&:not(:last-child)': {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(8),
    },
    fontWeight: '600',
  },

  link: {
    display: 'flex',
    marginTop: theme.spacing(1),
    width: '350px',
    marginLeft: 'auto',
    padding: theme.spacing(1, 1),
    textDecoration: 'underline',
    justifyContent: 'flex-end',
  },

  options: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },

  optionItem: {
    border: '1px solid #d0d0d0',
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0.5),
    '&:hover': {
      backgroundColor: '#6f6f6f',
    },
  },

  optionItemIcon: {
    color: '#d0d0d0',
    fontSize: 10,
    display: 'flex',
    alignItems: 'center',
  },

  errorMessage: {
    fontSize: 11,
    color: 'red',
    fontWeight: 'normal',
  },
}));
