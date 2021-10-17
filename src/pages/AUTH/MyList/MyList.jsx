import { Box, Grid, Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieItem from '../../../components/MovieItem/MovieItem';
import { toast } from 'react-toastify';
import useStyles from './MyList.styles';
import { getMyList } from '../../../slices/myList.slice';
import Pagination from '@material-ui/lab/Pagination';

function MyList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const totalPages = useSelector((state) => state.mylist.totalPages);
  const totalResults = useSelector((state) => state.mylist.totalResults);
  const currentPage = useSelector((state) => state.mylist.page);
  const results = useSelector((state) => state.mylist.results);

  const isLoading = useSelector((state) => state.search.isLoading);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(42);
  const [error, setError] = useState(null);

  const pageChangeHandler = (event, value) => {
    setPage(value);
  };

  const getMyListHandler = useCallback(
    async (page, limit) => {
      setError(null);
      try {
        await dispatch(
          getMyList({
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
    getMyListHandler(page, limit);
  }, [dispatch, page, limit, getMyListHandler]);

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
              <MovieItem
                id={movie._id}
                title={movie.title}
                image={movie.posterUrl}
                description={movie.overview}
                genres={movie.genres}
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

export default MyList;
