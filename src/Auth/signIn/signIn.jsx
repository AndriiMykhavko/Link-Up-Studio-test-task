import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    user: null
  };

  hanleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  stopSubmit = (event) => {
    event.preventDefault();
  }
  
  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    const { classes } = this.props;

     if(this.props.isAuth)  return <Redirect  to={"/"}/>
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.stopSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.hanleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.hanleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.login}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link to={`/signUp`} className={classes.link} variant="body2">
                  "Don't have an account? Sign Up"
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: "#1976d2",
  },
});

export default withStyles(useStyles)(SignIn);
