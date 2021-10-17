import { Box, Grid } from '@material-ui/core';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import useStyles from './Movie.styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { mediaGetByPage } from '../../slices/media.slice';

function Movie() {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(42);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.media.isLoading);
  const totalPages = useSelector((state) => state.media.totalPages);
  const totalResults = useSelector((state) => state.media.totalResults);
  const currentPage = useSelector((state) => state.media.page);
  const results = useSelector((state) => state.media.results);

  const getMediaItemsHandler = useCallback(
    async (page, limit) => {
      try {
        await dispatch(
          mediaGetByPage({
            page,
            limit,
            sort: 'desc(_id)',
          })
        ).unwrap();
      } catch (error) {
        console.log('🚀 ~ file: Movie.jsx ~ line 32 ~ error', error);
      }
    },
    [dispatch]
  );

  const pageChangeHandler = (event, value) => {
    setPage(value);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getMediaItemsHandler(page, limit);
  }, [dispatch, page, limit, getMediaItemsHandler]);

  return (
    <div className={classes.root}>
      <Box padding="0 4%">
        <Grid container spacing={2}>
          {results?.length > 0 &&
            results.map((movie, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index} className={classes.section}>
                <MovieItem
                  id={movie._id}
                  title={movie.title}
                  image={movie.posterUrl}
                  description={movie.overview}
                  genres={movie.genres?.map((item) => item.name)}
                />
              </Grid>
            ))}
        </Grid>
        {totalPages > 0 && (
          <div className={classes.pagination}>
            <Pagination
              color="primary"
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={pageChangeHandler}
              count={totalPages}
            />
          </div>
        )}
      </Box>
    </div>
  );
}

export default Movie;
