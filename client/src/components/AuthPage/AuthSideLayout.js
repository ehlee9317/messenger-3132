import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bannerImage from "../../assets/bg-img.png";
import bubbleVector from "../../assets/bubble.svg";
import { theme } from "../../themes/theme";

const useStyles = makeStyles(() => ({
  sideBanner: {
    position: "relative",
    background: `top center / cover no-repeat url(${bannerImage})`,
    minHeight: "100vh",

    alignItems: "center",
    justifyContent: "center",

    "&::before": {
      content: '""',
      position: "absolute",
      // top: 0,
      // left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.8,
      background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    },
    "& *": {
      zIndex: 1,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  bannerText: {
    textAlign: "center",
    fontSize: "34pt",
    marginTop: 70,
    marginBottom: 120,
    color: "white",
  },

  icon: {
    height: '110px'
  },

  authContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: "flex-start",
    padding: "30px 42px",
    gap: 86,
  },
}));


const AuthSideLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid
        className={classes.sideBanner}
        container
        item
        xs={true}
        direction="column"
      >
        <img className={classes.icon} src={bubbleVector} alt="" />
        <Box className={classes.bannerText}>
          Converse with anyone <br /> with any language
        </Box>
      </Grid>
      <Grid className={classes.authContainer} container item xs={7}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthSideLayout;
