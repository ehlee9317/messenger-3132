import React from "react";
import { FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { theme } from "../../themes/theme";

const useStyles = makeStyles(() => ({
  inputField: {
    "& .MuiInputLabel-root": {
      color: theme.palette.secondary.main,
      fontSize: "16pt",
    },
    "& label + .MuiInput-formControl": {
      marginTop: 40,
    },
    marginBottom: "22px",
  },
}));

const AuthInput = (props) => {
  const { label, name, type, inputProps } = props;

  const classes = useStyles();

  return (
    <FormControl margin="normal" required>
      <TextField
        className={classes.inputField}
        label={label}
        name={name}
        type={type}
        inputProps={inputProps}
      />
    </FormControl>
  );
};

export default AuthInput;
