import React from "react";
import { Snackbar, Alert } from "@mui/material";

const CustomSnackbar = ({ open, message, type, duration = 2500, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{
          width: "100%",
          padding: "12px",
          fontSize: "1.1em",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "pre-line",
          lineHeight: 1.5,          
          color: "white", 
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
