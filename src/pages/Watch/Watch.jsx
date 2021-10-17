import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Plyr from 'plyr';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import useStyles from './Watch.styles';
import { useDispatch } from 'react-redux';
import { streamGetById } from '../../slices/stream.slice';
import { Box, Button, Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Requesting from '../../components/Requesting/Requesting';
let player = null;

function Watch() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const history = useHistory();
  const location = useLocation();
  const isLoading = useSelector((state) => state.stream.isLoading);

  const [videoSrc, setVideoSrc] = useState([]);
  const [error, setError] = useState(null);

  const goBackHandler = (e) => {
    e.preventDefault();
    history.push(location.state?.from || '/');
  };

  const getMovieStream = useCallback(
    async (id) => {
      setError(null);
      try {
        const response = await dispatch(streamGetById(id)).unwrap();
        setVideoSrc(response.sources);
      } catch (error) {
        setError(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getMovieStream(id);
  }, [id, getMovieStream]);

  useEffect(() => {
    if (videoSrc?.length) {
      if (player) player.destroy();
      player = new Plyr('#player');
      const videoSettings = {
        type: 'video',
        sources: videoSrc,
      };
      player.source = videoSettings;
    }
  }, [videoSrc]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.root}>
      {isLoading && <Requesting />}
      {!isLoading && error ? (
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="subtitle1" color="primary" align="center" className={classes.error}>
            {error}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIos />}
            onClick={(e) => goBackHandler(e)}
            style={{ width: 150, margin: '20px auto' }}>
            Go back
          </Button>
        </Box>
      ) : (
        <div className={classes.player}>
          <video id="player" playsInline controls width="100%" height="100%">
            <source src={videoSrc} />
          </video>
          <Button
            variant="text"
            className={classes.back}
            startIcon={<ArrowBackIos />}
            onClick={(e) => goBackHandler(e)}>
            Back
          </Button>
        </div>
      )}
    </div>
  );
}

export default Watch;
