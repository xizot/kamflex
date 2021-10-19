import React, { useCallback, useEffect, useState } from 'react';
import {
  FormControl,
  TextField,
  Typography,
  Grid,
  Box,
  Container,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { useInput } from '../../../hooks/user-input';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../../components/UI/ButtonLoading/ButtonLoading';
import { toast } from 'react-toastify';
import useStyles from './Profile.styles';
import { emailSchema, passwordschema, usernameSchema } from '../../../schemas';
import { getUser, updateUser } from '../../../slices/user.slice';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const Profile = ({ accId, pAvatar, onUpdateNewData, onChangeDetails }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const modifyLoading = false;
  const user = useSelector((state) => state.auth.user);
  const userInfo = useSelector((state) => state.userInfo.info);
  const basicLoading = false;
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [newAvatar, setNewAvatar] = useState(null);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isChangeEmail, setIsChangeEmail] = useState(false);
  // const fileRef = useRef();
  const {
    enteredInput: email,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    inputIsValid: emailIsValid,
    setEnteredInput: setEmail,
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
    enteredInput: username,
    hasError: usernameHasError,
    inputBlurHandler: usernameBlurHandler,
    inputChangeHandler: usernameChangeHandler,
    inputIsValid: usernameIsValid,
    setEnteredInput: setUsername,
  } = useInput(usernameSchema);
  const [birthDate, setBirthDate] = useState(new Date());
  const handleDateChange = (date) => {
    setBirthDate(date);
  };

  const getUserHandler = useCallback(
    async (id) => {
      try {
        await dispatch(getUser(id)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    },
    [dispatch]
  );

  const isChangeEmailOrUsernameHandler = (event) => {
    setIsChangeEmail(event.target.checked);
  };

  // const fileChangeHandler = (file) => {
  //   setSelectedFile(file || null);
  // };

  // const removeFileChangeHandler = () => {
  //   fileRef.current.value = '';
  //   setSelectedFile(null);
  // };

  useEffect(() => {
    setEmail(userInfo?.email || '');
    setUsername(userInfo?.username || '');
    setBirthDate(new Date(userInfo?.birthdate) || '');
  }, [userInfo, setEmail, setUsername, setBirthDate]);

  // const insertOrUpdateAvatarHandler = async () => {
  //   console.log('here', selectedFile);
  //   let formData = new FormData();
  //   if (selectedFile === null) return;
  //   formData.append('accId', accId);
  //   formData.append('image', selectedFile);
  //   try {
  //     onUpdateNewData({ accAvatar: selectedFile });
  //     onChangeDetails({ accAvatar: newAvatar });
  //     setSelectedFile(null);
  //     setNewAvatar(null);
  //     toast.success('Cập nhật ảnh thành công');
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  const formIsValid = emailIsValid && usernameIsValid;

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    let data = {
      id: userInfo._id,
      birthdate: moment(birthDate).format('yyyy-MM-DD'),
    };

    if (isChangeEmail) {
      data.email = email;
      data.username = username;
      data.currentPassword = password;
    }
    if (isChangePassword) {
      if (!passwordIsValid || !newPasswordIsValid || !confirmPasswordIsValid) {
        return;
      } else {
        data.currentPassword = password;
        data.password = newPassword;
      }
    }
    try {
      await dispatch(updateUser(data)).unwrap();
      toast.success('Update account successfully');
      getUser(data.id);
      passwordReset();
      confirmPasswordReset();
      newPasswordReset();
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (user?._id) {
      getUserHandler(user._id);
    }
  }, [getUserHandler, user]);

  useEffect(() => {
    if (
      email !== userInfo?.email ||
      username !== userInfo?.username ||
      new Date(birthDate).toDateString() !== new Date(userInfo.birthdate).toDateString() ||
      password.length > 0
    ) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [email, username, birthDate, password, userInfo]);
  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.form} boxShadow={3}>
          <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
            <Grid container spacing={2} justifyContent="center">
              {/* <Grid item xs={12} md={3}>
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
              </Grid> */}

              <Grid item xs={12} md={6}>
                <FormControl className={classes.formControl}>
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        checked={isChangeEmail}
                        onChange={(e) => isChangeEmailOrUsernameHandler(e)}
                        name="checkedA"
                      />
                    }
                    label="Change email or username"
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    error={usernameHasError}
                    label="Username"
                    helperText={usernameHasError && 'Username is invalid'}
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={username}
                    onBlur={usernameBlurHandler}
                    onChange={usernameChangeHandler}
                    inputProps={{
                      autoComplete: 'new-password',
                      form: {
                        autoComplete: 'off',
                      },
                      readOnly: !isChangeEmail,
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
                      readOnly: !isChangeEmail,
                    }}
                  />
                </FormControl>
                <div className={classes.formControl}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <FormControl
                      error={passwordHasError}
                      variant="outlined"
                      fullWidth
                      className={classes.formControl}>
                      <KeyboardDatePicker
                        className={classes.datePicker}
                        label="Birth day"
                        size="small"
                        format="MM/DD/yyyy"
                        maxDate={new Date()}
                        value={birthDate}
                        onChange={handleDateChange}
                        error={false}
                        helperText={null}
                        autoOk
                        fullWidth
                        variant="inline"
                        inputVariant="outlined"
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </FormControl>
                  </MuiPickersUtilsProvider>
                </div>
                {isChangeEmail && !isChangePassword && (
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
                )}
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
                      (!passwordIsValid || !newPasswordIsValid || !confirmPasswordIsValid)) ||
                    !isChanged
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
