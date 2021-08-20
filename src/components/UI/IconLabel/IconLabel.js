import { IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '&:hover $label': {
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      height: 30,
      width: 30,
      padding: 10,
    },
  },
  label: {
    display: 'none',
    position: 'absolute',
    top: 0,
    minWidth: 'max-content',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    background: 'white',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.2, 1),
    color: '#000',
    border: '1px solid #777',
    '&:before': {
      content: "''",
      position: 'absolute',
      bottom: 1,
      left: '50%',
      display: 'block',
      transform: 'translate(-50%,100%)',
      borderWidth: 6,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderTopColor: '#fff',
      zIndex: 2,
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: '50%',
      display: 'block',
      transform: 'translate(-50%,100%)',
      borderWidth: 7,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderTopColor: '#777',
      zIndex: 1,
    },
  },
  icon: {
    color: (props) => (props?.color ? props?.color : '#ddd'),
    [theme.breakpoints.down('sm')]: {
      height: 20,
      width: 20,
    },
  },
}));

function IconLabel({ Icon, label, onClick, size, color, ...props }) {
  const classes = useStyles({ color });

  return (
    <IconButton className={classes.root} onClick={onClick} size={size} {...props}>
      <Typography variant="caption" className={classes.label}>
        {label}
      </Typography>
      <Icon className={classes.icon} />
    </IconButton>
  );
}

export default IconLabel;
