import { Box, Container } from '@material-ui/core';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import useStyles from './Home.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mainvisual from '../../components/Mainvisual/Mainvisual';
import MovieSlider from '../../components/MovieSlider/MovieSlider';
import { useDispatch } from 'react-redux';
import { mediaGetByPage } from '../../slices/media.slice';

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [topLikes, setTopLikes] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [topViews, setTopViews] = useState([]);
  const limit = 20;
  const getMediaBySort = useCallback(
    async (sort, type) => {
      try {
        const response = await dispatch(
          mediaGetByPage({
            page: 1,
            limit,
            sort,
          })
        ).unwrap();
        if (type === 'likes') {
          setTopLikes(response.results);
        } else if (type === 'views') {
          setTopViews(response.results);
        } else if (type === 'new') {
          setNewMovies(response.results);
        }
      } catch (error) {}
    },
    [dispatch]
  );

  useEffect(() => {
    getMediaBySort('desc(_id)', 'new');
    getMediaBySort('desc(likes)', 'likes');
    getMediaBySort('desc(views)', 'views');
  }, [getMediaBySort]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <Mainvisual />
      <Container>
        {newMovies.length > 0 && (
          <Box className={classes.section}>
            <MovieSlider listMovie={newMovies} title="NEW MOVIE" slidesToShow={5} />
          </Box>
        )}

        <Box className={classes.section}>
          <MovieSlider
            listMovie={topLikes}
            subtitle="MOST FAVOURITE"
            title="Popular Movies"
            slidesToShow={6}
          />
        </Box>
        <Box className={classes.section}>
          <MovieSlider
            listMovie={topViews}
            subtitle="MOST WATCHED MOVIES"
            title="Popular Movies"
            slidesToShow={4}
          />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
