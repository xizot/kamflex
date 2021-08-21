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

import useStyles from './RegisterStyle';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/user-input';
import {
  passwordschema,
  usernameSchema,
  emailSchema,
  displaynameSchema,
  confirmpasswordSchema,
} from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';

function Register() {
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
    enteredInput: email,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    inputReset: emailReset,
    inputIsValid: emailIsvalid,
    hasError: emailHasError,
    errorMsg: emailErrorMessage,
  } = useInput(emailSchema);

  const {
    enteredInput: displayname,
    inputBlurHandler: displaynameBlurHandler,
    inputChangeHandler: displaynameChangeHandler,
    inputReset: displaynameReset,
    hasError: displaynameHasError,
    errorMsg: displaynameErrorMessage,
  } = useInput(displaynameSchema);

  const {
    enteredInput: password,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
    inputReset: passwordReset,
    inputIsValid: passwordIsvalid,
    hasError: passwordHasError,
    errorMsg: passwordErrorMessage,
  } = useInput(passwordschema);

  const {
    enteredInput: confirmpassword,
    inputBlurHandler: confirmpasswordBlurHandler,
    inputChangeHandler: confirmpasswordChangeHandler,
    inputReset: confirmpasswordReset,
    inputIsValid: confirmpasswordIsvalid,
    hasError: confirmpasswordHasError,
    errorMsg: confirmpasswordErrorMessage,
  } = useInput(confirmpasswordSchema);

  const formIsValid = usernameIsvalid && emailIsvalid && passwordIsvalid && confirmpasswordIsvalid;

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

      alert('register');
      usernameReset();
      emailReset();
      displaynameReset();
      passwordReset();
      confirmpasswordReset();
    }, 2000);
  };
  return (
    <div className={classes.root}>
      <div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Typography variant="h6" className={classes.title}>
            Register
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
              error={emailHasError}
              variant="filled"
              fullWidth
              className={classes.textField}>
              <InputLabel htmlFor="email" className={classes.inputLabel}>
                Email
              </InputLabel>
              <FilledInput
                value={email}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
                id="email"
                type="text"
              />
            </FormControl>
            {emailHasError && (
              <FormHelperText className={classes.errorMessage}>{emailErrorMessage}</FormHelperText>
            )}
          </div>

          <div className={classes.formControl}>
            <FormControl
              error={displaynameHasError}
              variant="filled"
              fullWidth
              className={classes.textField}>
              <InputLabel htmlFor="displayname" className={classes.inputLabel}>
                displayname
              </InputLabel>
              <FilledInput
                value={displayname}
                onBlur={displaynameBlurHandler}
                onChange={displaynameChangeHandler}
                id="displayname"
                type="text"
              />
            </FormControl>
            {displaynameHasError && (
              <FormHelperText className={classes.errorMessage}>
                {displaynameErrorMessage}
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

          <div className={classes.formControl}>
            <FormControl
              error={confirmpasswordHasError}
              className={classes.textField}
              variant="filled"
              fullWidth>
              <InputLabel htmlFor="confirmpassword" className={classes.inputLabel}>
                Retype password
              </InputLabel>
              <FilledInput
                value={confirmpassword}
                onBlur={confirmpasswordBlurHandler}
                onChange={confirmpasswordChangeHandler}
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

            {confirmpasswordHasError && (
              <FormHelperText className={classes.errorMessage}>
                {confirmpasswordErrorMessage}
              </FormHelperText>
            )}
          </div>

          <ButtonLoading size="large" isLoading={isLoading} type="submit" disabled={!formIsValid}>
            Register
          </ButtonLoading>

          <Box display="flex" justifyContent="flex-end">
            <Typography variant="body2" className={classes.textHelper}>
              <Link to="/login">Already have an account?</Link>
            </Typography>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default Register;
