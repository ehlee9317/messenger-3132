import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../themes/theme";

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 45,
    marginTop: "10px",
    marginLeft: "-10px",

    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      flexDirection: "column",
      marginTop: "30px",
      gap: 25,
      marginLeft: "-10%"
    },
  },

  headerText: {
    fontSize: "18px",
    color: theme.palette.secondary.main,
  },

  button: {
    fontSize: "14pt",
    padding: "15px 50px",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.down("xs")]: {
      fontSize: "12pt",
      padding: "10px 30px",
    },
  },
}));

const AuthHeader = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { text, button, link } = props;

  return (
    <Grid className={classes.headerContainer} container item>
      <Typography className={classes.headerText}>{text}</Typography>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => history.push(`/${link}`)}
      >
        {button}
      </Button>
    </Grid>
  );
};

export default AuthHeader;
