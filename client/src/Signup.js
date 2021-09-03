import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "./store/utils/thunkCreators";
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
    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      flexDirection: "column",
      marginTop: "-30px",
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

const Signup = (props) => {
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthSideLayout>
      <AuthHeader text="Already have an account?" button="Login" link="login" />
      <Grid className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleRegister}>
          <Typography className={classes.greeting}>
            Create an account.
          </Typography>
          <AuthInput label="Username" name="username" type="text" />
          <AuthInput label="E-mail address" name="email" type="email" />

          <AuthInput
            label="Password"
            name="password"
            type="password"
            inputProps={{ minLength: 6 }}
          />

          <AuthInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            inputProps={{ minLength: 6 }}
          />

          <Button className={classes.button} type="submit" size="large">
            Create
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
