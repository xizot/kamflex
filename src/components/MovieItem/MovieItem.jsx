import { Box, IconButton, Typography } from '@material-ui/core';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkExisting, insertMyList } from '../../slices/myList.slice';
import { getRating, rating } from '../../slices/rating.slice';
import IconLabel from '../UI/IconLabel/IconLabel';
import useStyles from './MovieItem.styles';

function MovieItem({
  id,
  title,
  image,
  description,
  genres,
  resolutions,
  height = 180,
  onlyMobile = false,
}) {
  const classes = useStyles({ height });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [kind, setKind] = useState(0);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const getRatingHandler = useCallback(
    async (id) => {
      try {
        const response = await dispatch(
          getRating({
            media: id,
          })
        ).unwrap();
        setKind(response.kind || 0);
      } catch (error) {
        console.log('🚀 ~ file: MovieDetail.jsx ~ line 39 ~ getRatingHandler ~ error', error);
      }
    },
    [dispatch]
  );
  const checkExistingHandler = useCallback(
    async (id) => {
      try {
        const response = await dispatch(
          checkExisting({
            media: id,
          })
        ).unwrap();
        setAdded(response._id ? true : false);
      } catch (error) {
        console.log('🚀 ~ file: MovieDetail.jsx ~ line 39 ~ getRatingHandler ~ error', error);
      }
    },
    [dispatch]
  );

  const insertMyListHandler = async (e, id) => {
    e.preventDefault();
    try {
      await dispatch(
        insertMyList({
          media: id,
        })
      ).unwrap();
      setAdded(true);
    } catch (error) {
      console.log('🚀 ~ file: MovieDetail.jsx ~ line 56 ~ insertMyListHandler ~ error', error);
    }
  };

  const ratingHandler = useCallback(
    async (e, id, rate) => {
      e.preventDefault();
      if (rate === kind) rate = 0;
      try {
        await dispatch(
          rating({
            media: id,
            kind: rate,
          })
        ).unwrap();
        setKind(rate);
      } catch (error) {
        console.log('🚀 ~ file: MovieDetail.jsx ~ line 57 ~ error', error);
      }
    },
    [dispatch, kind]
  );
  useEffect(() => {
    if (isAuthenticated) {
      getRatingHandler(id);
      checkExistingHandler(id);
    }
  }, [id, isAuthenticated, checkExistingHandler, getRatingHandler]);
  return (
    <Box boxShadow={6} className={`${classes.root} ${onlyMobile ? classes.onlyMobile : ''}`}>
      {/* front */}
      <Box display="flex" alignItems="center" flexWrap="wrap" className={classes.frontGenres}>
        {genres &&
          genres.map((genre, index) => (
            <Link to={`/movie?genre=${genre?.toLowerCase()}`} key={index} className={classes.genre}>
              {genre}
              {index < genres.length - 1 && ', '}
            </Link>
          ))}
      </Box>
      {/* hover */}
      <Link to={`/detail/${id}`} className={classes.front}>
        <img
          src={image || process.env.PUBLIC_URL + '/images/default-movie.gif'}
          alt=""
          className={classes.frontImage}
        />
        {/* <Typography variant="caption">{resolutions}</Typography> */}
        <Typography variant="caption" component="p" className={classes.frontTitle}>
          {title}
        </Typography>
        <Box boxShadow={6} className={classes.hoverSection}>
          <img
            src={image || process.env.PUBLIC_URL + '/images/default-movie.gif'}
            alt=""
            className={classes.image}
          />
          <Box padding="5px 10px 15px">
            <Box display="flex" alignItems="center" flexWrap="wrap" className={classes.actions}>
              <IconButton className={`${classes.playButton} ${classes.actionIcon}`}>
                <PlayArrow className={classes.playIcon} size="large" color="primary" />
              </IconButton>
              {!added && (
                <IconLabel
                  Icon={Add}
                  label="Add to Favor"
                  onClick={(e) => insertMyListHandler(e, id)}
                  classes={{ root: classes.actionIcon }}
                />
              )}

              <IconLabel
                Icon={ThumbUpAltOutlined}
                label="Like"
                onClick={(e) => ratingHandler(e, id, 1)}
                classes={{ root: classes.actionIcon }}
                color={kind === 1 ? '#E30812' : '#fff'}
              />
              <IconLabel
                Icon={ThumbDownAltOutlined}
                label="Dislike"
                onClick={(e) => ratingHandler(e, id, 2)}
                classes={{ root: classes.actionIcon }}
                color={kind === 2 ? '#E30812' : '#fff'}
              />
            </Box>
            <Box>
              <Typography variant="body1" className={classes.title}>
                {title}
              </Typography>
              <Typography variant="body2" className={classes.description}>
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default MovieItem;
