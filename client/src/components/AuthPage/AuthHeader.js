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
  },

  headerText: {
    fontSize: "18px",
    color: theme.palette.secondary.main,
  },

  button: {
    fontSize: "14pt",
    padding: "15px 50px",
    color: theme.palette.primary.main,
    backgroundColor: "white",
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
