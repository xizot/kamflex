import React, { useState } from 'react';
import { Facebook, GitHub, Instagram } from '@material-ui/icons';
import {
  Typography,
  Input,
  Box,
  FormHelperText,
  Container,
  Grid,
  TextField,
} from '@material-ui/core';

import useStyles from './UserProfile.style';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/user-input';
import { usernameSchema } from '../../schemas';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';
import { Label } from '@material-ui/icons';

function UserProfile() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const { inputReset: usernameReset, inputIsValid: usernameIsvalid } = useInput(usernameSchema);

  const { enteredInput: phone } = useInput();

  const { enteredInput: email } = useInput();

  const { enteredInput: about } = useInput(usernameSchema);

  const formIsValid = usernameIsvalid;

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
    }, 2000);
  };
  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <Grid className={classes.info}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={classes.title}>
              MY PROFILE
            </Typography>
            <div className={classes.userImg}>
              <img
                className={classes.avatar}
                src="https://logicsforest.com/themeforest/idea-homes/ideahomes_demo_files/images/profile.png"
                alt=""
              />
            </div>
            <ButtonLoading
              style={{ marginRight: 100 }}
              className={classes.btn}
              isLoading={isLoading}
              type="submit">
              Update Profile Picture
            </ButtonLoading>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div>
              <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.formControl}>
                  <Typography className={classes.textHelper}>Your Name:</Typography>
                  <div variant="filled" fullWidth className={classes.textField}>
                    <TextField
                      fullWidth
                      htmlFor="phone"
                      className={classes.inputLabel}
                      placeholder="mep"
                      type="text"
                    />
                  </div>
                </div>
                <div className={classes.formControl}>
                  <Typography className={classes.textHelper}>Phone:</Typography>
                  <div variant="filled" fullWidth className={classes.textField}>
                    <TextField
                      htmlFor="phone"
                      fullWidth
                      className={classes.inputLabel}
                      placeholder="(+84) 364749200"
                      type="text"
                    />
                  </div>
                </div>

                <div className={classes.formControl}>
                  <Typography className={classes.textHelper}>Email Address:</Typography>
                  <div variant="filled" fullWidth className={classes.textField}>
                    <TextField
                      fullWidth
                      htmlFor="email"
                      className={classes.textInput}
                      placeholder="mep@gmail.com"
                      type="text"
                    />
                  </div>
                </div>

                <div className={classes.formControl}>
                  <Typography className={classes.textHelper}>About:</Typography>

                  <div variant="filled" className={classes.textField}>
                    <TextField
                      aria-label="minimum height"
                      fullWidth
                      multiline
                      rows={3}
                      maxRows={7}
                      className={classes.inputLabel}
                      placeholder="mepthui"
                      type="text"
                    />
                  </div>
                </div>
                <Link to="#" className={classes.link}>
                  Change password
                </Link>

                <ButtonLoading
                  style={{ fontSize: 15 }}
                  className={classes.btn}
                  isLoading={isLoading}
                  type="submit">
                  SUBMIT
                </ButtonLoading>
              </form>
            </div>
          </Grid>
        </Grid>
        {/* <ul className={classes.options}>
          <li className={classes.optionItem}>
            <Link to="/">
              <Facebook className={classes.optionItemIcon} />
            </Link>
          </li>
          <li className={classes.optionItem}>
            <Link to="/">
              <Instagram className={classes.optionItemIcon} />
            </Link>
          </li>
          <li className={classes.optionItem}>
            <Link to="/">
              <GitHub className={classes.optionItemIcon} />
            </Link>
          </li>
        </ul> */}
      </Container>
      {/* </div> */}
    </div>
  );
}

export default UserProfile;
