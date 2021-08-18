import React from "react";
import {
  TextField,
  makeStyles,
  Button,
  Typography,
  alpha,
} from "@material-ui/core";

// css
// khi muon su dung css thi khai bao nhu nay
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background:
      "url(https://se20.netlify.app/static/media/login-background.b76a6aa2.jpg)",
    paddingTop: "20vh",
  },
  // object dat ten gi cung duoc
  form: {
    maxWidth: "30rem",
    margin: "0 auto 0",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #333",
    background: alpha("#000", 0.7),
  },
  title: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
    color: "#fff",
  },
  textField: {
    color: "#333",
  },
}));

function Login() {
  // khoi tao o day
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <form className={classes.form}>
          <Typography variant="h6" className={classes.title}>
            Login form
          </Typography>
          <TextField
            error={false}
            id="outlined-error-helper-text"
            label="Username"
            helperText={false && "Please enter a valid username"}
            variant="outlined"
            fullWidth
            size="small"
            margin="dense"
            className={classes.textField}
          />
          <TextField
            error={false}
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            helperText={false && "Please enter a valid password"}
            variant="outlined"
            fullWidth
            size="small"
            margin="dense"
            className={classes.textField}
          />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
