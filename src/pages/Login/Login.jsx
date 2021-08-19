import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Box,
  FormHelperText,
} from '@material-ui/core';

import useStyles from './Login.styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/user-input';
import { passwordschema, usernameSchema } from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';

function Login() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    enteredInput: username,
    inputBlurHandler: usernameBlurHandler,
    inputChangeHandler: usernameChangeHandler,
    inputReset: usernameReset,
    inputIsValid: usernameIsvalid,
    hasError: usernameHasError,
    errorMsg: usernameErrorMessage,
  } = useInput(usernameSchema);

  const {
    enteredInput: password,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
    inputReset: passwordReset,
    inputIsValid: passwordIsvalid,
    hasError: passwordHasError,
    errorMsg: passwordErrorMessage,
  } = useInput(passwordschema);

  const formIsValid = usernameIsvalid && passwordIsvalid;

  const toggleShowPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };
  const mouseDownPasswordHandler = (event) => {
    event.preventDefault();
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      alert('login');
      usernameReset();
      passwordReset();
    }, 2000);
  };
  return (
    <div className={classes.root}>
      <div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Typography variant="h6" className={classes.title}>
            Login form
          </Typography>
          <div className={classes.formControl}>
            <FormControl
              error={usernameHasError}
              variant="filled"
              fullWidth
              className={classes.textField}>
              <InputLabel htmlFor="username" className={classes.inputLabel}>
                Username
              </InputLabel>
              <FilledInput
                value={username}
                onBlur={usernameBlurHandler}
                onChange={usernameChangeHandler}
                id="username"
                type="text"
              />
            </FormControl>
            {usernameHasError && (
              <FormHelperText className={classes.errorMessage}>
                {usernameErrorMessage}
              </FormHelperText>
            )}
          </div>

          <div className={classes.formControl}>
            <FormControl
              error={passwordHasError}
              className={classes.textField}
              variant="filled"
              fullWidth>
              <InputLabel htmlFor="password" className={classes.inputLabel}>
                Password
              </InputLabel>
              <FilledInput
                value={password}
                onBlur={passwordBlurHandler}
                onChange={passwordChangeHandler}
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={classes.inputField}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={toggleShowPasswordHandler}
                      onMouseDown={mouseDownPasswordHandler}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            {passwordHasError && (
              <FormHelperText className={classes.errorMessage}>
                {passwordErrorMessage}
              </FormHelperText>
            )}
          </div>
          <ButtonLoading
            size="large"
            isLoading={isLoading}
            type="submit"
            disabled={!formIsValid}>
            Login
          </ButtonLoading>

          <Box display="flex" flexWrap="wrap" alignItems="center">
            <Typography variant="body2" className={classes.textHelper}>
              Don't have an account? <Link to="/register">Register</Link>
            </Typography>
            <Typography variant="body2" className={classes.textHelper}>
              <Link to="/forgot-password">Forgot password?</Link>
            </Typography>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default Login;
