import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewTextUnread: {
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: theme.typography.fontWeight,
  },
  previewTextread: {
    fontSize: 12,
    color: theme.palette.secondary.main,
    letterSpacing: -0.17,
  },
  unreadStyles: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0.3, 1, 1, 1),
    borderRadius: "100%",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeight,
    height: "23px",
    minWidth: "25px",
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadMessages } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={
            unreadMessages !== 0
              ? classes.previewTextUnread
              : classes.previewTextread
          }
        >
          {latestMessageText}
        </Typography>
      </Box>

      {unreadMessages !== 0 && (
        <Box className={classes.unreadStyles}>
          <span>{unreadMessages}</span>
        </Box>
      )}
    </Box>
  );
};

export default ChatContent;
