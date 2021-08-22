import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  FilledInput,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

import useStyles from './VerifyEmail.styles';
import { useInput } from '../../hooks/user-input';
import { verifyCodeSchema } from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';

function VerifyEmail() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const {
    enteredInput: verifyCode,
    inputBlurHandler: verifyCodeBlurHandler,
    inputChangeHandler: verifyCodeChangeHandler,
    inputReset: verifyCodeReset,
    inputIsValid: verifyCodeIsvalid,
    hasError: verifyCodeHasError,
    errorMsg: verifyCodeErrorMessage,
  } = useInput(verifyCodeSchema);

  const formIsValid = verifyCodeIsvalid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      alert('verify-email');
      verifyCodeReset();
    }, 2000);
  };
  return (
    <div className={classes.root}>
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
            {verifyCodeHasError && (
              <FormHelperText className={classes.errorMessage}>
                {verifyCodeErrorMessage}
              </FormHelperText>
            )}
          </div>

          <ButtonLoading size="large" isLoading={isLoading} type="submit" disabled={!formIsValid}>
            Active
          </ButtonLoading>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
