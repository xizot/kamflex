import React, { useCallback, useEffect } from 'react';
import {
  Typography,
  FormControl,
  FilledInput,
  InputLabel,
  FormHelperText,
  Box,
  IconButton,
} from '@material-ui/core';
import { toast } from 'react-toastify';
import useStyles from './VerifyEmail.styles';
import { useInput } from '../../hooks/user-input';
import { verifyCodeSchema } from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';
import { Sync } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { confirmEmail, sendConfirmEmail } from '../../slices/auth.slice';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import Requesting from '../../components/Requesting/Requesting';

function VerifyEmail() {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id, code } = queryString.parse(location.search);
  const history = useHistory();
  const {
    enteredInput: verifyCode,
    inputBlurHandler: verifyCodeBlurHandler,
    inputChangeHandler: verifyCodeChangeHandler,
    inputReset: verifyCodeReset,
    inputIsValid: verifyCodeIsvalid,
    hasError: verifyCodeHasError,
    errorMsg: verifyCodeErrorMessage,
  } = useInput(verifyCodeSchema, code || '');

  const resendConfirmEmailHandler = async () => {
    try {
      const reponse = await dispatch(sendConfirmEmail()).unwrap();
      toast.success(reponse.message);
    } catch (error) {
      toast.error(error);
    }
  };
  const formIsValid = verifyCodeIsvalid;
  const confirmEmailHandler = useCallback(
    async (id, code) => {
      console.log(id, code);
      try {
        await dispatch(
          confirmEmail({
            id,
            activationCode: code,
          })
        ).unwrap();
        toast.success('Verify successfully. Redirect to home page after 5s...');
        history.push(location.state?.from || '/');
        verifyCodeReset();
      } catch (error) {
        toast.error(error);
      }
    },
    [dispatch, history, verifyCodeReset, location.state]
  );
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    confirmEmailHandler(user._id, verifyCode);
  };

  useEffect(() => {
    if (id && code) {
      confirmEmailHandler(id, code);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      {isLoading && <Requesting text="Please wait while we verifying your email..." />}
      <div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Typography variant="h6" className={classes.title}>
            Account activation
          </Typography>
          <div className={classes.formControl}>
            <FormControl
              error={verifyCodeHasError}
              variant="filled"
              fullWidth
              className={classes.textField}>
              <InputLabel htmlFor="verifyCode" className={classes.inputLabel}>
                Activation code
              </InputLabel>
              <FilledInput
                value={verifyCode}
                onBlur={verifyCodeBlurHandler}
                onChange={verifyCodeChangeHandler}
                id="verifyCode"
                type="text"
              />
            </FormControl>

            {(verifyCodeHasError && (
              <FormHelperText className={classes.errorMessage}>
                {verifyCodeErrorMessage}
              </FormHelperText>
            )) ||
              (verifyCode.length === 0 && (
                <FormHelperText style={{ color: '#fff', paddingLeft: 8 }}>
                  The CODE in your email
                </FormHelperText>
              ))}
          </div>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box flex={1} marginRight={1}>
              <ButtonLoading
                size="large"
                isLoading={isLoading}
                type="submit"
                disabled={!formIsValid}>
                Active
              </ButtonLoading>
            </Box>

            <IconButton color="primary" onClick={resendConfirmEmailHandler}>
              <Sync />
            </IconButton>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
