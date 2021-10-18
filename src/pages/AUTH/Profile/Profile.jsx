import React, { useEffect, useRef, useState } from 'react';
import {
  FormControl,
  TextField,
  Typography,
  Grid,
  Box,
  FormHelperText,
  Container,
} from '@material-ui/core';
import { useInput } from '../../../hooks/user-input';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../../components/UI/ButtonLoading/ButtonLoading';
import { toast } from 'react-toastify';
import useStyles from './Profile.styles';
import { emailSchema, passwordschema } from '../../../schemas';

const Profile = ({
  accId,

  pAvatar,
  onUpdateNewData,
  onChangeDetails,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const modifyLoading = false;
  const basicLoading = false;
  const [selectedFile, setSelectedFile] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const fileRef = useRef();
  const {
    enteredInput: email,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    inputIsValid: emailIsValid,
  } = useInput(emailSchema);
  const {
    enteredInput: password,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
    inputIsValid: passwordIsValid,
    inputReset: passwordReset,
  } = useInput(passwordschema);
  const {
    enteredInput: newPassword,
    hasError: newPasswordHasError,
    inputBlurHandler: newPasswordBlurHandler,
    inputChangeHandler: newPasswordChangeHandler,
    inputIsValid: newPasswordIsValid,
    inputReset: newPasswordReset,
  } = useInput(passwordschema);
  const {
    enteredInput: confirmPassword,
    hasError: confirmPasswordHasError,
    inputBlurHandler: confirmPasswordBlurHandler,
    inputChangeHandler: confirmPasswordChangeHandler,
    inputIsValid: confirmPasswordIsValid,
    inputReset: confirmPasswordReset,
  } = useInput(passwordschema);

  const {
    enteredInput: fullName,
    hasError: fullNameHasError,
    inputBlurHandler: fullNameBlurHandler,
    inputChangeHandler: fullNameChangeHandler,
    inputIsValid: fullNameIsValid,
  } = useInput(emailSchema);

  const fileChangeHandler = (file) => {
    setSelectedFile(file || null);
  };

  const removeFileChangeHandler = () => {
    fileRef.current.value = '';
    setSelectedFile(null);
  };

  const insertOrUpdateAvatarHandler = async () => {
    console.log('here', selectedFile);
    let formData = new FormData();
    if (selectedFile === null) return;
    formData.append('accId', accId);
    formData.append('image', selectedFile);
    try {
      onUpdateNewData({ accAvatar: selectedFile });
      onChangeDetails({ accAvatar: newAvatar });
      setSelectedFile(null);
      setNewAvatar(null);
      toast.success('Cập nhật ảnh thành công');
    } catch (error) {
      toast.error(error);
    }
  };

  const formIsValid = emailIsValid && fullNameIsValid;

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    let data = {
      accId: +accId,
      accEmail: email,
      accFullName: fullName,
    };

    if (isChangePassword) {
      if (!passwordIsValid || !newPasswordIsValid || !confirmPasswordIsValid) {
        return;
      } else {
        data = {
          ...data,
          accOldPassword: password,
          accNewPassword: newPassword,
          accConfirmPassword: confirmPassword,
        };
      }
    }

    try {
      onUpdateNewData(data);
      passwordReset();
      newPasswordReset();
      confirmPasswordReset();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.form} boxShadow={3}>
          <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={3}>
                <Box className={classes.handleAvatar}>
                  <input
                    accept="image/jpeg"
                    id="avatar"
                    type="file"
                    ref={fileRef}
                    style={{ display: 'none' }}
                    onChange={(e) => fileChangeHandler(e.target.files[0])}
                  />
                  <div className={classes.labelAvatar}>
                    <img
                      src={
                        newAvatar
                          ? newAvatar
                          : pAvatar || process.env.PUBLIC_URL + '/images/default-avatar.png'
                      }
                      alt="user avatar"
                      className={classes.avatar}
                    />
                    <div className={`${classes.avatarHover} ${newAvatar ? 'is-show' : ''}`}>
                      {!newAvatar && (
                        <Typography variant="caption" component="label" htmlFor="avatar">
                          Select your avatar
                        </Typography>
                      )}
                      {!modifyLoading && newAvatar && (
                        <Typography
                          variant="caption"
                          component="label"
                          onClick={removeFileChangeHandler}
                          className={classes.labelDelete}>
                          Remove
                        </Typography>
                      )}
                    </div>
                  </div>
                  <ButtonLoading
                    size="large"
                    type="button"
                    fullWidth={false}
                    isLoading={modifyLoading}
                    disabled={selectedFile === null}>
                    Update Avatar
                  </ButtonLoading>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl className={classes.formControl}>
                  <TextField
                    error={fullNameHasError}
                    label="Username"
                    helperText={fullNameHasError && 'Username is invalid'}
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={fullName}
                    onBlur={fullNameBlurHandler}
                    onChange={fullNameChangeHandler}
                    inputProps={{
                      autoComplete: 'new-password',
                      form: {
                        autoComplete: 'off',
                      },
                    }}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    error={emailHasError}
                    label="Email"
                    type="email"
                    helperText={emailHasError && 'Email is invalid'}
                    required
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={email}
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    inputProps={{
                      autoComplete: 'new-password',
                      form: {
                        autoComplete: 'off',
                      },
                    }}
                  />
                </FormControl>

                <Typography
                  color="primary"
                  variant="subtitle1"
                  style={{
                    marginLeft: 'auto',
                    width: 'fit-content',
                    whiteSpace: 'nowrap',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    marginBottom: 10,
                  }}
                  onClick={() => setIsChangePassword((prev) => !prev)}>
                  {isChangePassword ? 'Cancel' : 'Change Password'}
                </Typography>
                {isChangePassword && (
                  <>
                    <FormControl className={classes.formControl}>
                      <TextField
                        label="Current password"
                        type="password"
                        error={passwordHasError}
                        helperText={passwordHasError && 'Password is invalid'}
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={password}
                        onBlur={passwordBlurHandler}
                        onChange={passwordChangeHandler}
                        inputProps={{
                          autoComplete: 'new-password',
                          form: {
                            autoComplete: 'off',
                          },
                        }}
                      />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <TextField
                        label="New password"
                        type="password"
                        error={newPasswordHasError}
                        helperText={newPasswordHasError && 'New password is invalid'}
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={newPassword}
                        onBlur={newPasswordBlurHandler}
                        onChange={newPasswordChangeHandler}
                        inputProps={{
                          autoComplete: 'new-password',
                          form: {
                            autoComplete: 'off',
                          },
                        }}
                      />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <TextField
                        label="Confirm password"
                        type="password"
                        error={confirmPasswordHasError}
                        helperText={confirmPasswordHasError && 'Password is not match'}
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={confirmPassword}
                        onBlur={confirmPasswordBlurHandler}
                        onChange={confirmPasswordChangeHandler}
                        inputProps={{
                          autoComplete: 'new-password',
                          form: {
                            autoComplete: 'off',
                          },
                        }}
                      />
                    </FormControl>
                  </>
                )}
                <ButtonLoading
                  isLoading={basicLoading}
                  fullWidth
                  type="submit"
                  disabled={
                    !formIsValid ||
                    (isChangePassword &&
                      (!passwordIsValid || !newPasswordIsValid || !confirmPasswordIsValid))
                  }>
                  {'Change information'}
                </ButtonLoading>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};
export default Profile;
