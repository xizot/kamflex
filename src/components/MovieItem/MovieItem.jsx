import { Box, IconButton, Typography } from '@material-ui/core';
import { Add, PlayArrow, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import IconLabel from '../UI/IconLabel/IconLabel';
import useStyles from './MovieItem.styles';

function MovieItem({ id, title, image, description, genres, resolutions, height = 180 }) {
  const classes = useStyles({ height });

  const addToFavorHandler = (e) => {
    e.preventDefault();
  };
  const likeHandler = (e) => {
    e.preventDefault();
  };
  const dislikeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.root}>
      {/* front */}
      <Box display="flex" alignItems="center" flexWrap="wrap" className={classes.frontGenres}>
        {genres &&
          genres.map((genre, index) => (
            <Link to="/" key={index} className={classes.genre}>
              {genre}
              {index < genres.length - 1 && ', '}
            </Link>
          ))}
      </Box>
      {/* hover */}
      <Link to={`/movie/${id}`} className={classes.front}>
        <img src={image} alt="" className={classes.frontImage} />
        {/* <Typography variant="caption">{resolutions}</Typography> */}
        <Typography variant="caption" className={classes.frontTitle}>
          {title}
        </Typography>
        <div className={classes.hoverSection}>
          <img src={image} alt="" className={classes.image} />
          <Box padding="5px 10px 15px">
            <Box display="flex" alignItems="center" flexWrap="wrap" className={classes.actions}>
              <IconButton className={classes.playButton}>
                <PlayArrow className={classes.playIcon} />
              </IconButton>
              <IconLabel Icon={Add} label="Add to Favor" onClick={addToFavorHandler} />
              <IconLabel Icon={ThumbUpAlt} label="Like" onClick={likeHandler} />
              <IconLabel Icon={ThumbDownAlt} label="Dislike" onClick={dislikeHandler} />
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
        </div>
      </Link>
    </div>
  );
}

export default MovieItem;
