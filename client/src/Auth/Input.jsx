import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({ name, half, handleChange, label, autoFocus, handleShowPassword, type, placeholder, error, helperText }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment:
            name === "password" ? (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    </Grid>
  );
};

export default Input;
