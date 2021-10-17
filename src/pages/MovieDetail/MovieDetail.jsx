import { Box, Button, Container, FormControl, TextField, Typography } from '@material-ui/core';
import { AccessTime, PlayArrow, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';
import useStyles from './MovieDetail.styles';
import Plyr from 'plyr';
import CommentItem from '../../components/CommentItem/CommentItem';
import Requesting from '../../components/Requesting/Requesting';
import { useDispatch } from 'react-redux';
import { detailGetById } from '../../slices/detail.slice';
import { timeToClient } from '../../utils/converter';
import { useSelector } from 'react-redux';
import { getRating } from '../../slices/rating.slice';

let player = null;
function MovieDetail() {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  const [error, setError] = useState(null);
  const [detail, setDetail] = useState({});
  const isLoading = useSelector((state) => state.detail.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [kind, setKind] = useState(0);

  const getRatingHandler = useCallback(
    async (id) => {
      try {
        const response = await dispatch(
          getRating({
            media: id,
          })
        ).unwrap();
        console.log('🚀 ~ file: MovieDetail.jsx ~ line 37 ~ response', response);

        setKind(response.kind);
      } catch (error) {
        console.log('🚀 ~ file: MovieDetail.jsx ~ line 33 ~ getRatingHandler ~ error', error);
      }
    },
    [dispatch]
  );

  const getDetailHandler = useCallback(
    async (id) => {
      try {
        const response = await dispatch(detailGetById(id)).unwrap();
        setDetail(response);
      } catch (error) {
        setError(error);
      }
    },
    [dispatch]
  );

  const playHandler = () => {
    history.push(`/watch/${id}`, { from: `/detail/${id}` });
  };

  useEffect(() => {
    getDetailHandler(id);
  }, [id, getDetailHandler]);

  useEffect(() => {
    if (isAuthenticated) {
      getRatingHandler(id);
    }
  }, [id, getRatingHandler, isAuthenticated]);

  useEffect(() => {
    const trailers = detail.videos;
    if (trailers?.length) {
      if (player) player.destroy();
      const playerDOM = document.getElementById('player');

      player = new Plyr(playerDOM);
      const videoSettings = {
        type: 'video',
        sources: [
          {
            src: trailers[0].key,
            provider: trailers[0].site?.toLowerCase(),
          },
        ],
      };
      player.source = videoSettings;
    }
  }, [detail]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.root}>
      {isLoading && <Requesting />}
      {!isLoading && error ? (
        <Typography variant="subtitle1" color="primary" align="center" className={classes.error}>
          {error}
        </Typography>
      ) : (
        <Container>
          <Box display="flex" flexWrap="wrap">
            <img className={classes.poster} src={detail.posterUrl} alt="" />
            <Box className={classes.detail}>
              <Typography variant="h3" className={classes.title}>
                {detail.title}
              </Typography>
              <Box className={classes.review} display="flex" flexWrap="wrap" alignItems="center">
                <Box className={classes.release} display="flex" flexWrap="wrap" alignItems="center">
                  <AccessTime fontSize="small" className={classes.iconTime} />
                  <Typography variant="body1" className={classes.time}>
                    {detail.releaseDate && timeToClient(detail.releaseDate)}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" className={classes.moreInfo}>
                Total views: {detail.views}
              </Typography>
              <Typography variant="body2" className={classes.moreInfo}>
                Genres:{' '}
                {detail.genres?.map((item, index) => (
                  <Link
                    key={index}
                    to={`/movie?genre=${item.name?.toLowerCase()}`}
                    className={classes.genre}>
                    {index === 0 ? ' ' : ', '}
                    {item.name}
                  </Link>
                ))}
              </Typography>
              <Typography variant="body2" className={classes.moreInfo}>
                Producers: {detail.producers?.map((item) => item.name).join(', ')}
              </Typography>
              <Box className={classes.actions}>
                <Button className={classes.rating} startIcon={<ThumbUpAlt />}>
                  (0)
                </Button>
                <Button className={classes.rating} startIcon={<ThumbDownAlt />}>
                  (0)
                </Button>
              </Box>
              <Box className={classes.actions}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnPlay}
                  startIcon={<PlayArrow />}
                  onClick={playHandler}>
                  Play
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className={classes.content}>
            <Box className={`${classes.section} ${classes.description}`} data-aos="fade-up">
              <Typography variant="body1" className={classes.descriptionContent}>
                {detail.overview}
              </Typography>
            </Box>
            <Box className={classes.section} data-aos="fade-up">
              <Typography variant="h5" color="primary" className={classes.subtitle}>
                Offical Trailer:
              </Typography>
              <div className={classes.playerWrapper}>
                <video id="player" playsInline controls />
              </div>
            </Box>
            <Box className={classes.section} data-aos="fade-up">
              <Typography variant="h5" color="primary" className={classes.subtitle}>
                Comment
              </Typography>
              <Box>
                <Box className={classes.commentBox}>
                  <form>
                    <FormControl fullWidth>
                      <TextField
                        multiline
                        rows={4}
                        variant="filled"
                        placeholder="What do you thing?"
                        className={classes.inputComment}
                      />
                    </FormControl>
                  </form>
                  <Button variant="contained" color="primary" className={classes.btnPostComment}>
                    Post
                  </Button>
                </Box>
                <ul>
                  <li>
                    <CommentItem
                      loggedId="1"
                      userId="1"
                      avatar="https://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                      name="Agustin Ortiz"
                      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
                      createdAt="20m ago"
                    />
                  </li>
                  <li>
                    <CommentItem
                      avatar="https://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                      name="Agustin Ortiz"
                      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
                      createdAt="20m ago"
                    />
                  </li>
                  <li>
                    <CommentItem
                      avatar="https://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                      name="Agustin Ortiz"
                      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
                      createdAt="20m ago"
                    />
                  </li>
                </ul>
              </Box>
              <ButtonLoading fullWidth={false} style={{ width: 200, margin: '0 auto' }}>
                Load more
              </ButtonLoading>
            </Box>
          </Box>
          <Box className={classes.suggestion} data-aos="fade-up"></Box>
        </Container>
      )}
    </div>
  );
}

export default MovieDetail;
