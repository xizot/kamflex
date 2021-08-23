import { alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
export default makeStyles((theme) => ({
  root: {
    position: 'relative',

    '& .slick-dots': {
      position: 'absolute',
      bottom: 50,
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: 1280,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),

      textAlign: 'left',
      zIndex: 2,
      '& > li': {
        marginRight: theme.spacing(3),
      },
      '& > li.slick-active $sliderPaging': {
        opacity: 1,
        background: alpha('#3e3e3e', 0.6),
        border: `2px solid #cecece`,
        '&:after': {
          opacity: 1,
        },
      },
    },
  },
  sliderPaging: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    textAlign: 'center',
    opacity: 0.6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:after': {
      opacity: 0,
      content: "''",
      position: 'absolute',
      bottom: -10,
      left: '50%',
      transform: 'translate(-50%, 100%)',
      width: 1,
      height: 27,
      background: '#cecece',
    },
  },
  sliderPagingItem: {
    fontWeight: 700,
    fontFamily: 'Archivo Black, sans-serif',
    lineHeight: 0,
    color: '#fff',
  },
  sliderItem: {
    height: 'calc(100vh - 64px)',
    minHeight: 500,
    width: '100%',
    display: 'block',
    position: 'relative',
    zIndex: 2,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    '&>img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: alpha('#000', 0.4),
      zIndex: 1,
    },
  },
  sliderInfo: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    color: 'white',
  },
  sliderTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    width: 700,
    maxWidth: '100%',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 40,
    },
  },
  sliderDescription: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    opacity: 0.7,
    marginBottom: theme.spacing(5),
    width: 700,
    maxWidth: '100%',
  },
  watchVideo: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    width: 'fit-content',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  watchVideoIcon: {
    marginRight: theme.spacing(1),
  },
  watchVideoText: {
    fontWeight: 'bold',
    letterSpacing: 1.1,
    lineHeight: 0,
  },
}));
