import { makeStyles } from '@material-ui/styles';
export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: 64,
    paddingBottom: 100,
    background: theme.palette.secondary.main,
  },
  mainvisual: {
    height: '80vh',
  },
  sliderItem: {},
  section: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
}));
