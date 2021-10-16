import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Plyr from 'plyr';
import { useParams } from 'react-router-dom';
import useStyles from './Watch.styles';
import { useDispatch } from 'react-redux';
import { streamGetById } from '../../slices/stream.slice';
import { Button } from '@material-ui/core';
let player = null;

function Watch() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const [videoSrc, setVideoSrc] = useState([]);
  const [error, setError] = useState(null);
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
      <Button>Back</Button>
      <div className={classes.player}>
        <video id="player" playsInline controls width="100%" height="100%">
          <source src={videoSrc} />
        </video>
      </div>
    </div>
  );
}

export default Watch;
