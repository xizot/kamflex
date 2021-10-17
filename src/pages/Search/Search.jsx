import { Box, Grid, Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import MovieItem from '../../components/MovieItem/MovieItem';
import { getSearch, searchActions } from '../../slices/search.slice';
import { toast } from 'react-toastify';
import useStyles from './Search.styles';
import Pagination from '@material-ui/lab/Pagination';

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const totalPages = useSelector((state) => state.search.totalPages);
  // const totalResults = useSelector((state) => state.search.totalResults);
  // const currentPage = useSelector((state) => state.search.page);
  // const isLoading = useSelector((state) => state.search.isLoading);
  const results = useSelector((state) => state.search.results);

  const query = decodeURIComponent(location.search.slice(3));
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(42);
  const limit = 42;
  const [error, setError] = useState(null);

  const pageChangeHandler = (event, value) => {
    setPage(value);
  };

  const getSearchHandler = useCallback(
    async (search, page, limit, sort = 'asc(title)') => {
      setError(null);
      try {
        await dispatch(
          getSearch({
            search,
            page,
            limit,
            sort,
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
    if (query.length > 0) {
      dispatch(searchActions.searchChange(query));
      getSearchHandler(query, page, limit);
    }
  }, [dispatch, page, query, limit, getSearchHandler]);
  return (
    <div className={classes.root}>
      <Box padding="0 4%">
        {!results || results?.length === 0 ? (
          <Typography style={{ textAlign: 'center' }}>
            {error
              ? error
              : `There were no results matching your search "${query}". Try entering another keyword`}
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

export default Search;
