import { Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './MovieSlideItem.styles';

function MovieSlideItem({ id, title, image, genres, resolution, releaseDate, views, classes }) {
  const styles = useStyles();
  return (
    <div className={`${styles?.root} ${classes ? classes.root : ''}`}>
      <div className={styles.top}>
        <div className={styles.views}>
          <Visibility className={styles.viewsIcon} />
          <Typography variant="body1" component="p">
            {views}
          </Typography>
        </div>
        <Link to={`/detail/${id}`}>
          <img src={image} alt={title} className={styles.image} />
        </Link>
        <div className={styles.hoverSection}>
          <div className={styles.genres}>
            {genres &&
              genres.map((genre, index) => (
                <Link
                  to={`/movie?genre=${genre.toLowerCase()}`}
                  key={index}
                  className={styles.genre}>
                  {genre} {index !== genres.length - 1 ? ', ' : ''}
                </Link>
              ))}
          </div>
          {resolution && (
            <div className={styles.resolution}>
              {resolution[0] ? resolution[0] : '720'}
              <Typography variant="caption" component="span">
                {resolution[1] ? resolution[1] : 'HD'}
              </Typography>
            </div>
          )}
        </div>
      </div>
      <Link to={`/movie/${id}`} className={styles.bottom}>
        <Typography variant="body1" className={styles.title}>
          {title}
        </Typography>
        {releaseDate && (
          <Typography variant="body2" className={styles.releaseDate}>
            Release Date: {releaseDate}
          </Typography>
        )}
      </Link>
    </div>
  );
}

export default MovieSlideItem;
