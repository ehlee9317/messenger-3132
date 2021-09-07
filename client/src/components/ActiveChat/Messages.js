import React, { useEffect, useRef } from "react";
import { Box, Avatar } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  bubbleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  avatar: {
    height: 25,
    width: 25,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 5,
  },

  chatBox: {
    maxHeight: "85%",
    overflow: "auto",
    padding: "2%",
  },
}));

const Messages = (props) => {
  const classes = useStyles();
  const { messages, otherUser, userId, lastRead } = props;
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  });

  return (
    <Box className={classes.chatBox}>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <Box key={message.id} className={classes.bubbleBox}>
            <SenderBubble text={message.text} time={time} />
            {message.id === lastRead && (
              <Avatar
                alt={otherUser.username}
                src={otherUser.photoUrl}
                className={classes.avatar}
              ></Avatar>
            )}
          </Box>
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
      <Box ref={scrollRef} />
    </Box>
  );
};

export default Messages;
