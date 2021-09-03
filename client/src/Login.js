import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";
import { theme } from "./themes/theme";
import AuthSideLayout from "./components/AuthPage/AuthSideLayout";
import AuthInput from "./components/AuthPage/AuthInput";
import AuthHeader from "./components/AuthPage/AuthHeader";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  form: {
    flex: "0 500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: "100px",
    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      flexDirection: "column",
      marginTop: "50px",
    },
    [theme.breakpoints.down("md")]: {
      display: 'flex',
      flexDirection: "column",
      marginTop: "30px",
    },
  },

  greeting: {
    fontSize: "26pt",
    fontWeight: 600,
    lineHeight: "40px",
    marginBottom: "40px",
  },

  button: {
    alignSelf: "center",
    fontSize: "14pt",
    fontWeight: "bold",
    lineHeight: "20px",
    padding: "20px 65px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    marginTop: "30px",
  },
}));

const Login = (props) => {
  const { user, login } = props;
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthSideLayout>
      <AuthHeader
        text="Don't have an account?"
        button="Create account"
        link="register"
      />

      <Grid className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleLogin}>
          <Typography className={classes.greeting}>Welcome back!</Typography>

          <AuthInput label="Username" name="username" type="text" />

          <AuthInput label="Password" name="password" type="password" />

          <Button className={classes.button} type="submit" size="large">
            Login
          </Button>
        </form>
      </Grid>
    </AuthSideLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
