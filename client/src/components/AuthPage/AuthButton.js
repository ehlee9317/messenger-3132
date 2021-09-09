import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../themes/theme";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // [theme.breakpoints.down("xs")]: {
    //   alignItems: "center",
    //   // marginLeft: "-20%",
    // },
  },

  button: {
    alignSelf: "center",
    fontSize: "14pt",
    fontWeight: "bold",
    lineHeight: "20px",
    padding: "20px 65px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12pt",
      padding: "15px 45px",
      marginTop: "20px",
    },
  },
}));

const AuthButton = (props) => {
  // const history = useHistory();
  const classes = useStyles();
  const { text } = props;

  return (
    <Grid className={classes.formContainer}>
      <Button className={classes.button} type="submit" size="large">
        {text}
      </Button>
    </Grid>
  );
};

export default AuthButton;
