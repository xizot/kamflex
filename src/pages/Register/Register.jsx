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
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './RegisterStyle';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link, useHistory, Redirect, useLocation } from 'react-router-dom';
import { useInput } from '../../hooks/user-input';
import { passwordschema, usernameSchema, emailSchema, confirmpasswordSchema } from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';
import MomentUtils from '@date-io/moment';
import { useDispatch } from 'react-redux';
import { register } from '../../slices/auth.slice';
import { useSelector } from 'react-redux';
import moment from 'moment';
function Register() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [birthDate, setBirthDate] = React.useState(new Date());
  const [birthError, setBirthError] = useState(null);
  const [isNotMatch, setIsNotMatch] = useState(true);

  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();

  // const today = new Date(new Date().toISOString().slice(0, 10));
  // const minDate = today.setFullYear(today.getFullYear() + 5);
  // const maxDate = today.setFullYear(today.getFullYear() + 150);

  const dispatch = useDispatch();
  const handleDateChange = (date) => {
    // setBirthError(null);
    // const selectedDate = new Date(date);

    // if (selectedDate.getTime() > maxDate) {
    //   setBirthError('ValidationError: Birth should not be after maximal date');
    //   return;
    // }
    // if (selectedDate.getTime() < minDate) {
    //   setBirthError('ValidationError: Birth should not be before minimal date');
    //   return;
    // }
    setBirthDate(date);
  };

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
    isTouched,
  } = useInput(confirmpasswordSchema);

  const passwordOnChangeHandler = (e) => {
    passwordChangeHandler(e);
    if (e.target.value !== confirmpassword && isTouched) {
      setIsNotMatch(true);
    } else {
      setIsNotMatch(false);
    }
  };
  const confirmPasswordOnChangeHandler = (e) => {
    confirmpasswordChangeHandler(e);
    if (e.target.value !== password) {
      setIsNotMatch(true);
    } else {
      setIsNotMatch(false);
    }
  };

  const formIsValid =
    usernameIsvalid &&
    emailIsvalid &&
    passwordIsvalid &&
    confirmpasswordIsvalid &&
    birthError === null;

  const toggleShowPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };
  const mouseDownPasswordHandler = (event) => {
    event.preventDefault();
  };
  const toggleShowRetypePasswordHandler = () => {
    setShowRetypePassword((prevState) => !prevState);
  };
  const mouseDownRetypePasswordHandler = (event) => {
    event.preventDefault();
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    setError(null);
    try {
      await dispatch(
        register({
          email,
          username,
          password,
          birthdate: moment(birthDate).format('yyyy-MM-DD'),
        })
      ).unwrap();
      history.push('/activation');
      usernameReset();
      emailReset();
      passwordReset();
      confirmpasswordReset();
    } catch (error) {
      setError(error);
    }
  };
  if (isAuthenticated) {
    return <Redirect to={location.state?.from || '/'} />;
  }
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
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <FormControl
                error={passwordHasError}
                variant="filled"
                fullWidth
                className={classes.textField}>
                <KeyboardDatePicker
                  className={classes.datePicker}
                  label="Birth day"
                  format="MM/DD/yyyy"
                  // minDate={minDate}
                  // maxDate={maxDate}
                  value={birthDate}
                  onChange={handleDateChange}
                  error={false}
                  helperText={null}
                  autoOk
                  variant="inline"
                  inputVariant="filled"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </FormControl>
            </MuiPickersUtilsProvider>

            {birthError && (
              <FormHelperText className={classes.errorMessage}>{birthError}</FormHelperText>
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
                onChange={passwordOnChangeHandler}
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
                onChange={confirmPasswordOnChangeHandler}
                id="password"
                type={showRetypePassword ? 'text' : 'password'}
                className={classes.inputField}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={toggleShowRetypePasswordHandler}
                      onMouseDown={mouseDownRetypePasswordHandler}>
                      {showRetypePassword ? <Visibility /> : <VisibilityOff />}
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
            {isNotMatch && isTouched && !confirmpasswordHasError && (
              <FormHelperText className={classes.errorMessage}>
                <>ValidationError: Retype password does not match password</>
              </FormHelperText>
            )}
          </div>
          {error && <FormHelperText className={classes.resError}>{error}</FormHelperText>}
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
