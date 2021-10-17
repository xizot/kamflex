import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Requesting.styles';
function Requesting({ text }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.box}></div>
      <Typography color="primary" variant="body2">
        {text || 'Please waiting...'}
      </Typography>
    </div>
  );
}

export default Requesting;
