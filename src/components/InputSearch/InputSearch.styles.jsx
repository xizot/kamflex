import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    // backgroundColor: '#fff',
    position: 'relative',
    transition: 'width .5s',
  },
  isOpen: {
    width: 250,
    border: '1px solid #fff',
  },
  isClose: { width: 40 },
  searchInput: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: theme.spacing(1),
    color: '#fff',
    '& input': {
      color: '#fff',
    },
    '& .MuiFilledInput-underline:after': {
      display: 'none',
    },
    '& .Mui-focused:after': {
      display: 'none',
    },
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: '50%',
    width: 40,
    transform: 'translateY(-50%)',
  },
}));
