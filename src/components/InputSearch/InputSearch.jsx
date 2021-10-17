import { TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { searchActions } from '../../slices/search.slice';
import useStyles from './InputSearch.styles';

function InputSearch() {
  const classes = useStyles();
  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  const history = useHistory();

  const searchChangeHandler = (e) => {
    dispatch(searchActions.searchChange(e.target.value));
  };

  const openSearchHandler = (e) => {
    e.stopPropagation();
    dispatch(searchActions.openSearch());
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    history.push(`/search?q=${query}`);
  };

  useEffect(() => {
    window.addEventListener('click', () => {
      dispatch(searchActions.closeSearch());
    });
  }, [dispatch]);

  return (
    <form
      className={`${classes.root} ${isOpenSearch ? classes.isOpen : classes.isClose}`}
      onClick={(e) => openSearchHandler(e)}
      onSubmit={formSubmitHandler}>
      <TextField
        variant="standard"
        className={classes.searchInput}
        value={query}
        onChange={searchChangeHandler}
      />
      <Search className={classes.icon} />
    </form>
  );
}

export default InputSearch;
