import { Box, Grid, Typography } from '@material-ui/core';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieItem from '../../../components/MovieItem/MovieItem';
import { toast } from 'react-toastify';
import useStyles from './History.styles';
import { getHistory } from '../../../slices/history.slice';
import Pagination from '@material-ui/lab/Pagination';
import { AccessTime } from '@material-ui/icons';
import { timeToClient } from '../../../utils/converter';

function History() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const totalPages = useSelector((state) => state.history.totalPages);
  // const totalResults = useSelector((state) => state.history.totalResults);
  // const currentPage = useSelector((state) => state.history.page);
  // const isLoading = useSelector((state) => state.search.isLoading);

  const results = useSelector((state) => state.history.results);
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(42);
  const limit = 42;
  const [error, setError] = useState(null);

  const pageChangeHandler = (event, value) => {
    setPage(value);
  };

  const getHistoryHandler = useCallback(
    async (page, limit) => {
      setError(null);
      try {
        await dispatch(
          getHistory({
            page,
            limit,
          })
        ).unwrap();
      } catch (error) {
        toast.error(error);
        setError('Something went wrong!');
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getHistoryHandler(page, limit);
  }, [dispatch, page, limit, getHistoryHandler]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.root}>
      <Box padding="0 4%">
        {!results || results?.length === 0 ? (
          <Typography color="primary" style={{ textAlign: 'center' }}>
            {error ? error : `No data available`}
          </Typography>
        ) : (
          <></>
        )}
        <Grid container spacing={2}>
          {results?.map((movie, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index} className={classes.section}>
              <Box className={classes.release} display="flex" flexWrap="wrap" alignItems="center">
                <AccessTime fontSize="small" className={classes.iconTime} />
                <Typography variant="body1" className={classes.time}>
                  {movie.date && timeToClient(movie.date)}
                </Typography>
              </Box>
              <MovieItem
                id={movie.media?._id}
                title={movie.media?.title}
                image={movie.media?.posterUrl}
                description={movie.media?.overview}
                // genres={movie.media?.genres.map((item) => item.name)}
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

export default History;
