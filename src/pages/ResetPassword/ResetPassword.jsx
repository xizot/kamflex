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

import useStyles from './ResetPassword.styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/user-input';
import { passwordschema, recoveryCodeSchema, confirmpasswordSchema } from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';

function ResetPassword() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    enteredInput: recoveryCode,
    inputBlurHandler: recoveryCodeBlurHandler,
    inputChangeHandler: recoveryCodeChangeHandler,
    inputReset: recoveryCodeReset,
    inputIsValid: recoveryCodeIsvalid,
    hasError: recoveryCodeHasError,
    errorMsg: recoveryCodeErrorMessage,
  } = useInput(recoveryCodeSchema);

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

  const formIsValid = recoveryCodeIsvalid && passwordIsvalid && confirmpasswordIsvalid;

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

      alert('resetPassword');
      recoveryCodeReset();
      passwordReset();
      confirmpasswordReset();
    }, 2000);
  };
  return (
    <div className={classes.root}>
      <div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Typography variant="h6" className={classes.title}>
            Reset Password
          </Typography>
          <div className={classes.formControl}>
            <FormControl
              error={recoveryCodeHasError}
              variant="filled"
              fullWidth
              className={classes.textField}>
              <InputLabel htmlFor="recoveryCode" className={classes.inputLabel}>
                RecoveryCode
              </InputLabel>
              <FilledInput
                value={recoveryCode}
                onBlur={recoveryCodeBlurHandler}
                onChange={recoveryCodeChangeHandler}
                id="recoveryCode"
                type="text"
              />
            </FormControl>
            {recoveryCodeHasError && (
              <FormHelperText className={classes.errorMessage}>
                {recoveryCodeErrorMessage}
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
            Confirm
          </ButtonLoading>

          <Box display="flex" flexWrap="wrap" alignItems="center">
            <Typography variant="body2" className={classes.textHelper}>
              <Link to="/forgot-password">Back</Link>
            </Typography>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
