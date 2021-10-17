import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: '20vh',
    background: theme.palette.secondary.main,
  },
  section: {
    '&:nth-child(n + 6)': {
      marginBottom: theme.spacing(7),
    },
    [theme.breakpoints.down('md')]: {
      '&:nth-child(n + 4)': {
        marginBottom: theme.spacing(6),
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:nth-child(n + 3)': {
        marginBottom: theme.spacing(5),
      },
    },
    [theme.breakpoints.down('xs')]: {
      '&:nth-child(n + 2)': {
        marginBottom: theme.spacing(4),
      },
    },
  },
  pagination: {
    marginTop: theme.spacing(5),
    '& .MuiPaginationItem-root': {
      color: '#fff',
      borderColor: alpha('#fff', 0.5),
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
}));
