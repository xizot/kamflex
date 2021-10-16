import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  FilledInput,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

import useStyles from './ForgotPassword.styles';
import { useInput } from '../../hooks/user-input';
import { emailSchema } from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { forgotPassword } from '../../slices/auth.slice';

function ForgotPassword() {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    enteredInput: email,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    inputReset: emailReset,
    inputIsValid: emailIsvalid,
    hasError: emailHasError,
    errorMsg: emailErrorMessage,
  } = useInput(emailSchema);

  const formIsValid = emailIsvalid;

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    try {
      await dispatch(
        forgotPassword({
          email,
        })
      ).unwrap();
      emailReset();
      history.push('/recovery-password');
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className={classes.root}>
      <div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Typography variant="h6" className={classes.title}>
            Forgot Password
          </Typography>
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

          <ButtonLoading size="large" isLoading={isLoading} type="submit" disabled={!formIsValid}>
            Send
          </ButtonLoading>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
