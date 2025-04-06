import React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomTextField = styled(({ multiline, minRows, ...props }) => (
  <TextField multiline={multiline} minRows={minRows} {...props} />
))(({ theme, multiline, minRows }) => ({
  "& .MuiOutlinedInput-root": {
    height: multiline ? "auto" : "45px", // Dynamic height for multiline
    borderRadius: "6px",
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "14px",
    padding: "10px 14px",
  },
  "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
    fontSize: "12px",
    color: theme.palette.text.secondary,
    opacity: "0.8",
  },
  "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "1",
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[200],
  },
  "& input[type='date']::-webkit-calendar-picker-indicator": {
    filter: "invert(0)", // Change color to black
    opacity: 1,
  },
}));

export default CustomTextField;
