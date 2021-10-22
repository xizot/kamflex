import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { YouTube } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import useStyles from './Mainvisual.styles';
import { useDispatch } from 'react-redux';
import { mediaGetByPage } from '../../slices/media.slice';

function Mainvisual() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [listMovie, setListMovie] = useState([]);

  const getMainvisualItems = useCallback(
    async (limit) => {
      try {
        const response = await dispatch(
          mediaGetByPage({
            page: 1,
            limit,
            sort: 'desc(_id)',
          })
        ).unwrap();
        setListMovie(response.results);
      } catch (error) {
        console.log('🚀 ~ file: Mainvisual.jsx ~ line 27 ~ error', error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getMainvisualItems(5);
  }, [getMainvisualItems]);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    customPaging: function (i) {
      return (
        <div className={classes.sliderPaging}>
          <Typography variant="body1" className={classes.sliderPagingItem}>
            {`0${i + 1}`.slice(-2)}
          </Typography>
        </div>
      );
    },
  };
  return (
    <Box className={classes.root}>
      <Slider {...settings}>
        {listMovie.map((movie, index) => (
          <div className={classes.sliderItem} key={index}>
            <div className={classes.sliderImage}>
              <img src={movie.backdropUrl} alt="" />
            </div>
            <Box className={classes.sliderInfo}>
              <Container>
                <Typography variant="h4" className={classes.sliderTitle}>
                  {movie.title}
                </Typography>
                <Typography variant="body1" className={classes.sliderDescription}>
                  {movie.overview}
                </Typography>
                <Link to={`/detail/${movie._id}`} className={classes.watchVideo}>
                  <YouTube className={classes.watchVideoIcon} fontSize="large" />
                  <Typography variant="body1" className={classes.watchVideoText}>
                    WATCH VIDEO
                  </Typography>
                </Link>
              </Container>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default Mainvisual;
