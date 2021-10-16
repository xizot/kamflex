import { Box, IconButton, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React from 'react';
import Slider from 'react-slick';
import MovieSlideItem from '../MovieSlideItem/MovieSlideItem';
import useStyles from './MovieSlider.styles';

function NextArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      color="primary"
      className={`${classes.arrow} ${classes.arrowNext}`}>
      <ArrowForwardIos className={classes.iconArrow} />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <IconButton
      onClick={onClick}
      color="primary"
      className={`${classes.arrow} ${classes.arrowPrev}`}>
      <ArrowBackIos className={classes.iconArrow} style={{ transform: 'translateX(3px)' }} />
    </IconButton>
  );
}

function MovieSlider({ title, subtitle, listMovie, slidesToShow, settings }) {
  const classes = useStyles();

  const newSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className={classes.root}>
      {subtitle && (
        <Typography variant="body2" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Slider {...newSettings} className={classes.slider}>
        {listMovie &&
          listMovie.map((movie, index) => (
            <MovieSlideItem
              key={index}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              genres={movie.genres}
              resolution={movie.resolution}
              views={movie.views}
            />
          ))}
      </Slider>
    </Box>
  );
}

export default MovieSlider;
